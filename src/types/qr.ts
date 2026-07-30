export interface QROptions {
  type: string;
  value: string;

  // Patterns & Eyes
  patternStyle: 'square' | 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded';
  cornerSquareStyle: 'square' | 'dot' | 'extra-rounded';
  cornerDotStyle: 'square' | 'dot';

  // Colors & Gradients
  fgColor: string;
  bgColor: string;
  isTransparentBg: boolean;
  enableGradient: boolean;
  gradientType: 'linear' | 'radial';
  gradientColor1: string;
  gradientColor2: string;
  gradientRotation: number;

  // Background Presets
  bgCategory: 'none' | 'emoji' | 'abstract' | 'luxury' | 'business' | 'nature' | 'custom';
  bgPresetUrl: string | null;

  // Center Logo
  enableLogo: boolean;
  logoUrl: string;
  logoScale: number;
  logoPadding: number;
  logoRadius: number;
  logoBgColor: string;
  autoWhiteBorder: boolean;

  // Frames & CTAs
  enableFrame: boolean;
  frameStyle: 'scan_me' | 'visit_website' | 'open' | 'follow' | 'menu' | 'pay_now' | 'download' | 'custom';
  frameText: string;
  frameColor: string;
  frameTextColor: string;

  // Quality & Advanced
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  dpiQuality: 300 | 600 | 1000;
}

export interface QRTypeConfig {
  id: string;
  name: string;
  iconName: string;
  description: string;
  placeholder: string;
  fields: { key: string; label: string; type: string; placeholder: string }[];
}

export const QR_TYPES: QRTypeConfig[] = [
  {
    id: 'url',
    name: 'Website URL',
    iconName: 'Globe',
    description: 'Direct link to your website, landing page, or store',
    placeholder: 'https://rootofweb.com',
    fields: [{ key: 'url', label: 'Website Link (URL)', type: 'url', placeholder: 'https://rootofweb.com' }]
  },
  {
    id: 'text',
    name: 'Plain Text',
    iconName: 'FileText',
    description: 'Display raw text, message, or secret note',
    placeholder: 'Welcome to Root Of Web QR Studio!',
    fields: [{ key: 'text', label: 'Custom Message', type: 'text', placeholder: 'Enter any custom text here...' }]
  },
  {
    id: 'wifi',
    name: 'Wi-Fi Network',
    iconName: 'Wifi',
    description: 'Connect guests instantly without typing passwords',
    placeholder: '',
    fields: [
      { key: 'ssid', label: 'Network Name (SSID)', type: 'text', placeholder: 'MyHomeWiFi' },
      { key: 'password', label: 'Password', type: 'text', placeholder: 'Password123' },
      { key: 'encryption', label: 'Security Type', type: 'select', placeholder: 'WPA/WPA2' }
    ]
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Direct',
    iconName: 'MessageCircle',
    description: 'Open a chat window directly on WhatsApp',
    placeholder: '',
    fields: [
      { key: 'phone', label: 'Phone Number (with Country Code)', type: 'text', placeholder: '+1234567890' },
      { key: 'message', label: 'Pre-filled Chat Message', type: 'text', placeholder: 'Hi Root Of Web team!' }
    ]
  },
  {
    id: 'phone',
    name: 'Phone Call',
    iconName: 'Phone',
    description: 'Prompt direct phone call to your business line',
    placeholder: '+1234567890',
    fields: [{ key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 234 567 8900' }]
  },
  {
    id: 'vcard',
    name: 'vCard Contact',
    iconName: 'UserCheck',
    description: 'Complete digital business contact card',
    placeholder: '',
    fields: [
      { key: 'fn', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
      { key: 'org', label: 'Company Name', type: 'text', placeholder: 'Root Of Web' },
      { key: 'title', label: 'Job Title', type: 'text', placeholder: 'Lead Designer' },
      { key: 'tel', label: 'Phone Number', type: 'tel', placeholder: '+1234567890' },
      { key: 'email', label: 'Email Address', type: 'email', placeholder: 'hello@rootofweb.com' },
      { key: 'url', label: 'Website', type: 'url', placeholder: 'https://rootofweb.com' }
    ]
  },
  {
    id: 'upi',
    name: 'UPI / Payment',
    iconName: 'CreditCard',
    description: 'Instant zero-fee payments via GPay, PhonePe, Paytm',
    placeholder: '',
    fields: [
      { key: 'vpa', label: 'UPI ID / VPA', type: 'text', placeholder: 'rootofweb@upi' },
      { key: 'name', label: 'Payee Name', type: 'text', placeholder: 'Root Of Web' },
      { key: 'amount', label: 'Fixed Amount (INR - Optional)', type: 'number', placeholder: '500' }
    ]
  },
  {
    id: 'location',
    name: 'Google Maps GPS',
    iconName: 'MapPin',
    description: 'Pinpoint exact Google Maps business location',
    placeholder: 'https://maps.google.com/?q=28.6139,77.2090',
    fields: [{ key: 'url', label: 'Google Maps Link', type: 'url', placeholder: 'https://maps.google.com/...' }]
  },
  {
    id: 'email',
    name: 'Send Email',
    iconName: 'Mail',
    description: 'Open pre-addressed email message',
    placeholder: '',
    fields: [
      { key: 'email', label: 'Recipient Email', type: 'email', placeholder: 'contact@rootofweb.com' },
      { key: 'subject', label: 'Subject', type: 'text', placeholder: 'Inquiry from QR Code' }
    ]
  },
  {
    id: 'event',
    name: 'Calendar Event',
    iconName: 'Calendar',
    description: 'Save event date, time, and title into phone calendar',
    placeholder: '',
    fields: [
      { key: 'title', label: 'Event Name', type: 'text', placeholder: 'Product Launch Party' },
      { key: 'location', label: 'Venue / Link', type: 'text', placeholder: 'Root Of Web HQ' }
    ]
  }
];

export const BACKGROUND_PRESETS = [
  { id: 'emoji', name: 'Emoji Pattern', bg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  { id: 'abstract', name: 'Abstract Flow', bg: 'linear-gradient(135deg, #a8edf0 0%, #fed6e3 100%)' },
  { id: 'luxury', name: 'Luxury Gold', bg: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 50%, #b38728 100%)' },
  { id: 'business', name: 'SaaS Dark Slate', bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' },
  { id: 'nature', name: 'Emerald Forest', bg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: 'galaxy', name: 'Cosmic Galaxy', bg: 'linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)' },
];
