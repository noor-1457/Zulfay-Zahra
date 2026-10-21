import { useState } from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Menu close karne ka function
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="w-full bg-linear-to-r from-[#F8F6F0] to-[#E8DCC4] px-5 py-3 flex items-center justify-between fixed top-0 z-50 border-b border-[#E5E2D9]">
      
      {/* Left: Logo */}
      <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
        <img src={logo} alt="Zulfay Zahra Logo" className="w-22 h-15 object-cover" />
        
        <div className="flex flex-col">
          <h1 className="font-serif text-xl md:text-2xl font-bold tracking-[0.1em] text-[#2D2D2D] uppercase leading-tight">
            Zulfay Zahra
          </h1>
        </div>
      </a>

      {/* Center: Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-medium text-gray-700">
        <a href="#home" className="hover:text-[#5A6B4E] transition-colors">Home</a>
        <a href="#shop" className="hover:text-[#5A6B4E] transition-colors">Shop</a>
        <a href="#about" className="hover:text-[#5A6B4E] transition-colors">About</a>
        <a href="#benefits" className="hover:text-[#5A6B4E] transition-colors">Benefits</a>
        <a href="#reviews" className="hover:text-[#5A6B4E] transition-colors">Reviews</a>
        {/* <a href="#contact" className="hover:text-[#5A6B4E] transition-colors">Contact</a> */}
      </nav>

      {/* Right: Icons & Button */}
      <div className="flex items-center space-x-5">
        {/* Mobile Menu Toggle - Icon bhi change hoga */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            // Close (X) icon jab menu open ho
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

    {/* Mobile Menu Dropdown - Smooth Transition */}
<div
  className={`absolute top-full left-0 w-full  bg-linear-to-r from-[#F8F6F0] to-[#E8DCC4] border-b border-[#E5E2D9] lg:hidden shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
    isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
  }`}
>
  <div className="flex flex-col gap-4 px-4">
    <a href="#home" className="text-sm font-medium transition-colors" onClick={closeMenu}>Home</a>
    <a href="#shop" className="text-sm font-medium transition-colors" onClick={closeMenu}>Shop</a>
    <a href="#about" className="text-sm font-medium transition-colors" onClick={closeMenu}>About</a>
    <a href="#benefits" className="text-sm font-medium transition-colors" onClick={closeMenu}>Benefits</a>
    <a href="#reviews" className="text-sm font-medium transition-colors" onClick={closeMenu}>Reviews</a>
    {/* <a href="#contact" className="text-sm font-medium transition-colors" onClick={closeMenu}>Contact</a> */}
  </div>
</div>
    </header>
  )
}