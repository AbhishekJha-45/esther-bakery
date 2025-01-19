import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Esther's Bakery</h3>
            <p className="mb-4">Delighting taste buds since 2000</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="hover:text-white transition duration-300"><Instagram /></a>
              <a href="#" className="hover:text-white transition duration-300"><Twitter /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="#products" className="hover:text-white transition duration-300">Products</Link></li>
              <li><Link href="#about" className="hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="#order" className="hover:text-white transition duration-300">Order Now</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Bakery Street, Sweetville, CA 90210</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@esthersbakery.com</p>
          </div>
        </div>
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 Esther's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

