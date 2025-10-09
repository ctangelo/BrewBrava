import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic', 'vietnamese'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://brewbrava.example.com'),
  title: 'Brew Brava',
  description: 'Craft beer brewed with sea breeze character in Nha Trang',
  openGraph: {
    title: 'Brew Brava',
    description: 'Craft beer brewed with sea breeze character in Nha Trang',
    url: 'https://brewbrava.example.com',
    siteName: 'Brew Brava',
    type: 'website',
    locale: 'vi_VN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brew Brava',
    description: 'Craft beer brewed with sea breeze character in Nha Trang'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
