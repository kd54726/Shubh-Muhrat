import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiences', href: '#experiences' },
    { name: 'Stories', href: '#stories' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex-1 hidden md:flex gap-8 items-center">
          {navLinks.slice(0, 2).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm uppercase tracking-widest hover:text-brand-plum transition-colors ${
                isScrolled ? 'text-brand-charcoal' : 'text-brand-ivory'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex-shrink-0">
          <a href="/" className="block">
            <img 
              src="https://github.com/kd54726/Shubh-Muhrat/blob/main/public/logo.png?raw=true" 
              alt="Shubh Muhurat Luxury Weddings" 
              className={`h-12 md:h-16 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>
        </div>

        <div className="flex-1 flex justify-end items-center gap-8">
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.slice(2).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest hover:text-brand-plum transition-colors ${
                  isScrolled ? 'text-brand-charcoal' : 'text-brand-ivory'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className={`p-2 md:hidden ${isScrolled ? 'text-brand-charcoal' : 'text-brand-ivory'}`} onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <a 
            href="#inquiry"
            className={`hidden md:flex items-center gap-2 px-6 py-2 border text-xs uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'border-brand-plum text-brand-plum hover:bg-brand-plum hover:text-white' 
                : 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-plum'
            }`}
          >
            Inquire
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-ivory z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-charcoal">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-brand-plum hover:text-brand-wine transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#inquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 bg-brand-plum text-brand-ivory text-sm uppercase tracking-widest"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
