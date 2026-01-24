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

const AboutMe = () => {
  return (
    <section className="section bg-[#f1f9f1]" id="about">
      <div className="container">
        
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Passionate developer focused on creating impactful solutions through clean code and modern technologies
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-slate-600">
              I'm a Full-Stack Developer currently pursuing a Bachelor's degree in Computer Science
              with Artificial Intelligence at Newton School of Technology. My passion lies in building
              scalable web applications that solve real-world problems.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-slate-600">
              With expertise spanning both frontend and backend development, I specialize in creating
              responsive, user-centric interfaces while architecting robust server-side solutions.
              I'm committed to writing clean, maintainable code and staying current with industry best practices.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-slate-600">
              When I'm not coding, I enjoy solving algorithmic challenges, contributing to open-source
              projects, and continuously expanding my technical knowledge to deliver exceptional results.
            </motion.p>
          </motion.div>


          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {[ 
              {
                emoji: "🎓",
                title: "Education",
                line1: "B.Tech in Computer Science & AI",
                line2: "Newton School of Technology, Delhi",
              },
              {
                emoji: "💻",
                title: "Full-Stack Focus",
                line1: "End-to-end development expertise",
                line2: "Frontend, Backend & Databases",
              },
              {
                emoji: "🚀",
                title: "Problem Solver",
                line1: "Transforming ideas into solutions",
                line2: "Clean code & best practices",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 mb-1">{item.line1}</p>
                <p className="text-sm text-slate-500 font-medium">{item.line2}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
