import React from "react";
import { motion } from "framer-motion";
import { useTypingEffect } from "../../hooks/useTypingEffect.jsx";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Home = () => {
  const typedName = useTypingEffect("Kaustubh Hiwanj");

  return (
    <section
      className="min-h-screen flex items-center pt-20 bg-white"
      id="home"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="text-xl text-slate-600 font-medium mb-2"
            >
              Hello, I'm
            </motion.div>


            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-2 tracking-tight min-h-[72px]"
            >
              {typedName}
              <span className="ml-1 text-primary animate-pulse">|</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-2xl lg:text-3xl font-semibold text-primary mb-6"
            >
              Full-Stack Developer
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              Building scalable web applications with modern technologies.
              I transform complex problems into elegant, user-friendly solutions
              that drive business impact.
            </motion.p>


            <motion.div variants={fadeUp} className="flex gap-4 mb-10">
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-8 py-3.5 text-base font-semibold rounded-lg border-2 border-slate-200 hover:border-primary hover:text-primary transition-all"
              >
                View My Work
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-8 py-3.5 text-base font-semibold rounded-lg border-2 border-slate-200 hover:border-primary hover:text-primary transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>

{/* icons */}
            <motion.div
              variants={fadeUp}
              className="flex gap-6 items-center"
            >

              <motion.a
                whileHover={{ y: -4, scale: 1.1 }}
                href="https://github.com/Kaustubh0505"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.simpleicons.org/github/181717"
                  alt="GitHub"
                  className="w-7 h-7"
                />
              </motion.a>


              <motion.a
                whileHover={{ y: -4, scale: 1.1 }}
                href="https://leetcode.com/Kaustubh5555"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <img
                  src="https://cdn.simpleicons.org/leetcode/FFA116"
                  alt="LeetCode"
                  className="w-7 h-7"
                />
              </motion.a>


              <motion.a
                whileHover={{ y: -4, scale: 1.1 }}
                href="https://www.linkedin.com/in/kaustubh-hiwanj-429b302b1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-7 h-7"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center"
          >
            <div className="relative w-96 h-96 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-primary to-accent-blue p-2 shadow-2xl">
              <img
                src="/kaustubh.png"
                alt="Kaustubh Hiwanj"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
