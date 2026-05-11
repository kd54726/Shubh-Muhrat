import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Royal Palace Weddings',
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/palace-wedding.jpg?raw=true',
    description: 'Majestic heritage celebrations in the heart of Rajasthan.',
    tag: 'Heritage Luxury'
  },
  {
    title: 'Destination Beach Weddings',
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/beach-wedding.jpg?raw=true',
    description: 'Sunkissed luxury at the world’s most exclusive shorelines.',
    tag: 'Coastal Elite'
  },
  {
    title: 'Celebrity-Style Productions',
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/Celebrity-Style%20Productions.jpg?raw=true',
    description: 'Cinematic, large-scale events with high-production value.',
    tag: 'Grand Scale'
  },
  {
    title: 'Intimate Luxury Weddings',
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/Intimate%20Luxury%20Weddings.jpg?raw=true',
    description: 'Bespoke, detail-oriented micro-weddings in unique locales.',
    tag: 'Pure Elegance'
  }
];

const SignatureExperiences = () => {
  return (
    <section id="experiences" className="py-24 bg-brand-beige/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-brand-plum text-sm uppercase tracking-[0.4em] mb-4 font-sans">
              Signature
            </h2>
            <h3 className="text-brand-charcoal text-4xl md:text-5xl font-serif">
              Curated Wedding Experiences
            </h3>
          </div>
          <p className="text-brand-charcoal/60 max-w-md font-sans font-light leading-relaxed">
            Every celebration is a unique narrative. We specialize in transforming dreams into immersive luxury realities across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[16/9] cursor-pointer"
            >
              <img 
                src={exp.image} 
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-3 block">
                  {exp.tag}
                </span>
                <h4 className="text-brand-ivory text-3xl font-serif mb-3">
                  {exp.title}
                </h4>
                <p className="text-brand-ivory/70 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureExperiences;
