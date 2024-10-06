// src/app/layout.tsx

import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Awesome Website',
  description: 'A beautifully designed Next.js website with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
