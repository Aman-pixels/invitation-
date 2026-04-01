import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 w-full flex flex-col items-center justify-center text-center bg-ivory">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-script text-6xl md:text-8xl text-darkgold mb-6 opacity-90">
          Damini & Rohin
        </h2>
        <div className="w-16 h-px bg-darkgold/30 mx-auto mb-6"></div>
        <p className="font-sans text-xs tracking-[0.3em] text-taupe/70 uppercase">
          Thank you from the bottom of our hearts
        </p>
        
        <div className="mt-16 text-[10px] text-taupe/40 font-sans tracking-[0.2em] uppercase">
          © 2026 The Saini Family 
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
