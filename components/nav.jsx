'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 shadow-md sticky top-0 z-50 text-neutral-500">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-zinc-400">
          <Link href="/">MyBrand</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-neutral-400 hover:underline neutral-400 decoration-2 underline-offset-4 transition-all"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-neutral-400 hover:underline neutral-400 decoration-2 underline-offset-4 transition-all"
          >
            Products
          </Link>
          <Link
            href="/search"
            className="hover:text-neutral-400 hover:underline neutral-400 decoration-2 underline-offset-4 transition-all"
          >
            Search
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="hover:text-neutral-400 hover:underline neutral-400 decoration-2 underline-offset-4 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-neutral-400 hover:underline neutral-400 decoration-2 underline-offset-4 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/search"
              className="hover:text-neutral-400 hover:underline neutral-400 decoration-2 underline-offset-4 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
