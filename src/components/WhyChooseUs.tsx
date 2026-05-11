import { motion } from 'framer-motion';
import { Globe, Sparkles } from 'lucide-react';

const features = [
  { title: 'Concierge-Level Planning', desc: 'Personalized attention from guest lists to honeymoon suites.' },
  { title: 'Luxury Vendor Network', desc: 'Exclusive access to the world\'s top floral artists and photographers.' },
  { title: 'Seamless Execution', desc: 'Precision-timed logistics for complex multi-day productions.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-brand-plum text-sm uppercase tracking-[0.4em] mb-4 font-sans">
              Excellence
            </h2>
            <h3 className="text-brand-charcoal text-4xl md:text-5xl font-serif mb-12">
              Why Discerning Couples <br /> Choose Shubh Muhurat
            </h3>
            
            <div className="space-y-12">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="border-l border-brand-gold/30 pl-8"
                >
                  <h4 className="text-xl font-serif text-brand-charcoal mb-2">{feature.title}</h4>
                  <p className="text-brand-charcoal/60 font-sans font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-plum p-12 flex flex-col justify-center items-center text-center space-y-4 shadow-xl">
              <Globe className="text-brand-gold w-10 h-10 mb-4" />
              <span className="text-5xl font-serif text-brand-ivory italic">15+</span>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em]">Global Destinations</span>
            </div>
            <div className="bg-brand-beige p-12 flex flex-col justify-center items-center text-center space-y-4 shadow-xl">
              <Sparkles className="text-brand-plum w-10 h-10 mb-4" />
              <span className="text-5xl font-serif text-brand-plum italic">250+</span>
              <span className="text-brand-charcoal/60 text-[10px] uppercase tracking-[0.3em]">Bespoke Weddings</span>
            </div>
            <div className="bg-brand-charcoal p-12 flex flex-col justify-center items-center text-center space-y-4 shadow-xl md:col-span-2">
              <div className="flex gap-12 items-center">
                <div className="text-left">
                  <span className="text-4xl font-serif text-brand-gold italic">12 Years</span>
                  <p className="text-brand-ivory/60 text-[10px] uppercase tracking-[0.3em] mt-2">Crafting Excellence</p>
                </div>
                <div className="h-12 w-[1px] bg-brand-gold/20" />
                <div className="text-left">
                  <span className="text-4xl font-serif text-brand-gold italic">Infinity</span>
                  <p className="text-brand-ivory/60 text-[10px] uppercase tracking-[0.3em] mt-2">Love & Dedication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
