import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/common/logo.jpg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scrolling slightly to allow Home to render
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    navigate('/');
    // Scroll to top if already on home
    if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <img src={Logo} className='w-10 h-10 rounded-lg' alt="" />
          </div>
          <span className="font-[SweetApricot] text-3xl text-gray-900 ">Essential Space</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('features')} className="text-gray-600 hover:text-black font-medium transition-colors">Features</button>
          <button onClick={() => handleNavClick('pricing')} className="text-gray-600 hover:text-black font-medium transition-colors">Pricing</button>
          <button onClick={() => handleNavClick('download')} className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Download
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <button onClick={() => handleNavClick('features')} className="text-left text-gray-900 font-medium py-2">Features</button>
          <button onClick={() => handleNavClick('pricing')} className="text-left text-gray-900 font-medium py-2">Pricing</button>
          <button onClick={() => handleNavClick('download')} className="bg-black text-center text-white px-5 py-3 rounded-xl font-medium">
            Download
          </button>
        </div>
      )}
    </nav>
  );
};