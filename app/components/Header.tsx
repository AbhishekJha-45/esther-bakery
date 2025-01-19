"use client";
import Link from "next/link";
import { useState } from "react";
import { Cake, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Cake className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mr-2" />
          <span className="text-xl sm:text-2xl font-bold text-amber-800">
            Esther's Bakery
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#order"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
              >
                Order
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-amber-800" />
          ) : (
            <Menu className="h-6 w-6 text-amber-800" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#order"
                className="text-amber-900 hover:text-amber-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Order
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
