export interface QROptions {
  type: string;
  value: string;

  // Next-Gen Art Modes
  artMode: 'none' | 'shape_mask' | 'full_art' | 'sticker_peel' | 'logo_overlay';
  shapeMask: 'butterfly' | 'brand_badge' | 'rabbit' | 'bird' | 'starry_van_gogh' | 'floral_vine' | 'sticker_peel';

  // Matrix & Eyes Style
  patternStyle: 'dots' | 'rounded' | 'extra-rounded' | 'classy-rounded' | 'artistic-swirl';
  cornerSquareStyle: 'dot' | 'extra-rounded' | 'square';

  // Aesthetic Palette
  fgColor: string;
  bgColor: string;

  // Background Art Preset
  bgPresetUrl: string | null;

  // Center Brand Image / Logo
  enableLogo: boolean;
  logoUrl: string;
  logoScale: number;

  // Frame CTAs
  enableFrame: boolean;
  frameText: string;
  frameStyle: 'sticker_peel' | 'card_stand' | 'minimal_border';

  // Export Quality
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  dpiQuality: 300 | 600 | 1000;
}

export const ART_PRESETS = [
  {
    id: 'butterfly',
    name: 'Butterfly Floral Ring',
    maskUrl: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=600&auto=format&fit=crop&q=80',
    fg: '#E11D48',
    bg: '#FFFFFF',
    frameText: 'SCAN FOR DETAILS',
    style: 'sticker_peel'
  },
  {
    id: 'van_gogh',
    name: 'Van Gogh Starry Art QR',
    maskUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
    fg: '#F59E0B',
    bg: '#0F172A',
    frameText: 'STARRY ART DISPLAY',
    style: 'card_stand'
  },
  {
    id: 'bird_neon',
    name: 'Neon Tropical Bird AI',
    maskUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=80',
    fg: '#00F0FF',
    bg: '#090D16',
    frameText: 'CYBERPUNK ART QR',
    style: 'minimal_border'
  },
  {
    id: 'brand_badge',
    name: 'Brand Logo Art Matrix',
    maskUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    fg: '#0D9488',
    bg: '#F8FAFC',
    frameText: 'ROOT OF WEB PRO',
    style: 'card_stand'
  }
];

export const QR_TYPES = [
  { id: 'url', name: 'Website URL', iconName: 'Globe' },
  { id: 'text', name: 'Plain Text', iconName: 'FileText' },
  { id: 'wifi', name: 'Wi-Fi Network', iconName: 'Wifi' },
  { id: 'whatsapp', name: 'WhatsApp Direct', iconName: 'MessageCircle' },
  { id: 'phone', name: 'Phone Call', iconName: 'Phone' },
  { id: 'vcard', name: 'vCard Contact', iconName: 'UserCheck' },
  { id: 'upi', name: 'UPI Payment', iconName: 'CreditCard' },
  { id: 'location', name: 'Google Maps GPS', iconName: 'MapPin' },
  { id: 'email', name: 'Send Email', iconName: 'Mail' },
  { id: 'event', name: 'Calendar Event', iconName: 'Calendar' },
];
