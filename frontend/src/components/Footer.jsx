export default function Footer() {
  return (
    <footer className="bg-[#352512] text-gray-300 pt-16 pb-8 px-6 border-t border-[#3A4234]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              {/* Circular Logo Icon */}
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#E8DCC4] flex items-center justify-center shrink-0">
                <span className="text-[#8B6B3D] text-xs font-bold">ZZ</span>
              </div>
              <h2 className="font-serif text-xl font-bold tracking-widest text-white leading-tight">
                ZULFAY ZAHRA
                <span className="block text-[8px] font-sans font-normal tracking-[0.3em] text-gray-400 mt-0.5">HAIR OIL</span>
              </h2>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs mt-2">
              A natural blend of powerful herbs for your hair. Pure, Natural & Effective.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-5">Quick Links</h3>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-[#D4AF37] transition-colors">Shop</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-5">Customer Care</h3>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Order on WhatsApp</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Track Order</a></li>
            </ul>
          </div>

         

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#3A4234] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white">
          <p>© 2026 Zulfay Zahra. All rights reserved.</p>
          <p>Natural • Halal • Chemical Free</p>
        </div>

      </div>
    </footer>
  )
}