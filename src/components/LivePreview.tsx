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

  // Real-time canvas render with zero network calls
  useEffect(() => {
    if (!qrCodeInstance.current) {
      qrCodeInstance.current = new QRCodeStyling({
        width: 320,
        height: 320,
        type: 'canvas',
        data: options.value || 'https://rootofweb.com',
        image: options.enableLogo ? options.logoUrl : undefined,
        dotsOptions: {
          color: options.fgColor,
          type: options.patternStyle as any,
        },
        backgroundOptions: {
          color: options.bgColor,
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 4,
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
          color: options.bgColor,
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
      link.download = `rootofweb-qr-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } else if (downloadFormat === 'jpeg') {
      const dataUrl = await toJpeg(node, { pixelRatio, quality: 0.95 });
      const link = document.createElement('a');
      link.download = `rootofweb-qr-${Date.now()}.jpg`;
      link.href = dataUrl;
      link.click();
    } else if (downloadFormat === 'svg') {
      const dataUrl = await toSvg(node);
      const link = document.createElement('a');
      link.download = `rootofweb-qr-${Date.now()}.svg`;
      link.href = dataUrl;
      link.click();
    } else if (downloadFormat === 'pdf') {
      const dataUrl = await toPng(node, { pixelRatio: 3 });
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      pdf.addImage(dataUrl, 'PNG', 45, 45, 120, 120);
      pdf.save(`rootofweb-qr-${Date.now()}.pdf`);
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
    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-6 shadow-xl space-y-6 flex flex-col items-center">
      
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
            3. Instant Live Canvas
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Real-time Browser Vector Render</p>
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Active</span>
        </div>
      </div>

      {/* Frame & QR Render Canvas Container */}
      <div
        ref={containerRef}
        className="p-6 rounded-3xl flex flex-col items-center justify-center relative shadow-2xl transition-all duration-200"
        style={{
          backgroundColor: options.bgColor,
          border: options.enableFrame ? `3.5px solid ${options.fgColor}` : 'none',
        }}
      >
        <div ref={qrRef} className="rounded-2xl overflow-hidden flex items-center justify-center" />

        {options.enableFrame && options.frameText && (
          <div
            className="mt-4 px-5 py-2 rounded-full font-extrabold text-xs uppercase tracking-wider shadow-md"
            style={{
              backgroundColor: options.fgColor,
              color: options.bgColor === '#FFFFFF' ? '#FFFFFF' : '#111827',
            }}
          >
            {options.frameText}
          </div>
        )}
      </div>

      {/* Format Selector */}
      <div className="w-full pt-1">
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-2 text-center">
          Export Format ({options.dpiQuality} DPI Quality)
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
          <span>{copied ? 'Copied Image!' : 'Copy to Clipboard'}</span>
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
        ★ 100% Client-Side Private Generation • Zero Server Uploads • Unlimited Free Exports
      </p>

    </div>
  );
};
