import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Shubh Muhurat didn't just plan our wedding; they choreographed a dream. From the first sketch of the mandap to the final dance at our reception, every detail was infused with luxury and soul.",
    author: "Aditi & Rahul",
    location: "Udaipur, 2024",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80"
  },
  {
    quote: "Their ability to manage a multi-day celebration for 400 guests across three different venues in Thailand was nothing short of miraculous. Truly the gold standard of wedding planning.",
    author: "Ishani & Sameer",
    location: "Phuket, 2023",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-blush/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-brand-plum text-sm uppercase tracking-[0.4em] mb-4 font-sans">
            Voices of Elegance
          </h2>
          <h3 className="text-brand-charcoal text-4xl md:text-5xl font-serif">
            Kind Words from Our Couples
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-ivory p-12 md:p-20 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-plum/10" />
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-brand-beige">
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <p className="text-brand-charcoal/80 text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <span className="block font-sans font-semibold text-brand-plum uppercase tracking-widest text-sm mb-1">{t.author}</span>
                <span className="block font-sans text-brand-charcoal/40 text-xs uppercase tracking-widest">{t.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
