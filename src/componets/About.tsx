import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import valney from "../image/valney.png";

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-[#151921]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-2"
        >
          <span className="text-[#4fd1c5]">Sobre</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left"
        >
          <motion.img
            src={valney}
            alt="Valney Rodrigues"
            className="w-48 h-48 rounded-full border-4 border-[#4fd1c5] mb-6 md:mb-0 md:mr-8 transition-all duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-6 text-sm md:text-base"
            >
              Olá! Meu nome é{" "}
              <span className="text-[#4fd1c5] font-semibold">
                Valney Rodrigues
              </span>
              . Iniciei minha jornada na área de
              tecnologia em 2021 e atualmente estou cursando Análise e
              Desenvolvimento de Sistemas. Com conhecimentos sólidos em
              desenvolvimento front-end (React, JavaScript, CSS) e uma boa base
              em back-end, tenho me dedicado a criar soluções completas e
              eficientes que unem design moderno e funcionalidade robusta. Sou
              movido pela busca constante por inovação e por desafios que me
              permitam expandir meus conhecimentos e contribuir para projetos
              impactantes. Meu objetivo é me tornar um desenvolvedor full-stack
            </motion.p>

            <div className="flex justify-center md:justify-start space-x-6">
              {[
                {
                  icon: <FaGithub size={24} />,
                  href: "https://github.com/Valneyxis",
                },
                {
                  icon: <FaLinkedin size={24} />,
                  href: "https://www.linkedin.com/in/valney-rodrigues-dev/",
                },
                {
                  icon: <FaEnvelope size={24} />,
                  href: "mailto:valneyrodrigues3@gmail.com",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-[#4fd1c5] transition-all duration-300"
                  target="_blank"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
