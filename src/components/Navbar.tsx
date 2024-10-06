// src/components/Navbar.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const searchSuggestions = [
  "Home",
  "About Us",
  "Services",
  "Contact",
  "Products", // Added Products to suggestions
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = searchSuggestions.filter((term) =>
        term.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and website name */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-bold">
            <Link href="/">My Website</Link>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/products" className="hover:text-gray-300 transition-colors">Products</Link> {/* Added link to products */}
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          {/* Predictive Search Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
