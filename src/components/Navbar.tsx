'use client';

import React from 'react';
import Image from 'next/image';
import { Sun, Moon, Sparkles, QrCode, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Root Of Web Brand Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md ring-2 ring-teal-500/20 bg-white flex items-center justify-center">
              <Image 
                src="/logo.jpeg" 
                alt="Root Of Web Logo" 
                width={40} 
                height={40} 
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-teal-700 to-teal-500 dark:from-white dark:via-teal-300 dark:to-teal-400">
                  QR Studio
                </span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  100% FREE
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">by Root Of Web</p>
            </div>
          </div>

          {/* Micro badges & Theme toggle */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 text-xs text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-full border border-teal-500/20 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Unlimited HD Exports • No Watermark</span>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-sm"
              title="Toggle Light / Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
