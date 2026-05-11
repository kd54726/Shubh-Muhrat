import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="h-full w-full">
          <img 
            src="https://github.com/kd54726/Shubh-Muhrat/blob/main/public/hero-wedding.jpg?raw=true" 
            alt="Luxury Wedding" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Primary Cinematic Overlay */}
        <div className="absolute inset-0 cinematic-overlay" />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
        {/* Subtle Brand Tint Overlay */}
        <div className="absolute inset-0 bg-brand-wine/10" />
      </div>

      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h2 className="text-brand-gold-antique uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-sans">
            The Art of Luxury Celebrations
          </h2>
          <h1 className="text-brand-ivory text-5xl md:text-8xl font-serif mb-8 leading-tight max-w-5xl mx-auto">
            Crafting Weddings That Feel <br /> 
            <span className="italic">Larger Than Life</span>
          </h1>
          <p className="text-brand-ivory/80 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
            Where heritage meets high-fashion. We curate bespoke destination weddings for the world's most discerning couples.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#inquiry"
              className="px-10 py-5 bg-brand-plum text-brand-ivory text-sm uppercase tracking-[0.2em] hover:bg-brand-wine transition-colors"
            >
              Book Your Consultation
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#stories"
              className="px-10 py-5 border border-brand-ivory text-brand-ivory text-sm uppercase tracking-[0.2em] hover:bg-brand-ivory hover:text-brand-plum transition-all"
            >
              Explore Weddings
            </motion.a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
