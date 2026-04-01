import { motion } from 'framer-motion';

const events = [
  {
    title: 'Cocktail',
    date: 'Friday, April 24, 2026',
    time: '8:00 PM Onwards',
    location: 'At Their Residence, Golden Avenue, Pathankot',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Baraat',
    date: 'Saturday, April 25, 2026',
    time: '6:00 PM',
    location: 'Departure of Barat at 8:00 PM for Udhay Resort',
    image: '/sehra.jpg'
  },
  {
    title: 'Reception',
    date: 'Sunday, April 26, 2026',
    time: '8:00 PM Onwards',
    location: 'Suvidha Royale, Jalandhar-Dalhousie By Pass Road',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Events = () => {
  return (
    <section className="py-20 px-6 w-full flex flex-col items-center bg-white/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16 text-center"
      >
        <h2 className="font-script text-5xl md:text-6xl text-darkgold mb-4">Wedding Events</h2>
        <p className="font-serif text-sm tracking-widest text-taupe uppercase">
          Join in our celebration
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col bg-white border border-ivory/80 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-sm"
          >
            <div 
              className="h-64 w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${event.image}')` }}
            ></div>
            
            <div className="p-8 flex flex-col items-center text-center">
              <h3 className="font-serif text-xl text-darkgold tracking-wider mb-4 border-b border-darkgold/20 pb-4 w-full">
                {event.title}
              </h3>
              
              <p className="font-serif text-sm text-taupe tracking-wider mb-2 font-semibold">
                {event.date}
              </p>
              
              <div className="w-4 h-px bg-darkgold/40 my-3"></div>
              
              <p className="font-sans text-xs uppercase tracking-widest text-taupe/80 mb-4">
                {event.time}
              </p>
              
              <p className="font-sans text-sm text-taupe leading-relaxed">
                {event.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
