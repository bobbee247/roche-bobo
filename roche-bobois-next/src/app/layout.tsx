import type { Metadata } from 'next';
import './globals.css';
import { cormorantGaramond, dmSans, caveat } from '@/lib/fonts';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Roche Bobois Residences St. Petersburg | 344 4th St South Luxury Condos',
  description:
    "St. Pete's first designer-branded luxury tower. 29 stories, 164 exclusive residences. Pre-construction pricing available. Completion expected 2029.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} ${caveat.variable}`}>
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
