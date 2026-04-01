import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Top Image Section */}
      <div 
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/wedd main.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory"></div>
      </div>

      {/* Text Section */}
      <div className="w-full px-6 py-16 flex flex-col items-center text-center -mt-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-sm md:text-base text-darkgold tracking-widest uppercase mb-6"
        >
          In the joyful elegance of the Almighty,
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-sm md:text-base text-taupe max-w-lg leading-relaxed mb-12"
        >
          We invite you to the wedding events to celebrate and to join in the union of their beloved children
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-script text-6xl md:text-8xl text-darkgold mb-2">
            Damini Saini
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-sm pb-6 text-taupe leading-relaxed"
          >
            Daughter of Smt. Savita & Sh. Rakesh Saini<br/>
            Vill. Dhobra, Pathankot
          </motion.p>

          <span className="font-script text-3xl md:text-4xl text-taupe/80 my-2">
            and
          </span>

          <h1 className="font-script text-6xl md:text-8xl text-darkgold mt-6 mb-2">
            Rohin Saini
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-sm pb-10 text-taupe leading-relaxed"
          >
            Son of Smt Anu & Sh. Raj Kumar Saini<br/>
            Abrol Nagar, Pathankot
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
