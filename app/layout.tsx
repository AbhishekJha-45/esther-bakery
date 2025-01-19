import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Esther's Bakery - Delightful Cakes and Pastries",
  description: 'Indulge in our exquisite range of cakes, pastries, and baked goods. Order online for any occasion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

