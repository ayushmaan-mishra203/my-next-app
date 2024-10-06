// src/app/products/page.tsx

"use client"; // Ensures this component runs on the client side

import { useState } from "react";

// Sample product data
const products = [
  { id: 1, name: "Laptop", description: "High performance laptop", price: "$1200" },
  { id: 2, name: "Smartphone", description: "Latest model smartphone", price: "$900" },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", price: "$200" },
  { id: 4, name: "Smartwatch", description: "Advanced smartwatch", price: "$250" },
  { id: 5, name: "Camera", description: "High resolution digital camera", price: "$1500" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="mb-8 p-2 border border-gray-300 rounded-lg w-full max-w-md"
      />

      {/* Display Filtered Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-2">{product.description}</p>
              <span className="text-xl font-bold">{product.price}</span>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}
