// src/app/page.tsx

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="flex justify-center space-x-8">
          <Image src="/services.jpg" alt="Services" width={300} height={200} />
        </div>
      </section>
    </main>
  );
}
