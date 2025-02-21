import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import jerisol from "../image/jerisol.png"; 

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };
const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 bg-[#0f111a]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          {...fadeIn}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          <span className="text-[#4fd1c5]">Projetos</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
        >
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -8 }}
            className="bg-[#151921] rounded-lg overflow-hidden shadow-xl group w-full hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-full">
              <img
                src={jerisol}
                alt="Projeto Jerisol Tour"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-[#4fd1c5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 text-center">
                Jerisol Tour
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4 text-center">
                Site dedicado a oferecer serviços de turismo e passeios
                personalizados. O projeto foi criado com foco em uma
                experiência de usuário intuitiva e responsiva.
              </p>

              {/* Tecnologias usadas */}
              <div className="flex justify-center gap-4 mb-4">
                <SiReact size={28} className="text-[#61DBFB]" title="React" />
                <SiTypescript
                  size={28}
                  className="text-[#337bc4]"
                  title="TypeScript"
                />
                <SiTailwindcss
                  size={28}
                  className="text-[#15bac9]"
                  title="Tailwind CSS"
                />
              </div>

              {/* Link para o projeto */}
              <div className="flex justify-center">
                <motion.a
                  href="https://jerisoltour.com.br/"
                  whileHover={{ scale: 1.1 }}
                  className="text-[#4fd1c5] hover:text-[#3bb3a9] transition-colors text-lg"
                  title="Ver Projeto"
                >
                  <FaExternalLinkAlt size={17} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
