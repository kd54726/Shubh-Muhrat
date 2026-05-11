import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-ivory pt-24 pb-12 border-t border-brand-beige">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <a href="/" className="block">
              <img 
                src="https://github.com/kd54726/Shubh-Muhrat/blob/main/public/logo.png?raw=true" 
                alt="Shubh Muhurat Luxury Weddings" 
                className="h-16 w-auto"
              />
            </a>
            <p className="text-brand-charcoal/60 font-sans font-light leading-relaxed text-sm max-w-xs">
              Crafting cinematic wedding experiences for the world's most discerning couples. From heritage palaces to modern luxury escapes.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-brand-plum hover:text-brand-wine transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-brand-plum hover:text-brand-wine transition-colors"><FaInstagram size={20} color="#6E0D3E" /></a>
              <a href="#" className="text-brand-plum hover:text-brand-wine transition-colors"><FaFacebook size={20} color="#6E0D3E" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-charcoal font-sans text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm text-brand-charcoal/60">
              <li><a href="#experiences" className="hover:text-brand-plum transition-colors">Experiences</a></li>
              <li><a href="#stories" className="hover:text-brand-plum transition-colors">Wedding Stories</a></li>
              <li><a href="#destinations" className="hover:text-brand-plum transition-colors">Destinations</a></li>
              <li><a href="#about" className="hover:text-brand-plum transition-colors">Our Philosophy</a></li>
              <li><a href="#inquiry" className="hover:text-brand-plum transition-colors">Inquire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-charcoal font-sans text-xs uppercase tracking-[0.3em] font-bold mb-8">Destinations</h4>
            <ul className="space-y-4 font-sans text-sm text-brand-charcoal/60">
              <li>Udaipur & Jaipur</li>
              <li>Goa & Mumbai</li>
              <li>Dubai & Abu Dhabi</li>
              <li>Italy & France</li>
              <li>Thailand & Bali</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-charcoal font-sans text-xs uppercase tracking-[0.3em] font-bold mb-8">Contact</h4>
            <ul className="space-y-6 font-sans text-sm text-brand-charcoal/60">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-wine mt-1 flex-shrink-0" />
                <span>Level 5, Luxury Tower, <br />BKC, Mumbai 400051</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-wine flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-brand-wine flex-shrink-0" />
                <span>concierge@shubhmuhurat.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-beige flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-charcoal/40 text-[10px] uppercase tracking-[0.2em]">
            © 2024 Shubh Muhurat Luxury Weddings. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-brand-charcoal/40 text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-brand-plum transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-plum transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
