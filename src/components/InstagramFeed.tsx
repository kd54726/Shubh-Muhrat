import { motion } from 'framer-motion';

const instaImages = [
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80',
  'https://plus.unsplash.com/premium_photo-1711188859154-156045c1106b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80',
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="text-brand-plum text-sm uppercase tracking-[0.4em] mb-4 font-sans">
          Follow Our Journey
        </h2>
        <a href="#" className="text-brand-charcoal text-xl md:text-2xl font-serif hover:text-brand-plum transition-colors">
          @ShubhMuhuratLuxury
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {instaImages.map((img, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ opacity: 0.8 }}
            className="aspect-square overflow-hidden cursor-pointer"
          >
            <img src={img} alt="Instagram" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
