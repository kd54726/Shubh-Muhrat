import { motion } from 'framer-motion';

const destinations = [
  { name: 'Udaipur', type: 'Royal Heritage', img: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&q=80' },
  { name: 'Dubai', type: 'Modern Luxury', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80' },
  { name: 'Amalfi Coast', type: 'Coastal Romance', img: 'https://github.com/kd54726/Shubh-Muhrat/blob/main/public/Amalfi%20Coast.jpg?raw=true' },
  { name: 'Phuket', type: 'Island Paradise', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80' },
  { name: 'Jaipur', type: 'Grand Traditions', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80' },
  { name: 'Lake Como', type: 'Elegant Estate', img: 'https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&q=80' },
];

const DestinationShowcase = () => {
  return (
    <section id="destinations" className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-brand-gold text-sm uppercase tracking-[0.4em] mb-4 font-sans text-center">
          Global Reach
        </h2>
        <h3 className="text-brand-ivory text-4xl md:text-6xl font-serif text-center">
          World-Class Destinations
        </h3>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-8 px-6 md:px-12 no-scrollbar">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-80 md:w-[450px] group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={dest.img} 
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-charcoal/30 group-hover:bg-brand-charcoal/10 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {dest.type}
                </span>
                <h4 className="text-brand-ivory text-3xl font-serif">
                  {dest.name}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center mt-12">
        <p className="text-brand-ivory/50 font-sans text-xs uppercase tracking-widest">
          Discover more destinations across Europe, Middle East, and Asia
        </p>
      </div>
    </section>
  );
};

export default DestinationShowcase;
