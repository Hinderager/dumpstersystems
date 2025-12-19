import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dumpstersystems.ai'),
  title: {
    default: "Dumpster Systems AI | Automation for Dumpster Rental Companies",
    template: "%s | Dumpster Systems AI",
  },
  description: "AI-powered automation solutions for dumpster rental companies. AI receptionist, smart websites, route optimization, automated dispatching, and more. Save 20+ hours per week.",
  keywords: [
    "dumpster rental automation",
    "dumpster rental software",
    "AI receptionist dumpster",
    "dumpster scheduling software",
    "waste management automation",
    "dumpster dispatch software",
    "roll-off dumpster software",
    "dumpster rental CRM",
    "dumpster business automation",
    "AI for dumpster companies",
  ],
  authors: [{ name: "Dumpster Systems AI" }],
  creator: "Dumpster Systems AI",
  publisher: "Dumpster Systems AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dumpstersystems.ai",
    siteName: "Dumpster Systems AI",
    title: "Dumpster Systems AI | Automation for Dumpster Rental Companies",
    description: "AI-powered automation solutions for dumpster rental companies. Save 20+ hours per week with AI receptionist, smart websites, route optimization, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dumpster Systems AI - Automation for Dumpster Rental Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumpster Systems AI | Automation for Dumpster Rental Companies",
    description: "AI-powered automation solutions for dumpster rental companies. Save 20+ hours per week.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
