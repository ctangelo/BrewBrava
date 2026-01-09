import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
// const oswald = Oswald({ subsets: ["latin", "cyrillic"], variable: "--font-oswald" });

const gilroy = localFont({
  src: [
    { path: "./fonts/gilroy/Gilroy-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Heavy.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://brewbrava.com"),

  title: "Brew Brava — Крафтовое пиво в Нячанге",
  description:
    "Brew Brava — крафтовая пивоварня в Нячанге. Свежие сорта, честные рецепты и партнёрские поставки для баров, кафе и ресторанов.",

  openGraph: {
    title: "Brew Brava — Крафтовое пиво, Нячанг",
    description:
      "Свежая крафтовая пивоварня у моря. Сорта Pilsner, IPA, Porter, Mango Ale и партнёрские поставки B2B.",
    url: "https://brewbrava.com",
    siteName: "Brew Brava",
    locale: "ru_RU",
    type: "website",
    images: ["/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brew Brava — Крафтовое пиво, Нячанг",
    description: "Свежие сорта пива и партнёрские поставки для заведений Нячанга.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${gilroy.variable} bg-background text-white text-[18px]`}>
        {children}
      </body>
    </html>
  );
}
