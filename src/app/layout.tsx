import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hira Times - Latest News",
  description: "Redesigned news portal inspired by The Hindu",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} font-serif antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Hidden Google Translate element — our custom bar handles the UI */}
        <div id="google_translate_element" style={{ display: "none" }} />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: 'en', autoDisplay: false },
              'google_translate_element'
            );
          }
        `}</Script>
      </body>
    </html>
  );
}
