'use client';

import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Download, Copy, Sparkles, Check } from 'lucide-react';
import { QROptions } from '@/types/qr';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import jsPDF from 'jspdf';

interface LivePreviewProps {
  options: QROptions;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ options }) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);

  const [copied, setCopied] = React.useState(false);
  const [downloadFormat, setDownloadFormat] = React.useState<'png' | 'jpeg' | 'svg' | 'pdf'>('png');

  useEffect(() => {
    if (!qrCodeInstance.current) {
      qrCodeInstance.current = new QRCodeStyling({
        width: 280,
        height: 280,
        type: 'canvas',
        data: options.value || 'https://rootofweb.com',
        image: options.enableLogo ? options.logoUrl : undefined,
        dotsOptions: {
          color: options.fgColor,
          type: options.patternStyle as any,
        },
        backgroundOptions: {
          color: options.bgPresetUrl ? 'transparent' : options.bgColor,
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 6,
          imageSize: options.logoScale,
        },
        cornersSquareOptions: {
          type: options.cornerSquareStyle as any,
          color: options.fgColor,
        },
        cornersDotOptions: {
          type: 'dot',
          color: options.fgColor,
        },
        qrOptions: {
          errorCorrectionLevel: options.errorCorrectionLevel,
        },
      });

      if (qrRef.current) {
        qrRef.current.innerHTML = '';
        qrCodeInstance.current.append(qrRef.current);
      }
    } else {
      qrCodeInstance.current.update({
        data: options.value || 'https://rootofweb.com',
        image: options.enableLogo ? options.logoUrl : undefined,
        dotsOptions: {
          color: options.fgColor,
          type: options.patternStyle as any,
        },
        backgroundOptions: {
          color: options.bgPresetUrl ? 'transparent' : options.bgColor,
        },
        cornersSquareOptions: {
          type: options.cornerSquareStyle as any,
          color: options.fgColor,
        },
        imageOptions: {
          imageSize: options.logoScale,
        },
        qrOptions: {
          errorCorrectionLevel: options.errorCorrectionLevel,
        },
      });
    }
  }, [options]);

  const handleDownload = async () => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const pixelRatio = options.dpiQuality === 1000 ? 4 : options.dpiQuality === 600 ? 3 : 2;

    if (downloadFormat === 'png') {
      const dataUrl = await toPng(node, { pixelRatio, cacheBust: true });
      const link = document.createElement('a');
      link.download = `rootofweb-art-qr-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } else if (downloadFormat === 'jpeg') {
      const dataUrl = await toJpeg(node, { pixelRatio, quality: 0.95 });
      const link = document.createElement('a');
      link.download = `rootofweb-art-qr-${Date.now()}.jpg`;
      link.href = dataUrl;
      link.click();
    } else if (downloadFormat === 'svg') {
      const dataUrl = await toSvg(node);
      const link = document.createElement('a');
      link.download = `rootofweb-art-qr-${Date.now()}.svg`;
      link.href = dataUrl;
      link.click();
    } else if (downloadFormat === 'pdf') {
      const dataUrl = await toPng(node, { pixelRatio: 3 });
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      pdf.addImage(dataUrl, 'PNG', 40, 40, 130, 130);
      pdf.save(`rootofweb-art-qr-${Date.now()}.pdf`);
    }
  };

  const handleCopy = async () => {
    if (!containerRef.current) return;
    const dataUrl = await toPng(containerRef.current, { pixelRatio: 2 });
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-6 shadow-2xl space-y-6 flex flex-col items-center">
      
      {/* Top Header */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-black text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Aesthetic QR Render
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Vector HD Canvas Engine</p>
        </div>
        <div className="flex items-center space-x-1 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Live Render</span>
        </div>
      </div>

      {/* Main Art Container */}
      <div className="relative w-full max-w-sm flex items-center justify-center p-2">
        
        <div
          ref={containerRef}
          className={`w-full p-8 flex flex-col items-center justify-center relative shadow-2xl transition-all duration-300 ${
            options.frameStyle === 'sticker_peel'
              ? 'rounded-[48px] bg-white text-gray-900 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] border-8 border-gray-100 relative'
              : 'rounded-[32px] bg-white dark:bg-gray-900 border-4 border-teal-500'
          }`}
          style={{
            backgroundImage: options.bgPresetUrl ? `url(${options.bgPresetUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Sticker Peel Effect Overlay */}
          {options.frameStyle === 'sticker_peel' && (
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gray-200 to-white shadow-md rounded-bl-3xl border-l border-b border-gray-300" />
          )}

          {/* QR Inner Card */}
          <div className="p-3 rounded-2xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-xl border border-white/50">
            <div ref={qrRef} className="rounded-xl overflow-hidden flex items-center justify-center" />
          </div>

          {/* Sticker Bottom CTA Label */}
          {options.frameText && (
            <div className="mt-5 px-6 py-2 rounded-full font-black text-xs uppercase tracking-wider bg-teal-600 text-white shadow-lg border border-white/20">
              {options.frameText}
            </div>
          )}

        </div>

      </div>

      {/* Export Format Selector */}
      <div className="w-full pt-1">
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-2 text-center">
          Export Format ({options.dpiQuality} DPI Print Quality)
        </label>
        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
          {(['png', 'jpeg', 'svg', 'pdf'] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setDownloadFormat(fmt)}
              className={`py-1.5 text-xs font-extrabold uppercase rounded-xl border transition-all ${
                downloadFormat === fmt
                  ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400 ring-2 ring-teal-500/20'
                  : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      {/* Action Download Buttons */}
      <div className="w-full grid grid-cols-2 gap-3">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold transition-all shadow-sm"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied Image!' : 'Copy Image'}</span>
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-extrabold shadow-lg shadow-teal-500/25 transition-all scale-[1.02]"
        >
          <Download className="w-4 h-4" />
          <span>Download High-Res</span>
        </button>
      </div>

    </div>
  );
};
