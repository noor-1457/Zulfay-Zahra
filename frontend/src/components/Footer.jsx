import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#352512] text-gray-300 pt-12 md:pt-16 pb-6 md:pb-8 px-5 md:px-6 border-t border-[#3A4234]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 mb-10 md:mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              {/* Circular Logo Icon */}
              <img src={logo} alt="Zulfay Zahra Logo" className="w-10 h-10 md:w-12 md:h-12 object-cover" />
              <h2 className="font-serif text-lg md:text-xl font-bold tracking-widest text-white leading-tight">
                ZULFAY ZAHRA
                <span className="block text-[7px] md:text-[8px] font-sans font-normal tracking-[0.3em] text-gray-400 mt-0.5">HAIR OIL</span>
              </h2>
            </div>
            <p className="text-[12px] md:text-[13px] text-gray-400 leading-relaxed max-w-xs mt-1 md:mt-2">
              A natural blend of powerful herbs for your hair. Pure, Natural & Effective.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-[14px] md:text-[15px] mb-4 md:mb-5">Quick Links</h3>
            <ul className="space-y-2.5 md:space-y-3 text-[12px] md:text-[13px]">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-[#D4AF37] transition-colors">Shop</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care
          <div>
            <h3 className="text-white font-semibold text-[14px] md:text-[15px] mb-4 md:mb-5">Customer Care</h3>
            <ul className="space-y-2.5 md:space-y-3 text-[12px] md:text-[13px]">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Order on WhatsApp</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Track Order</a></li>
            </ul>
          </div> */}

          {/* Column 4: Follow Us (Social Links) */}
          <div>
            <h3 className="text-white font-semibold text-[14px] md:text-[15px] mb-4 md:mb-5">Follow Us</h3>
            <p className="text-[12px] md:text-[13px] text-gray-400 mb-4 max-w-xs">
              Stay connected for hair care tips, updates & exclusive offers.
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook Link */}
              {/* <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#4a3a27] text-gray-300 transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a> */}
              
              {/* Instagram Link */}
              <a 
                href="https://www.instagram.com/zulfay_zahra_/?__pwa=1" 
                target="_blank" 
                rel="noreferrer" 
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#4a3a27] text-gray-300 transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#3A4234] pt-5 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[11px] md:text-[12px] text-white text-center md:text-left">
          <p>© 2026 Zulfay Zahra. All rights reserved.</p>
          <p>Natural • Halal • Chemical Free</p>
        </div>

      </div>
    </footer>
  )
}