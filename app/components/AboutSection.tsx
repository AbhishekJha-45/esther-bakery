import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Esther in her bakery"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-amber-800 mb-6">Our Story</h2>
            <p className="text-lg text-amber-900 mb-6">
              Esther's Bakery was born out of a passion for creating delightful, mouthwatering treats. 
              For over two decades, we've been crafting exquisite cakes, pastries, and breads using only the 
              finest ingredients and time-honored recipes passed down through generations.
            </p>
            <p className="text-lg text-amber-900 mb-6">
              Our commitment to quality and creativity has made us a beloved part of our community, 
              helping to celebrate life's special moments with our delicious creations.
            </p>
            <a href="#order" className="inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition duration-300">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

