export interface ToolItem {
  id: string;
  name: string;
  category: 'qr' | 'pdf' | 'image' | 'dev' | 'generator';
  icon: string;
  description: string;
  badge?: string;
  popular?: boolean;
}

export const ALL_TOOLS: ToolItem[] = [
  // QR Tools
  { id: 'qr-gen', name: 'QR Code Studio', category: 'qr', icon: 'QrCode', description: 'Advanced QR creator with Root Of Web center logos, frames, & 300+ DPI download', popular: true },
  { id: 'qr-scanner', name: 'Webcam & File QR Scanner', category: 'qr', icon: 'Scan', description: 'Instant camera & image QR code reader with safety check' },
  { id: 'barcode-gen', name: 'Barcode Generator', category: 'qr', icon: 'Barcode', description: 'Generate CODE128, EAN, UPC, and Code39 barcodes for products' },
  
  // Image Utility Tools
  { id: 'image-compressor', name: 'Image Compressor', category: 'image', icon: 'Minimize2', description: 'Compress PNG, JPG, and WebP up to 90% without quality loss', popular: true },
  { id: 'image-converter', name: 'Image Format Converter', category: 'image', icon: 'RefreshCw', description: 'Convert between PNG, JPG, WebP, SVG, and AVIF formats instantly' },
  { id: 'bg-remover', name: 'AI Background Remover', category: 'image', icon: 'Scissors', description: 'Clean image background transparently in 1 click' },
  { id: 'gradient-gen', name: 'CSS Mesh Gradient Generator', category: 'image', icon: 'Palette', description: 'Create CSS mesh, radial, & linear gradients with copy code' },
  { id: 'color-picker', name: 'Color Picker & Palette', category: 'image', icon: 'Pipette', description: 'Extract HEX, RGB, HSL colors & auto-generate matching palettes' },

  // PDF Utility Tools
  { id: 'pdf-merge', name: 'PDF Merger', category: 'pdf', icon: 'FilePlus', description: 'Combine multiple PDF documents into a single organized file', popular: true },
  { id: 'pdf-split', name: 'PDF Splitter', category: 'pdf', icon: 'FileMinus', description: 'Extract specific pages or split PDF into separate files' },
  { id: 'pdf-to-img', name: 'PDF to Image Converter', category: 'pdf', icon: 'FileImage', description: 'Convert PDF pages into high-resolution PNG/JPG images' },
  { id: 'img-to-pdf', name: 'Image to PDF Converter', category: 'pdf', icon: 'FileCheck', description: 'Convert images (PNG, JPG) into a neat PDF document' },

  // Developer & Utility Tools
  { id: 'json-formatter', name: 'JSON Formatter & Validator', category: 'dev', icon: 'Code', description: 'Prettify, minify, validate, & convert JSON trees easily', popular: true },
  { id: 'base64', name: 'Base64 Encoder / Decoder', category: 'dev', icon: 'Binary', description: 'Encode and decode strings or binary files to Base64 format' },
  { id: 'password-gen', name: 'Secure Password Generator', category: 'dev', icon: 'Key', description: 'Generate cryptographic strong passwords with custom rules' },
  { id: 'uuid-gen', name: 'UUID / GUID Generator', category: 'dev', icon: 'Fingerprint', description: 'Generate v4 bulk UUIDs for backend databases and testing' },
  { id: 'url-shortener', name: 'Free URL Shortener', category: 'dev', icon: 'Link', description: 'Create short trackable links with custom slugs' },
  { id: 'meta-gen', name: 'SEO Meta Tag Generator', category: 'dev', icon: 'Globe', description: 'Generate OpenGraph, Twitter Card, and Google Meta tags' },
  { id: 'lorem-gen', name: 'Lorem Ipsum Generator', category: 'dev', icon: 'AlignLeft', description: 'Generate placeholder text by paragraphs, sentences, or words' },
];
