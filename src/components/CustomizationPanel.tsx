'use client';

import React from 'react';
import { 
  Sparkles, Wand2, Upload, RotateCw, Image as ImageIcon, Heart, Palette, Layers
} from 'lucide-react';
import { QROptions, ART_PRESETS } from '@/types/qr';

interface CustomizationProps {
  options: QROptions;
  setOptions: React.Dispatch<React.SetStateAction<QROptions>>;
}

export const CustomizationPanel: React.FC<CustomizationProps> = ({ options, setOptions }) => {
  const [activeTab, setActiveTab] = React.useState<'presets' | 'shapes' | 'colors' | 'logo'>('presets');

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-6 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-black text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-teal-500 fill-teal-500" />
            <span>Next-Gen QR Art Generator</span>
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Sticker Peels, AI Art Embeds & Animal Silhouette Shapes</p>
        </div>
        <button
          onClick={() => {
            setOptions((prev) => ({
              ...prev,
              artMode: 'sticker_peel',
              fgColor: '#0D9488',
              bgColor: '#FFFFFF',
              enableLogo: true,
              logoUrl: '/logo.jpeg',
              enableFrame: true,
              frameText: 'SCAN HERE',
              frameStyle: 'sticker_peel',
            }));
          }}
          className="flex items-center space-x-1 text-xs text-teal-600 dark:text-teal-400 font-extrabold hover:underline"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-4 gap-1.5 bg-gray-100 dark:bg-gray-800/70 p-1.5 rounded-2xl text-xs font-black">
        <button
          onClick={() => setActiveTab('presets')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'presets' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Art Presets
        </button>
        <button
          onClick={() => setActiveTab('shapes')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'shapes' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Shape Silhouette
        </button>
        <button
          onClick={() => setActiveTab('colors')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'colors' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Colors
        </button>
        <button
          onClick={() => setActiveTab('logo')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'logo' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
        >
          Brand Logo
        </button>
      </div>

      {/* TAB 1: ART PRESETS */}
      {activeTab === 'presets' && (
        <div className="space-y-4">
          <label className="block text-xs font-black text-gray-700 dark:text-gray-300">
            Select 1-Click Aesthetic Art Preset
          </label>
          <div className="grid grid-cols-2 gap-3">
            {ART_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  setOptions((prev) => ({
                    ...prev,
                    artMode: 'full_art',
                    bgPresetUrl: preset.maskUrl,
                    fgColor: preset.fg,
                    bgColor: preset.bg,
                    frameText: preset.frameText,
                    frameStyle: preset.style as any,
                  }));
                }}
                className="group relative h-28 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-all hover:scale-[1.02]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={preset.maskUrl} alt={preset.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 flex flex-col justify-end">
                  <span className="text-xs font-black text-white">{preset.name}</span>
                  <span className="text-[10px] text-teal-300 font-bold">{preset.frameText}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: SILHOUETTE SHAPES */}
      {activeTab === 'shapes' && (
        <div className="space-y-4">
          <label className="block text-xs font-black text-gray-700 dark:text-gray-300">
            Artistic Shape Mask Container
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'sticker_peel', label: 'Curled Sticker Peel' },
              { id: 'rabbit', label: 'Rabbit Silhouette' },
              { id: 'butterfly', label: 'Floral Butterfly' },
              { id: 'brand_badge', label: 'Brand Medallion' },
              { id: 'card_stand', label: 'Acrylic Stand' },
            ].map((shape) => (
              <button
                key={shape.id}
                onClick={() => setOptions((prev) => ({ ...prev, shapeMask: shape.id as any, artMode: 'shape_mask' }))}
                className={`py-3 px-2 rounded-2xl border text-xs font-black text-center transition-all ${
                  options.shapeMask === shape.id
                    ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400 ring-2 ring-teal-500/20'
                    : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                }`}
              >
                {shape.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: COLORS */}
      {activeTab === 'colors' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                Data Dots Color
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
                Background Card Color
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

      {/* TAB 4: LOGO */}
      {activeTab === 'logo' && (
        <div className="space-y-4">
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
                <span>Upload Custom Logo</span>
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
        </div>
      )}

    </div>
  );
};
