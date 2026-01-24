import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skillRow = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skills = () => {
  const skillCategories = {
    frontend: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    ],
  
    backend: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    ],
  
    databases: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  
    tools: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/0BC5EA" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" }

    ],
  

  };
  

  return (
    <section className="section bg-white" id="skills">
      <div className="container">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-subtitle"
        >
          A comprehensive toolkit for building modern, scalable applications
        </motion.p>

{/* Skill */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-[#f1f9f1] p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">
                  {category === "frontend" && "🎨"}
                  {category === "backend" && "⚙️"}
                  {category === "tools" && "🛠️"}
                  {category === "databases" && "💾"}
                </span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillRow}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-3 bg-white rounded-lg hover:shadow-sm transition-all"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-base font-medium text-slate-900">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
