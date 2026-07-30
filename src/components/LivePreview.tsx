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

  // Real-time canvas render with zero server delay
  useEffect(() => {
    if (!qrCodeInstance.current) {
      qrCodeInstance.current = new QRCodeStyling({
        width: 300,
        height: 300,
        type: 'canvas',
        data: options.value || 'https://rootofweb.com',
        image: options.enableLogo ? options.logoUrl : undefined,
        dotsOptions: {
          color: options.fgColor,
          type: options.patternStyle as any,
        },
        backgroundOptions: {
          color: options.bgType === 'none' ? options.bgColor : 'transparent',
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
          type: options.cornerDotStyle as any,
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
          color: options.bgType === 'none' ? options.bgColor : 'transparent',
        },
        cornersSquareOptions: {
          type: options.cornerSquareStyle as any,
          color: options.fgColor,
        },
        cornersDotOptions: {
          type: options.cornerDotStyle as any,
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
      
      {/* Canvas Top Bar */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-black text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Live Preview Studio
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Vector Render Engine</p>
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-extrabold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-time</span>
        </div>
      </div>

      {/* Main Mockup Stand & Art Frame Container */}
      <div className="relative w-full max-w-sm flex items-center justify-center p-2">
        
        {/* Mockup Stand Background Frame */}
        <div
          ref={containerRef}
          className={`w-full p-6 rounded-[32px] flex flex-col items-center justify-center relative shadow-2xl transition-all duration-300 overflow-hidden ${
            options.frameStyle === 'card_stand'
              ? 'bg-gradient-to-b from-white/90 via-slate-100/90 to-gray-200/90 dark:from-gray-800/90 dark:via-gray-900/90 dark:to-slate-950/90 border-4 border-white/50 dark:border-gray-700/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]'
              : options.frameStyle === 'sticker_peel'
              ? 'bg-white text-gray-900 rounded-b-[40px] shadow-2xl border-4 border-amber-300'
              : 'bg-white dark:bg-gray-900 border-4 border-teal-500'
          }`}
          style={{
            backgroundImage: options.bgImageUrl ? `url(${options.bgImageUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Background Overlay */}
          {options.bgImageUrl && (
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          )}

          {/* Top CTA Header */}
          {options.enableFrame && options.frameText && (
            <div className="relative z-10 mb-4 px-6 py-2 rounded-full font-black text-xs uppercase tracking-wider bg-teal-600 text-white shadow-lg border border-white/20">
              {options.frameText}
            </div>
          )}

          {/* QR Canvas Render Wrapper */}
          <div className="relative z-10 p-3 rounded-2xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-xl border border-white/40">
            <div ref={qrRef} className="rounded-xl overflow-hidden flex items-center justify-center" />
          </div>

          {/* Bottom Medallion Label */}
          <div className="relative z-10 mt-4 flex items-center space-x-2 bg-gray-900/80 text-teal-300 px-4 py-1.5 rounded-full text-[11px] font-bold border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Root Of Web Verified QR</span>
          </div>

        </div>

      </div>

      {/* Format Selector */}
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

      {/* Download Action Buttons */}
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

      <p className="text-[11px] text-gray-400 text-center">
        ★ 100% Free Client-Side Export • No Server Processing • Unlimited Usage
      </p>

    </div>
  );
};
