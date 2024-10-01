// src/app/layout.tsx

import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Stunning Gradient Website',
  description: 'A beautifully designed Next.js website with subtle gradients',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 text-white">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
