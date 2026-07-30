'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { TypeSelector } from '@/components/TypeSelector';
import { CustomizationPanel } from '@/components/CustomizationPanel';
import { LivePreview } from '@/components/LivePreview';
import { Footer } from '@/components/Footer';
import { QROptions } from '@/types/qr';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const [options, setOptions] = useState<QROptions>({
    type: 'url',
    value: 'https://rootofweb.com',
    activeTheme: 'custom',
    patternStyle: 'rounded',
    cornerSquareStyle: 'extra-rounded',
    cornerDotStyle: 'dot',
    fgColor: '#0D9488',
    bgColor: '#FFFFFF',
    colorMode: 'solid',
    gradientType: 'linear',
    gradientColor1: '#0D9488',
    gradientColor2: '#10B981',
    gradientColor3: '#14B8A6',
    textureType: 'none',
    bgType: 'none',
    bgPresetUrl: null,
    bgImageUrl: null,
    bgBlur: 0,
    bgOpacity: 1,
    bgBrightness: 100,
    bgContrast: 100,
    bgFit: 'cover',
    bgGlassmorphism: false,
    enableLogo: true,
    logoUrl: '/logo.jpeg',
    logoScale: 0.22,
    logoStyle: 'glass_circle',
    logoGlow: true,
    enableFrame: true,
    frameStyle: 'card_stand',
    frameText: 'SCAN & PAY NOW',
    frameSubText: 'Root Of Web Studio',
    frameColor: '#0D9488',
    frameTextColor: '#FFFFFF',
    errorCorrectionLevel: 'M',
    dpiQuality: 300,
    smartContrastFix: true,
  });

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-[#0B0F17] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 space-y-8">
        
        {/* Header Hero Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-950 via-gray-900 to-emerald-950 border border-teal-500/30 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xl relative overflow-hidden">
          <div className="space-y-1.5 max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Root Of Web QR Studio • 100% Free Forever</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              World-Class High Precision QR Studio
            </h1>
            <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed">
              Generate unlimited vector QR codes with custom Root Of Web logos, frames, and instant browser rendering. No watermarks, no signups, zero server tracking.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-2.5 rounded-2xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Client-Side Private Engine</span>
          </div>
        </div>

        {/* Single Page Dedicated QR Layout */}
        <div className="space-y-6">
          
          {/* Top Section: QR Payload Selection */}
          <TypeSelector options={options} setOptions={setOptions} />

          {/* Bottom Grid: Customization Studio & Live Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Customization Controls (7 cols) */}
            <div className="lg:col-span-7">
              <CustomizationPanel options={options} setOptions={setOptions} />
            </div>

            {/* Live Canvas Preview (5 cols) */}
            <div className="lg:col-span-5 sticky top-20">
              <LivePreview options={options} />
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
