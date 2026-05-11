import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-brand-ivory overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 w-4/5"
            >
              <img 
                src="https://github.com/kd54726/Shubh-Muhrat/blob/main/public/couple-editorial.jpg?raw=true" 
                alt="Luxury Couple" 
                className="w-full aspect-[3/4] object-cover shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -bottom-10 -right-5 md:right-10 z-20 w-3/5"
            >
              <img 
                src="https://github.com/kd54726/Shubh-Muhrat/blob/main/public/palace-wedding.jpg?raw=true" 
                alt="Palace Wedding" 
                className="w-full aspect-square object-cover shadow-2xl border-8 border-brand-ivory"
              />
            </motion.div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-full h-full border border-brand-gold/20 -z-10" />
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-plum text-sm uppercase tracking-[0.4em] mb-6 font-sans">
                Our Philosophy
              </h2>
              <h3 className="text-brand-charcoal text-4xl md:text-6xl font-serif leading-tight mb-8">
                The Architects of <br />
                <span className="italic font-normal">Unforgettable</span> Legacies
              </h3>
              <div className="space-y-6 text-brand-charcoal/70 text-lg leading-relaxed font-light">
                <p>
                  At Shubh Muhurat, we believe a wedding is not just an event; it's a living, breathing cinematic masterpiece. For over a decade, we have been the silent hands behind India's most extravagant multi-day celebrations.
                </p>
                <p>
                  Our approach is purely bespoke. We don't just plan; we curate. From the grandest royal palaces of Udaipur to the most exclusive private islands in the Mediterranean, we transform your vision into a high-fashion reality that resonates with emotion and luxury.
                </p>
                <p className="font-serif italic text-brand-plum text-2xl pt-4">
                  "We don't just create weddings. We create history."
                </p>
              </div>
              
              <motion.div 
                className="mt-12"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="#inquiry" className="inline-flex items-center gap-4 text-brand-plum font-sans text-sm uppercase tracking-widest font-semibold border-b border-brand-plum pb-2">
                  Learn Our Process
                  <span className="text-xl">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
