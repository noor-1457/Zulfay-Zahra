import bottleImg from '../assets/product.jpeg'

export default function ProductSection() {
  return (
    <section id="shop" className="bg-gradient-to-r from-[#F8F6F0] to-[#E8DCC4] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Image Section */}
        <div className="relative flex justify-center">
          {/* Discount Badge */}
          <span className="absolute -top-3 -left-3 md:top-4 md:left-4 z-10 flex h-16 w-16 md:h-20 md:w-20 flex-col items-center justify-center rounded-full bg-[#5A6B4E] text-white shadow-lg">
            <span className="text-base md:text-lg font-bold leading-none">30%</span>
            <span className="text-[9px] md:text-[10px] font-semibold tracking-widest">OFF</span>
          </span>
          
          {/* Image Container */}
          <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
            <img 
              src={bottleImg} 
              alt="Zulfay Zahra Hair Oil" 
              className="w-full h-auto object-cover bg-white transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex flex-col justify-center">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#78876B] uppercase mb-2 md:mb-3">
            Our Hero Product
          </p>
          
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4 text-[#222222] leading-tight">
            Zulfay Zahra Hair Oil
          </h3>
          
          {/* Reviews and Stars */}
          <div className="flex items-center gap-2 mb-5 md:mb-6">
            <div className="flex text-[#D4AF37] text-sm md:text-base tracking-wide">
              ★★★★★
            </div>
            <span className="text-xs md:text-[13px] text-gray-500 font-medium">(124 reviews)</span>
          </div>

          {/* 🔥 PRICE ROW - FIXED FOR MOBILE 🔥 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-bold text-[#222222]">Rs. 480</span>
              <span className="text-base md:text-lg text-gray-400 line-through">Rs. 685</span>
            </div>
            <span className="rounded-full bg-[#5A6B4E]/10 px-3 py-1 text-[11px] md:text-xs font-semibold text-[#5A6B4E] w-fit">
              Save Rs. 205
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-[15px] leading-relaxed max-w-md">
            A natural blend of powerful herbs to stop hair fall, boost hair growth and make your hair stronger, thicker and healthier.
          </p>
          
          {/* WhatsApp Order Button */}
          <a 
            href="https://wa.me/+923104621386" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-[#1ebe57] hover:shadow-green-500/30 hover:-translate-y-0.5 w-full sm:w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  )
}