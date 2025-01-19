import Link from 'next/link'
import { Cake } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Cake className="h-8 w-8 text-amber-500 mr-2" />
          <span className="text-2xl font-bold text-amber-800">Esther's Bakery</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-amber-900 hover:text-amber-600 transition duration-300">Home</Link></li>
            <li><Link href="#products" className="text-amber-900 hover:text-amber-600 transition duration-300">Products</Link></li>
            <li><Link href="#about" className="text-amber-900 hover:text-amber-600 transition duration-300">About</Link></li>
            <li><Link href="#order" className="text-amber-900 hover:text-amber-600 transition duration-300">Order</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

