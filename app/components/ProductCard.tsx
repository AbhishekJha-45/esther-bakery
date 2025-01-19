import Image from 'next/image'

interface ProductCardProps {
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ name, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-600">${price.toFixed(2)}</span>
          <button className="bg-amber-500 text-white font-bold py-2 px-4 rounded-full hover:bg-amber-400 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

