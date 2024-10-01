// src/app/page.tsx

export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Welcome to <span className="text-pink-600">My Awesome Website</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a basic Next.js website enhanced with Tailwind CSS.
      </p>
      <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 shadow-lg transition transform hover:scale-105 hover:rotate-2 duration-300">
        Get Started
      </button>


    </div>
  );
}
