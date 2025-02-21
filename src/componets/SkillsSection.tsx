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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-[#0f111a]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#4fd1c5]">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg p-6 rounded-md bg-[#151921] hover:bg-[#4fd1c5] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <span className="text-white font-medium mt-2 text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
