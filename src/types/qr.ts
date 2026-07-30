export interface QROptions {
  type: string;
  value: string;

  // AI & Preset Themes
  activeTheme: 'custom' | 'luxury' | 'gaming' | 'wedding' | 'business' | 'neon' | 'hacker' | 'glass' | 'royal' | 'cyberpunk' | 'kids' | 'festival';
  
  // Matrix & Eyes
  patternStyle: 'square' | 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'artistic-swirl' | 'circuit';
  cornerSquareStyle: 'square' | 'dot' | 'extra-rounded';
  cornerDotStyle: 'square' | 'dot';

  // Colors, Gradients & Textures
  fgColor: string;
  bgColor: string;
  colorMode: 'solid' | 'gradient' | 'texture';
  gradientType: 'linear' | 'radial';
  gradientColor1: string;
  gradientColor2: string;
  gradientColor3: string;
  textureType: 'none' | 'gold' | 'silver' | 'carbon' | 'wood' | 'marble' | 'leather';

  // Background Studio
  bgType: 'none' | 'preset' | 'custom_image' | 'glass';
  bgPresetUrl: string | null;
  bgImageUrl: string | null;
  bgBlur: number;
  bgOpacity: number;
  bgBrightness: number;
  bgContrast: number;
  bgFit: 'cover' | 'contain' | 'stretch';
  bgGlassmorphism: boolean;

  // Logo Medallion Studio
  enableLogo: boolean;
  logoUrl: string;
  logoScale: number;
  logoStyle: 'glass_circle' | 'white_circle' | 'gold_ring' | 'silver_ring' | 'neon_glow';
  logoGlow: boolean;

  // Frame Builder & Stand Mockup Mode
  enableFrame: boolean;
  frameStyle: 'card_stand' | 'modern_badge' | 'sticker_peel' | 'minimal_border' | 'neon_border';
  frameText: string;
  frameSubText: string;
  frameColor: string;
  frameTextColor: string;

  // Advanced Export & Quality
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  dpiQuality: 300 | 600 | 1000;
  smartContrastFix: boolean;
}

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

export const AI_THEMES = [
  { id: 'luxury', name: 'Luxury Black & Gold', fg: '#D4AF37', bg: '#0F172A', frame: '#D4AF37', pattern: 'classy' },
  { id: 'neon', name: 'Cyberpunk Neon', fg: '#00F0FF', bg: '#090D16', frame: '#FF007F', pattern: 'dots' },
  { id: 'wedding', name: 'Royal Wedding Rose', fg: '#9D174D', bg: '#FFF1F2', frame: '#BE185D', pattern: 'classy-rounded' },
  { id: 'gaming', name: 'Esports Gaming Green', fg: '#10B981', bg: '#064E3B', frame: '#34D399', pattern: 'extra-rounded' },
  { id: 'hacker', name: 'Hacker Matrix', fg: '#22C55E', bg: '#022C22', frame: '#15803D', pattern: 'square' },
  { id: 'glass', name: 'Frost Glass', fg: '#0D9488', bg: '#F0FDFA', frame: '#14B8A6', pattern: 'rounded' },
  { id: 'business', name: 'Executive Slate', fg: '#1E293B', bg: '#F8FAFC', frame: '#0F172A', pattern: 'extra-rounded' },
];

export const BACKGROUND_COLLECTION = [
  { id: 'van_gogh', name: 'Starry Artistic Swirl', url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80' },
  { id: 'floral', name: 'Floral Butterfly Ring', url: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=600&auto=format&fit=crop&q=80' },
  { id: 'neon_city', name: 'Neon Cyberpunk City', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=80' },
  { id: 'gold_texture', name: 'Luxury Gold Foil', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80' },
  { id: 'wood', name: 'Artisan Wood Frame', url: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?w=600&auto=format&fit=crop&q=80' },
  { id: 'marble', name: 'Carrara White Marble', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80' },
];
