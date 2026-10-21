import bottleImg from '../assets/product.jpeg'

export default function ProductSection() {
  return (
    <section id="shop" className="bg-gradient-to-r from-[#F8F6F0] to-[#E8DCC4] py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image Section */}
        <div className="relative flex justify-center">
          {/* Best Seller Badge (Gol aur elegant) */}
          <span className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#5A6B4E] text-white text-[10px] font-bold px-2 py-2 rounded-full z-10 w-[72px] h-[72px] flex items-center justify-center text-center leading-tight tracking-wider">
            30%<br/>OFF
          </span>
          
          {/* Image Container (bina kisi extra white box ke) */}
          <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <img 
              src={bottleImg} 
              alt="Zulfay Zahra Hair Oil" 
              className="w-full h-auto object-cover bg-white" 
            />
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#78876B] uppercase mb-3">
            Our Hero Product
          </p>
          
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#222222] leading-tight">
            Zulfay Zahra Hair Oil
          </h3>
          
          {/* Reviews and Stars */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-[#D4AF37] text-[15px] tracking-wide">
              ★★★★★
            </div>
            <span className="text-[13px] text-gray-500 font-medium">(124 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold mb-5 text-[#222222]">Rs. 480</p>
          <p className="text-xl  mb-5 text-[#424141] line-through">Rs. 685</p>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 text-[15px] leading-relaxed max-w-md">
            A natural blend of powerful herbs to stop hair fall, boost hair growth and make your hair stronger, thicker and healthier.
          </p>
          
          {/* WhatsApp Order Link (Same as your screenshot) */}
          <a 
            href="https://wa.me/+923104621386" 
            target="_blank" 
            rel="noreferrer" 
            className="flex bg-green-400 h-10 w-10 border-2 border-b-emerald-700 rounded-full p-3 items-center text-[13px] font-medium text-green-700 transition-colors w-fit"
          >
            {/* WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Order on WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  )
}