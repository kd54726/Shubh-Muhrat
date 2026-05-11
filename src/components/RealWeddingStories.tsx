import { motion } from 'framer-motion';

const stories = [
  {
    couple: 'Ananya & Vikram',
    location: 'Umaid Bhawan Palace, Jodhpur',
    aesthetic: 'Traditional Grandeur',
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/Umaid%20Bhawan%20Palace.jpg?raw=true',
    description: 'A three-day royal extravaganza featuring a sangeet under the stars and a sunrise mandap.'
  },
  {
    couple: 'Riya & Kabir',
    location: 'Villa d\'Este, Lake Como',
    aesthetic: 'Italian Romanticism',
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/lake%20como.jpg?raw=true',
    description: 'An intimate European destination wedding with couture styling and Michelin-star dining.'
  },
  {
    couple: 'Sana & Zaid',
    location: 'Bulgari Resort, Dubai',
    aesthetic: 'Modern Avant-Garde', 
    image: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/dubai.jpg?raw=true',
    description: 'A high-fashion desert wedding blending minimalist architecture with maximalist floral design.'
  }
];

const RealWeddingStories = () => {
  return (
    <section id="stories" className="py-24 md:py-40 bg-brand-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-brand-plum text-sm uppercase tracking-[0.4em] mb-4 font-sans">
            Editorial
          </h2>
          <h3 className="text-brand-charcoal text-4xl md:text-6xl font-serif">
            The Wedding Journal
          </h3>
        </div>

        <div className="space-y-32 md:space-y-48">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-3/5 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="aspect-[4/3] md:aspect-[16/10]"
                >
                  <img 
                    src={story.image} 
                    alt={story.couple}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex flex-col gap-2">
                  <span className="text-brand-gold-antique text-xs uppercase tracking-widest font-sans">
                    {story.location}
                  </span>
                  <h4 className="text-3xl md:text-5xl font-serif text-brand-charcoal">
                    {story.couple}
                  </h4>
                </div>
                
                <p className="text-brand-charcoal/70 font-sans font-light leading-relaxed text-lg">
                  {story.description}
                </p>
                
                <div className="pt-6">
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-brand-plum/50 mb-4">Aesthetic</span>
                  <p className="text-brand-wine font-serif text-xl italic">{story.aesthetic}</p>
                </div>
                
                <button className="pt-8 text-xs uppercase tracking-[0.3em] text-brand-charcoal border-b border-brand-charcoal/20 pb-2 hover:border-brand-plum hover:text-brand-plum transition-all">
                  View Full Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWeddingStories;
