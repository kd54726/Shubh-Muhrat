import { motion } from 'framer-motion';

const InquiryForm = () => {
  return (
    <section id="inquiry" className="py-24 md:py-40 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img src="/palace-wedding.jpg" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-charcoal/40 backdrop-blur-xl p-8 md:p-16 border border-brand-gold/10">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold text-sm uppercase tracking-[0.4em] mb-4 font-sans">
              Concierge
            </h2>
            <h3 className="text-brand-ivory text-4xl md:text-6xl font-serif">
              Begin Your Journey
            </h3>
            <p className="text-brand-ivory/50 mt-6 font-sans font-light tracking-wide max-w-xl mx-auto">
              Please share a few details about your vision, and our luxury planning team will reach out to schedule a private consultation.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-2">
              <label className="text-brand-gold text-[10px] uppercase tracking-[0.2em] ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Ex. Arjun & Meera" 
                className="w-full bg-transparent border-b border-brand-ivory/20 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-colors font-light"
              />
            </div>
            <div className="space-y-2">
              <label className="text-brand-gold text-[10px] uppercase tracking-[0.2em] ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-transparent border-b border-brand-ivory/20 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-colors font-light"
              />
            </div>
            <div className="space-y-2">
              <label className="text-brand-gold text-[10px] uppercase tracking-[0.2em] ml-1">Wedding Destination</label>
              <select className="w-full bg-transparent border-b border-brand-ivory/20 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-colors font-light appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-brand-charcoal">Select Destination</option>
                <option value="udaipur" className="bg-brand-charcoal">Udaipur, India</option>
                <option value="jaipur" className="bg-brand-charcoal">Jaipur, India</option>
                <option value="dubai" className="bg-brand-charcoal">Dubai, UAE</option>
                <option value="italy" className="bg-brand-charcoal">Lake Como, Italy</option>
                <option value="thailand" className="bg-brand-charcoal">Phuket, Thailand</option>
                <option value="other" className="bg-brand-charcoal">Other International</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-brand-gold text-[10px] uppercase tracking-[0.2em] ml-1">Estimated Guest Count</label>
              <input 
                type="text" 
                placeholder="Ex. 150 - 300" 
                className="w-full bg-transparent border-b border-brand-ivory/20 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-colors font-light"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-brand-gold text-[10px] uppercase tracking-[0.2em] ml-1">Your Vision</label>
              <textarea 
                rows={4}
                placeholder="Tell us about the dream aesthetic, the vibe, and any specific requirements..." 
                className="w-full bg-transparent border-b border-brand-ivory/20 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-colors font-light resize-none"
              />
            </div>
            
            <div className="md:col-span-2 mt-8 flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-brand-gold text-brand-charcoal text-xs uppercase tracking-[0.3em] font-semibold hover:bg-brand-ivory transition-colors"
              >
                Request Consultation
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
