import { useState } from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-[#F8F6F0] to-[#E8DCC4] px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-[#E5E2D9]">
      
      {/* Left: Logo */}
      <a href="#home" className="flex items-center gap-3">
       <img src={logo} alt="Zulfay Zahra Logo" className="w-22 h-15 object-cover" />
        
        <div className="flex flex-col">
          <h1 className="font-serif text-xl md:text-2xl font-bold tracking-[0.1em] text-[#2D2D2D] uppercase leading-tight">
            Zulfay Zahra
          </h1>
          <p className="text-[9px] tracking-[0.3em] text-gray-500 uppercase mt-0.5">
            Hair Oil
          </p>
        </div>
      </a>

      {/* Center: Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-medium text-gray-700">
        <a href="#home" className="hover:text-[#5A6B4E] transition-colors">Home</a>
        <a href="#shop" className="hover:text-[#5A6B4E] transition-colors">Shop</a>
        <a href="#about" className="hover:text-[#5A6B4E] transition-colors">About</a>
        <a href="#benefits" className="hover:text-[#5A6B4E] transition-colors">Benefits</a>
        <a href="#reviews" className="hover:text-[#5A6B4E] transition-colors">Reviews</a>
        <a href="#contact" className="hover:text-[#5A6B4E] transition-colors">Contact</a>
      </nav>

      {/* Right: Icons & Button */}
      <div className="flex items-center space-x-5">
       

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F8F6F0] border-b border-[#E5E2D9] p-4 flex flex-col gap-4 lg:hidden shadow-md">
          <a href="#home" className="text-sm font-medium text-gray-700">Home</a>
          <a href="#shop" className="text-sm font-medium text-gray-700">Shop</a>
          <a href="#about" className="text-sm font-medium text-gray-700">About</a>
          <a href="#benefits" className="text-sm font-medium text-gray-700">Benefits</a>
          <a href="#reviews" className="text-sm font-medium text-gray-700">Reviews</a>
          <a href="#contact" className="text-sm font-medium text-gray-700">Contact</a>
        </div>
      )}
    </header>
  )
}