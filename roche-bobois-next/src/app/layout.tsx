import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { cormorantGaramond, dmSans, caveat } from '@/lib/fonts';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CustomCursor from '@/components/ui/CustomCursor';

const GA_ID = 'G-0QY8DQWM6B';

export const metadata: Metadata = {
  title: 'Roche Bobois Residences St. Petersburg | 344 4th St South Luxury Condos',
  description:
    "St. Pete's first designer-branded luxury tower. 29 stories, 164 exclusive residences. Pre-construction pricing available. Completion expected 2029.",
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} ${caveat.variable}`}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', 'G-E1LPWL98H1');
          `}
        </Script>
      </head>
      <body>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
