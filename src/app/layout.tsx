import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/components/NavBar';

import { Space_Mono } from 'next/font/google';
import { Toaster } from 'sonner';

const space_mono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Cha-ching | Track your finances',
  description: 'A simple app to help you track your finances',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_mono.className} antialiased`}>
        <NavBar />

        {children}

        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            classNames: {
              toast: 'rounded-none border-2 border-black',
            },
          }}
        />
      </body>
    </html>
  );
}
