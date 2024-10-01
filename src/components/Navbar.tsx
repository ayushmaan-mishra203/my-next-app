// src/components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 text-white font-semibold">
          <li>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">Services</Link>
          </li>
        </ul>
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
