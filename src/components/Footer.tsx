'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Shield, Zap, Globe, Heart, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-950/40 backdrop-blur-md pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200/50 dark:border-gray-800/50">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md ring-2 ring-teal-500/20 bg-white flex items-center justify-center">
                <Image src="/logo.jpeg" alt="Root Of Web Logo" width={36} height={36} className="object-contain p-0.5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-teal-700 to-teal-500 dark:from-white dark:via-teal-300 dark:to-teal-400">
                QR Studio
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              World-class QR Code Generator built by <span className="font-bold text-teal-600 dark:text-teal-400">Root Of Web</span>. Crafted with precision, security, and high-DPI vector rendering.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Product
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
              <li><a href="#generator" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">QR Studio Generator</a></li>
              <li><a href="#templates" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Preset Templates</a></li>
              <li><a href="#dynamic" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Dynamic QR Tracking</a></li>
              <li><a href="#api" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Developer API</a></li>
            </ul>
          </div>

          {/* Legal & Standards */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Security & Standards
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-1.5"><Shield className="w-3.5 h-3.5 text-emerald-500" /><span>Privacy Compliant</span></li>
              <li className="flex items-center space-x-1.5"><Zap className="w-3.5 h-3.5 text-teal-500" /><span>300+ DPI Print Quality</span></li>
              <li className="flex items-center space-x-1.5"><Globe className="w-3.5 h-3.5 text-blue-500" /><span>Global CDN Edge</span></li>
            </ul>
          </div>

          {/* Root Of Web Callout */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 space-y-2">
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>Root Of Web Ecosystem</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Building next-generation digital products, SaaS applications & web experiences.
            </p>
            <a
              href="https://rootofweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1"
            >
              <span>Visit Root Of Web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} QR Studio by Root Of Web. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">Terms</span>
            <span className="hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">Privacy</span>
            <span className="hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
