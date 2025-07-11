import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plecos - Coming Soon',
  description: 'Something amazing is swimming your way. Stay tuned for Written Plecos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <span style={{ marginLeft: '1rem', fontWeight: 'bold', fontSize: '1.5rem' }}>Plecos</span>
        </header>
        {children}
      </body>
    </html>
  );
}