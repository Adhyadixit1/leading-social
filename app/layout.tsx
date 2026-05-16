import type { Metadata } from "next";
import { Inter, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leading Social | Performance Growth Partner for Ecommerce Brands",
  description:
    "Leading Social is a growth operating system for Shopify brands doing $5M to $30M. We combine paid acquisition, creative strategy, retention, and financial forecasting to scale brands profitably.",
  metadataBase: new URL("https://leadingsocial.com"),
  openGraph: {
    title: "Leading Social | Performance Growth Partner",
    description:
      "A growth operating system for ecommerce brands. Profit-led acquisition, creative, retention & forecasting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  var theme = window.localStorage.getItem('leading-social-theme');
  if (theme === 'classic') {
    document.documentElement.dataset.theme = 'classic';
  }
} catch (_) {}
            `.trim(),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col grain relative">
        <Nav />
        <main className="flex-1 relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
