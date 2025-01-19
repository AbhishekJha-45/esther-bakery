import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Assorted pastries"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Esther's Bakery</h1>
        <p className="text-xl md:text-2xl mb-8">Indulge in heavenly delights</p>
        <a href="#order" className="bg-amber-500 text-amber-900 font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition duration-300 text-lg">
          Order Now
        </a>
      </div>
    </section>
  )
}

