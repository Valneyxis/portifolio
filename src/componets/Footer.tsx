import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center text-gray-400"
      >
        <p>© 2025 Valney Rodrigues  </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
