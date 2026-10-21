import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import WhyChoose from './components/WhyChoose'
import ProductSection from './components/ProductSection'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800 bg-[#F8F6F0] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Benefits />
        <ProductSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default App