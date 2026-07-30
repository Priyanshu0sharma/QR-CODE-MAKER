'use client';

import React from 'react';
import { 
  Palette, Sliders, Image as ImageIcon, Sparkles, RotateCw, Upload, Check, Shield
} from 'lucide-react';
import { QROptions, BACKGROUND_PRESETS } from '@/types/qr';

interface CustomizationProps {
  options: QROptions;
  setOptions: React.Dispatch<React.SetStateAction<QROptions>>;
}

export const CustomizationPanel: React.FC<CustomizationProps> = ({ options, setOptions }) => {
  const [activeTab, setActiveTab] = React.useState<'design' | 'colors' | 'logo' | 'frame' | 'advanced'>('design');

  const patternStyles = [
    { id: 'square', label: 'Square' },
    { id: 'dots', label: 'Dots' },
    { id: 'rounded', label: 'Rounded' },
    { id: 'extra-rounded', label: 'Smooth' },
    { id: 'classy', label: 'Classy' },
    { id: 'classy-rounded', label: 'Artistic' },
  ];

  const cornerShapes = [
    { id: 'square', label: 'Square' },
    { id: 'dot', label: 'Circle' },
    { id: 'extra-rounded', label: 'Rounded' },
  ];

  const frameCTAs = [
    { id: 'scan_me', text: 'SCAN ME!' },
    { id: 'visit_website', text: 'VISIT WEBSITE' },
    { id: 'pay_now', text: 'PAY HERE' },
    { id: 'open', text: 'OPEN MENU' },
    { id: 'follow', text: 'FOLLOW US' },
    { id: 'download', text: 'DOWNLOAD APP' },
  ];

  return (
    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-5 shadow-xl space-y-5">
      
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
            2. Customize Aesthetics
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Design matrix pixels, colors, logos, & frames</p>
        </div>
        <button
          onClick={() => {
            setOptions((prev) => ({
              ...prev,
              patternStyle: 'rounded',
              cornerSquareStyle: 'extra-rounded',
              fgColor: '#0D9488',
              bgColor: '#FFFFFF',
              enableLogo: true,
              logoUrl: '/logo.jpeg',
              enableFrame: true,
              frameText: 'SCAN ME!',
              frameColor: '#0D9488',
            }));
          }}
          className="flex items-center space-x-1 text-xs text-teal-600 dark:text-teal-400 font-bold hover:underline"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="grid grid-cols-5 gap-1 bg-gray-100 dark:bg-gray-800/60 p-1 rounded-2xl text-xs font-bold">
        <button
          onClick={() => setActiveTab('design')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'design' ? 'bg-white dark:bg-gray-700 shadow text-teal-600 dark:text-teal-400' : 'text-gray-500'}`}
        >
          Pattern
        </button>
        <button
          onClick={() => setActiveTab('colors')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'colors' ? 'bg-white dark:bg-gray-700 shadow text-teal-600 dark:text-teal-400' : 'text-gray-500'}`}
        >
          Colors
        </button>
        <button
          onClick={() => setActiveTab('logo')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'logo' ? 'bg-white dark:bg-gray-700 shadow text-teal-600 dark:text-teal-400' : 'text-gray-500'}`}
        >
          Center Logo
        </button>
        <button
          onClick={() => setActiveTab('frame')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'frame' ? 'bg-white dark:bg-gray-700 shadow text-teal-600 dark:text-teal-400' : 'text-gray-500'}`}
        >
          Frame
        </button>
        <button
          onClick={() => setActiveTab('advanced')}
          className={`py-2 rounded-xl transition-all ${activeTab === 'advanced' ? 'bg-white dark:bg-gray-700 shadow text-teal-600 dark:text-teal-400' : 'text-gray-500'}`}
        >
          Quality
        </button>
      </div>

      {/* TAB 1: PATTERNS */}
      {activeTab === 'design' && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
              Matrix Pixel Style
            </label>
            <div className="grid grid-cols-3 gap-2">
              {patternStyles.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setOptions((prev) => ({ ...prev, patternStyle: item.id as any }))}
                  className={`py-2.5 px-2 rounded-2xl border text-xs font-semibold transition-all ${
                    options.patternStyle === item.id
                      ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400 ring-2 ring-teal-500/20'
                      : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
              Corner Eye Shape
            </label>
            <div className="grid grid-cols-3 gap-2">
              {cornerShapes.map((eye) => (
                <button
                  key={eye.id}
                  onClick={() => setOptions((prev) => ({ ...prev, cornerSquareStyle: eye.id as any }))}
                  className={`py-2.5 px-2 rounded-2xl border text-xs font-semibold transition-all ${
                    options.cornerSquareStyle === eye.id
                      ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400'
                      : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {eye.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: COLORS */}
      {activeTab === 'colors' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                Foreground Code Color
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
                Background Color
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

      {/* TAB 3: CENTER LOGO */}
      {activeTab === 'logo' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
              Center Brand Logo
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
                <div className="w-12 h-12 rounded-2xl border border-gray-200 dark:border-gray-700 p-1 bg-white flex items-center justify-center shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={options.logoUrl} alt="Logo" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => setOptions((prev) => ({ ...prev, logoUrl: '/logo.jpeg' }))}
                    className="text-xs text-teal-600 dark:text-teal-400 font-bold hover:underline block"
                  >
                    Use Root Of Web Logo
                  </button>
                  <label className="cursor-pointer text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Custom Brand Image</span>
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
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                  <span>Logo Scale ({Math.round(options.logoScale * 100)}%)</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.35"
                  step="0.01"
                  value={options.logoScale}
                  onChange={(e) => setOptions((prev) => ({ ...prev, logoScale: parseFloat(e.target.value) }))}
                  className="w-full accent-teal-600"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: FRAME */}
      {activeTab === 'frame' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
              Enable Outer Frame & CTA
            </span>
            <input
              type="checkbox"
              checked={options.enableFrame}
              onChange={(e) => setOptions((prev) => ({ ...prev, enableFrame: e.target.checked }))}
              className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
            />
          </div>

          {options.enableFrame && (
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Frame Text
                </label>
                <input
                  type="text"
                  value={options.frameText}
                  onChange={(e) => setOptions((prev) => ({ ...prev, frameText: e.target.value }))}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {frameCTAs.map((cta) => (
                  <button
                    key={cta.id}
                    onClick={() => setOptions((prev) => ({ ...prev, frameText: cta.text }))}
                    className="py-1.5 px-2 rounded-xl border border-gray-200 dark:border-gray-800 text-[11px] font-bold hover:bg-teal-500/10 hover:text-teal-600"
                  >
                    {cta.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: ADVANCED & DPI QUALITY */}
      {activeTab === 'advanced' && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              Export Print Quality DPI
            </label>
            <div className="grid grid-cols-3 gap-2">
              {([300, 600, 1000] as const).map((dpi) => (
                <button
                  key={dpi}
                  onClick={() => setOptions((prev) => ({ ...prev, dpiQuality: dpi }))}
                  className={`py-2 rounded-xl border text-xs font-extrabold ${
                    options.dpiQuality === dpi
                      ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400'
                      : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {dpi} DPI
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
