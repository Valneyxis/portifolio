import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <SiReact className="text-[#61DBFB]" /> },
  { name: "React Native", icon: <SiReact className="text-[#61DBFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#15bac9]" /> },
  { name: "Python", icon: <SiPython className="text-green-400" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { scale: 1.1, filter: "brightness(1.2)", transition: { duration: 0.3 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-[#0f111a]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-white tracking-wide">
          Skills
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 rounded-lg cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-5xl hover:drop-shadow-lg">
                {skill.icon}
              </div>
              <span className="text-gray-300 font-light mt-2 text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;