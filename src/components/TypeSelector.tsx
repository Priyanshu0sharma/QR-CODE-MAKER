'use client';

import React from 'react';
import { 
  Globe, FileText, Wifi, Phone, Mail, UserCheck, CreditCard, MapPin, Calendar, MessageCircle
} from 'lucide-react';
import { QROptions, QR_TYPES } from '@/types/qr';

interface TypeSelectorProps {
  options: QROptions;
  setOptions: React.Dispatch<React.SetStateAction<QROptions>>;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, FileText, Wifi, Phone, Mail, UserCheck, CreditCard, MapPin, Calendar, MessageCircle
};

export const TypeSelector: React.FC<TypeSelectorProps> = ({ options, setOptions }) => {
  const activeTypeConfig = QR_TYPES.find((t) => t.id === options.type) || QR_TYPES[0];

  return (
    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-5 shadow-xl space-y-4">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
            1. Select QR Data Type
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Choose payload format for instant rendering</p>
        </div>
      </div>

      {/* Grid of types */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {QR_TYPES.map((t) => {
          const IconComp = ICON_MAP[t.iconName] || Globe;
          const isSelected = options.type === t.id;

          return (
            <button
              key={t.id}
              onClick={() => {
                let initialVal = options.value;
                if (t.id === 'url') initialVal = 'https://rootofweb.com';
                if (t.id === 'text') initialVal = 'Welcome to Root Of Web QR Studio!';
                if (t.id === 'wifi') initialVal = 'WIFI:S:MyHomeWiFi;T:WPA;P:Password123;;';
                if (t.id === 'whatsapp') initialVal = 'https://wa.me/1234567890?text=Hello%20Root%20Of%20Web!';
                if (t.id === 'vcard') initialVal = 'BEGIN:VCARD\nVERSION:3.0\nN:Doe;John\nFN:John Doe\nORG:Root Of Web\nTEL:+1234567890\nEMAIL:hello@rootofweb.com\nEND:VCARD';
                if (t.id === 'upi') initialVal = 'upi://pay?pa=rootofweb@upi&pn=RootOfWeb&am=100&cu=INR';

                setOptions((prev) => ({ ...prev, type: t.id, value: initialVal }));
              }}
              className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center space-y-1.5 transition-all duration-150 border ${
                isSelected
                  ? 'bg-gradient-to-br from-teal-600 to-emerald-600 text-white border-transparent shadow-lg shadow-teal-500/20 scale-[1.02]'
                  : 'bg-gray-50 dark:bg-gray-800/40 border-gray-200/60 dark:border-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <IconComp className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`} />
              <span className="text-xs font-bold truncate max-w-full">{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* Input payload box */}
      <div className="pt-2">
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
          {activeTypeConfig.name} Input Data
        </label>
        {options.type === 'vcard' ? (
          <textarea
            rows={4}
            value={options.value}
            onChange={(e) => setOptions((prev) => ({ ...prev, value: e.target.value }))}
            className="w-full p-3 text-xs font-mono rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        ) : (
          <input
            type="text"
            value={options.value}
            onChange={(e) => setOptions((prev) => ({ ...prev, value: e.target.value }))}
            placeholder={activeTypeConfig.placeholder}
            className="w-full px-4 py-3 text-xs rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        )}
      </div>

    </div>
  );
};
