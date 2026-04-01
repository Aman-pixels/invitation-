import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const CelebrationDetails = () => {
  return (
    <section className="py-20 px-6 w-full flex flex-col items-center text-center bg-ivory">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="font-script text-5xl md:text-6xl text-darkgold mb-4">Celebration Details</h2>
        <p className="font-serif text-sm tracking-widest text-taupe uppercase">
          We cannot wait to celebrate with you
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="font-serif text-lg tracking-[0.2em] text-taupe uppercase mb-4">Wedding Ceremony</h3>
        <p className="font-sans text-sm text-taupe/80 max-w-lg mx-auto leading-relaxed">
          Join us as we celebrate a night of fun, dancing, and memories to make this day an epic one.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-5xl bg-white border border-darkgold/10 rounded-xl p-8 md:p-16 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden"
      >
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
          {/* The Date */}
          <div className="flex flex-col items-center text-center px-4">
            <Calendar className="w-8 h-8 text-darkgold mb-5" strokeWidth={1} />
            <h4 className="font-serif text-sm tracking-[0.2em] text-darkgold uppercase mb-4">
              The Date
            </h4>
            <div className="w-8 h-[1px] bg-darkgold/30 mb-4"></div>
            <p className="font-sans text-sm text-taupe leading-relaxed">
              Saturday, April 25, 2026
            </p>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-darkgold/20 to-transparent self-stretch"></div>
          {/* Horizontal Divider for Mobile */}
          <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-darkgold/20 to-transparent"></div>

          {/* The Time */}
          <div className="flex flex-col items-center text-center px-4">
            <Clock className="w-8 h-8 text-darkgold mb-5" strokeWidth={1} />
            <h4 className="font-serif text-sm tracking-[0.2em] text-darkgold uppercase mb-4">
              The Time
            </h4>
            <div className="w-8 h-[1px] bg-darkgold/30 mb-4"></div>
            <p className="font-sans text-sm text-taupe leading-relaxed">
              Baraat: 6:00 PM <br />
              Barat Departure: 8:00 PM
            </p>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-darkgold/20 to-transparent self-stretch"></div>
          {/* Horizontal Divider for Mobile */}
          <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-darkgold/20 to-transparent"></div>

          {/* The Venue */}
          <div className="flex flex-col items-center text-center px-4">
            <MapPin className="w-8 h-8 text-darkgold mb-5" strokeWidth={1} />
            <h4 className="font-serif text-sm tracking-[0.2em] text-darkgold uppercase mb-4">
              The Venue
            </h4>
            <div className="w-8 h-[1px] bg-darkgold/30 mb-4"></div>
            <p className="font-sans text-sm text-taupe leading-relaxed mb-4">
              Udhay Resort, Pathankot-Amritsar By Pass, Pathankot
            </p>
            <a 
              href="https://maps.google.com/?q=Udhay+Resort+Pathankot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-widest text-darkgold border-b border-darkgold/30 pb-0.5 hover:text-darkgold/80 hover:border-darkgold transition-all uppercase"
            >
              View on Map
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CelebrationDetails;
