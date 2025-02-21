import { motion } from "framer-motion";
import { SiGooglecloud, SiAmazon, SiFirebase, SiGoogleplay } from "react-icons/si"; 
import fabrica from "../image/fabrica.png"; 

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };
const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const ExperienceSection = () => {
  return (
    <section id="experiencias" className="py-20 bg-[#0f111a]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          {...fadeIn}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          <span className="text-[#4fd1c5]">Experiências</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -8 }}
            className="bg-[#151921] rounded-lg overflow-hidden shadow-xl group w-full hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={fabrica}
                alt="Experiência na 704 Apps"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-[#4fd1c5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                704 Apps
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                Suporte N2 <br />
                Atuei em atualização e publicação de apps na Play Store, configuração de projetos no Google Cloud e Firebase, fabricação de apps Android e integração com AWS, GCP e Digital Ocean.
              </p>

              {/* Tecnologias usadas */}
              <div className="flex justify-center gap-6 mb-4">
                <SiGooglecloud size={28} className="text-[#4285F4]" title="Google Cloud" />
                <SiAmazon size={28} className="text-[#FF9900]" title="AWS" />
                <SiFirebase size={28} className="text-[#FFCB2D]" title="Firebase" />
                <SiGoogleplay size={28} className="text-[#FF69B4]" title="Play Store" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
