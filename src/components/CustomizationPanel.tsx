'use client';

import React from 'react';
import { 
  Sparkles, Sliders, Image as ImageIcon, Palette, Layers, Wand2, Upload, RotateCw, ShieldCheck, Sun, Moon
} from 'lucide-react';
import { QROptions, AI_THEMES, BACKGROUND_COLLECTION } from '@/types/qr';

interface CustomizationProps {
  options: QROptions;
  setOptions: React.Dispatch<React.SetStateAction<QROptions>>;
}

export const CustomizationPanel: React.FC<CustomizationProps> = ({ options, setOptions }) => {
  const [activeTab, setActiveTab] = React.useState<'ai' | 'bg' | 'logo' | 'style' | 'frame'>('ai');

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-6 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-black text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center space-x-1.5">
            <Wand2 className="w-4 h-4 text-teal-500" />
            <span>AI Design & Art Studio</span>
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">1-Click Themes, Medallion Logos & Mockup Stand Frames</p>
        </div>
        <button
          onClick={() => {
            setOptions((prev) => ({
              ...prev,
              activeTheme: 'custom',
              fgColor: '#0D9488',
              bgColor: '#FFFFFF',
              bgType: 'none',
              bgImageUrl: null,
              logoStyle: 'glass_circle',
              enableLogo: true,
              logoUrl: '/logo.jpeg',
              enableFrame: true,
              frameStyle: 'card_stand',
              frameText: 'SCAN & PAY NOW',
            }));
          }}
          className="flex items-center space-x-1 text-xs text-teal-600 dark:text-teal-400 font-extrabold hover:underline"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Main Tabs */}
      <div className="grid grid-cols-5 gap-1.5 bg-gray-100 dark:bg-gray-800/70 p-1.5 rounded-2xl text-xs font-black">
        <button
          onClick={() => setActiveTab('ai')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'ai' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          AI Themes
        </button>
        <button
          onClick={() => setActiveTab('bg')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'bg' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Background
        </button>
        <button
          onClick={() => setActiveTab('logo')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'logo' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Logo Medallion
        </button>
        <button
          onClick={() => setActiveTab('style')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'style' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Matrix Colors
        </button>
        <button
          onClick={() => setActiveTab('frame')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'frame' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Mockup Frame
        </button>
      </div>

      {/* TAB 1: AI THEMES */}
      {activeTab === 'ai' && (
        <div className="space-y-4">
          <label className="block text-xs font-black text-gray-700 dark:text-gray-300">
            Select 1-Click Aesthetic AI Theme Preset
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {AI_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setOptions((prev) => ({
                    ...prev,
                    activeTheme: theme.id as any,
                    fgColor: theme.fg,
                    bgColor: theme.bg,
                    frameColor: theme.frame,
                    patternStyle: theme.pattern as any,
                  }));
                }}
                className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 ${
                  options.activeTheme === theme.id
                    ? 'border-teal-500 bg-teal-500/10 ring-2 ring-teal-500/20 scale-[1.02]'
                    : 'border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="text-xs font-extrabold text-gray-900 dark:text-white mb-2">{theme.name}</span>
                <div className="flex items-center space-x-1.5">
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.fg }} />
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.bg }} />
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.frame }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: BACKGROUND STUDIO */}
      {activeTab === 'bg' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-gray-700 dark:text-gray-300">
              Curated Background Image Collections
            </span>
            <button
              onClick={() => setOptions((prev) => ({ ...prev, bgType: 'none', bgImageUrl: null }))}
              className="text-[11px] font-bold text-red-500 hover:underline"
            >
              Remove Background
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {BACKGROUND_COLLECTION.map((bg) => (
              <button
                key={bg.id}
                onClick={() => {
                  setOptions((prev) => ({
                    ...prev,
                    bgType: 'preset',
                    bgImageUrl: bg.url,
                  }));
                }}
                className="group relative h-20 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all hover:scale-[1.03]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={bg.url} alt={bg.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-end p-2 transition-all">
                  <span className="text-[10px] font-extrabold text-white truncate">{bg.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Upload Custom BG */}
          <div className="pt-2">
            <label className="cursor-pointer w-full py-3 px-4 rounded-2xl border border-dashed border-teal-500/40 hover:bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center space-x-2 transition-all">
              <Upload className="w-4 h-4" />
              <span>Upload Custom Background Image / Art</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (evt) => {
                      if (evt.target?.result) {
                        setOptions((prev) => ({
                          ...prev,
                          bgType: 'custom_image',
                          bgImageUrl: evt.target!.result as string,
                        }));
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>
        </div>
      )}

      {/* TAB 3: LOGO MEDALLION STUDIO */}
      {activeTab === 'logo' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-gray-700 dark:text-gray-300">
              Center Logo Medallion Styling
            </span>
            <input
              type="checkbox"
              checked={options.enableLogo}
              onChange={(e) => setOptions((prev) => ({ ...prev, enableLogo: e.target.checked }))}
              className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
            />
          </div>

          {options.enableLogo && (
            <div className="space-y-4 pt-1">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-2xl border border-gray-200 dark:border-gray-700 p-1.5 bg-white flex items-center justify-center shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={options.logoUrl} alt="Logo" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => setOptions((prev) => ({ ...prev, logoUrl: '/logo.jpeg' }))}
                    className="text-xs text-teal-600 dark:text-teal-400 font-extrabold hover:underline block"
                  >
                    Use Root Of Web Logo
                  </button>
                  <label className="cursor-pointer text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-1 font-semibold">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Brand Logo Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (evt) => {
                            if (evt.target?.result) {
                              setOptions((prev) => ({ ...prev, logoUrl: evt.target!.result as string }));
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Medallion Safe Zone Surround Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'glass_circle', label: 'Glass Ring' },
                    { id: 'white_circle', label: 'Solid White' },
                    { id: 'gold_ring', label: 'Gold Ring' },
                    { id: 'silver_ring', label: 'Silver Ring' },
                    { id: 'neon_glow', label: 'Neon Glow' },
                  ].map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setOptions((prev) => ({ ...prev, logoStyle: style.id as any }))}
                      className={`py-2 px-2 rounded-xl border text-xs font-extrabold ${
                        options.logoStyle === style.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400'
                          : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: MATRIX COLORS */}
      {activeTab === 'style' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                Matrix Code Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={options.fgColor}
                  onChange={(e) => setOptions((prev) => ({ ...prev, fgColor: e.target.value }))}
                  className="w-10 h-10 rounded-xl border-none cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={options.fgColor}
                  onChange={(e) => setOptions((prev) => ({ ...prev, fgColor: e.target.value }))}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                Background Canvas Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={options.bgColor}
                  onChange={(e) => setOptions((prev) => ({ ...prev, bgColor: e.target.value }))}
                  className="w-10 h-10 rounded-xl border-none cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={options.bgColor}
                  onChange={(e) => setOptions((prev) => ({ ...prev, bgColor: e.target.value }))}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: MOCKUP FRAME */}
      {activeTab === 'frame' && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
              Mockup Display Stand Frame Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'card_stand', label: 'Acrylic Desk Stand' },
                { id: 'modern_badge', label: 'Modern Badge Frame' },
                { id: 'sticker_peel', label: 'Sticker Peel Frame' },
                { id: 'minimal_border', label: 'Minimalist Border' },
              ].map((frame) => (
                <button
                  key={frame.id}
                  onClick={() => setOptions((prev) => ({ ...prev, frameStyle: frame.id as any }))}
                  className={`py-2.5 px-3 rounded-2xl border text-xs font-extrabold ${
                    options.frameStyle === frame.id
                      ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400'
                      : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {frame.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              Custom CTA Header Text
            </label>
            <input
              type="text"
              value={options.frameText}
              onChange={(e) => setOptions((prev) => ({ ...prev, frameText: e.target.value }))}
              className="w-full px-4 py-2.5 text-xs rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-bold"
            />
          </div>
        </div>
      )}

    </div>
  );
};
