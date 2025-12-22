import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Brew Brava — Крафтовое пиво в Нячанге",
  description:
    "Brew Brava — крафтовая пивоварня в Нячанге. Свежие сорта, честные рецепты и партнёрские поставки для баров, кафе и ресторанов.",
  openGraph: {
    title: "Brew Brava — Крафтовое пиво, Нячанг",
    description:
      "Свежая крафтовая пивоварня у моря. Сорта Pilsner, IPA, Porter, Mango Ale и партнёрские поставки B2B.",
    url: "https://brewbrava.local",
    siteName: "Brew Brava",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brew Brava — Крафтовое пиво, Нячанг",
    description: "Свежие сорта пива и партнёрские поставки для заведений Нячанга.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} bg-background text-white`}>{children}</body>
    </html>
  );
}
