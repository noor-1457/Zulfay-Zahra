import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import WhyChoose from './components/WhyChoose'
import ProductSection from './components/ProductSection'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import { FaWhatsapp } from "react-icons/fa"; // ✅ Sirf icon import
import { useState, useEffect } from "react"; // ✅ Hooks import

function App() {
   const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const phoneNumber = '+923104621386';
  const message = 'Assalamu Alaikum! I would like to know more about Zulfay Zahra Hair Oil. Could you please provide me with more information?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="font-sans text-gray-800 bg-[#F8F6F0] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Benefits />
        <ProductSection />
        <Reviews />
           {/* ✅ WhatsApp Button - Direct Code yahan */}
        <div
          className={`fixed bottom-6 right-6 z-[999] transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-30"></div>
          
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-3xl" />
            
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse border-2 border-white">
              1
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App