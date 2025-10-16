import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../contexts/LanguageContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Numerics - Digital Accounting | Paperless Bookkeeping Services",
  description: "Professional digital accounting services in Varaždin, Croatia. Paperless and uncomplicated bookkeeping, business formation, consulting, and administrative services.",
  keywords: "accounting, bookkeeping, digital accounting, business formation, Varaždin, Croatia, paperless",
  author: "Numerics Co. d.o.o.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Numerics - Digital Accounting" />
        <meta property="og:description" content="Paperless and uncomplicated bookkeeping services in Varaždin, Croatia" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://numerics.hr" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
