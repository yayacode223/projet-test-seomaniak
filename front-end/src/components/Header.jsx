import  { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-300 text-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-extrabold">
            <Link to="/">MY BLOG</Link>
          </div>

          {/* Menu toggle (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/actu" className="hover:text-white transition">Actualités</Link>
            <Link to="/login" className="hover:text-white transition">Connexion</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link to="/" className="block hover:text-white">Home</Link>
            <Link to="/actu" className="block hover:text-white">Actualités</Link>
            <Link to="/login" className="block hover:text-white">Connexion</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
