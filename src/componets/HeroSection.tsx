import { motion } from "framer-motion";
import valney from "../image/valney.png";

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const HeroSection = () => {
  return (
    <header className="pt-32 pb-20 px-6 bg-[#0f111a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src={valney}
          alt="Valney Rodrigues"
          className="w-40 h-40 rounded-full border-4 border-[#4fd1c5] mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <motion.div 
          className="text-center md:text-left" 
          initial={fadeIn.initial} 
          animate={fadeIn.animate} 
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] leading-tight">
            Valney Rodrigues
          </h1>
          <p className="text-gray-400 mt-4 text-lg md:text-xl">
            Desenvolvedor Front End | Apaixonado por tecnologia e inovação.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-6">
            <a
              href="/curriculo-valney.pdf"
              className="px-8 py-3 bg-[#4fd1c5] text-[#1a1f2e] rounded-lg hover:bg-[#3bb3a9] transition-all duration-300"
              aria-label="Baixar currículo de Valney Rodrigues"
            >
              Currículo
            </a>
            <a
              href="https://www.linkedin.com/in/valney-rodrigues-dev/"
              className="px-8 py-3 border border-[#4fd1c5] text-[#4fd1c5] rounded-lg hover:bg-[#4fd1c5] hover:text-[#1a1f2e] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar LinkedIn de Valney Rodrigues"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;