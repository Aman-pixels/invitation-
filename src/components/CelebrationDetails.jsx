import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const CelebrationDetails = () => {
  const details = [
    {
      icon: <Calendar className="w-6 h-6 text-darkgold mx-auto mb-4" strokeWidth={1.5} />,
      title: 'The Date',
      content: 'Saturday, April 25, 2026'
    },
    {
      icon: <Clock className="w-6 h-6 text-darkgold mx-auto mb-4" strokeWidth={1.5} />,
      title: 'The Time',
      content: 'Sehra Bandi: 6:00 PM | Barat Departure: 8:00 PM'
    },
    {
      icon: <MapPin className="w-6 h-6 text-darkgold mx-auto mb-4" strokeWidth={1.5} />,
      title: 'The Venue',
      content: 'Udhay Resort, Pathankot-Amritsar By Pass, Pathankot',
      link: 'View Map'
    }
  ];

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

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            className="flex-1 bg-white border border-darkgold/20 rounded-lg p-10 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow"
          >
            {detail.icon}
            <h4 className="font-serif text-sm tracking-widest text-darkgold uppercase mb-3">
              {detail.title}
            </h4>
            <p className="font-sans text-sm text-taupe leading-relaxed text-center">
              {detail.content}
            </p>
            {detail.link && (
              <a href="#" className="mt-4 font-sans text-xs text-darkgold border-b border-darkgold pb-0.5 hover:text-darkgold/80 transition-colors">
                {detail.link}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CelebrationDetails;
