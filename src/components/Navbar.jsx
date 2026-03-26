import { useState } from "react";
import logo from '../assets/logo.jpeg'
import { Phone, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-30 text-white backdrop-blur-md bg-black/30">

      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="ShivShakti Enterprises"
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full object-cover"
          />

          <span className="ml-3 font-semibold text-sm sm:text-lg md:text-2xl">
            <span className="hidden sm:inline">ShivShakti Enterprises</span>
            <span className="sm:hidden">ShivShakti</span>
          </span>
        </div>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-green-400 cursor-pointer transition">Home</li>
          <li className="hover:text-green-400 cursor-pointer transition">About</li>
          <li className="hover:text-green-400 cursor-pointer transition">Services</li>
          <li className="hover:text-green-400 cursor-pointer transition">Projects</li>
          <li className="hover:text-green-400 cursor-pointer transition">Contact</li>
        </ul>
        <div className="flex items-center gap-3">
          <a 
            href="tel:+918400978691"
            className="flex items-center gap-2 text-green-400 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap hover:text-green-300 transition"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">+91 8400978691</span>
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <div className="hover:text-green-400 cursor-pointer">Home</div>
          <div className="hover:text-green-400 cursor-pointer">About</div>
          <div className="hover:text-green-400 cursor-pointer">Services</div>
          <div className="hover:text-green-400 cursor-pointer">Projects</div>
          <div className="hover:text-green-400 cursor-pointer">Contact</div>
          <div className="flex items-center gap-2 text-green-400 pt-2 border-t border-gray-600">
            <Phone className="w-5 h-5" />
            +91 8400978691
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
