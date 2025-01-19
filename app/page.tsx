import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import OrderCTA from './components/OrderCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
      <OrderCTA />
    </main>
  )
}

