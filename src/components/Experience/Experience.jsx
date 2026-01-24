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

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Experience = () => {
  return (
    <section className="section bg-white" id="experience">
      <div className="container">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title"
        >
          Experience & Education
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Academic foundation and professional growth journey
        </motion.p>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 relative pl-8"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-blue" />

          {/* ITEM 1 */}
          <motion.div variants={slideRight} className="relative mb-12 pl-12">
            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#2563eb]" />
            
            <motion.div
              whileHover={{ x: 8 }}
              className="bg-[#f1f9f1] p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Bachelor of Technology
                </h3>
                <span className="text-sm font-semibold text-primary bg-white px-3 py-1 rounded-md">
                  2025 - Present
                </span>
              </div>

              <p className="text-base font-semibold text-slate-600 mb-2">
                Computer Science with Artificial Intelligence
              </p>
              <p className="text-sm text-slate-500 mb-4 italic">
                Newton School of Technology, Rishihood University, Delhi
              </p>

              <ul className="list-none p-0 m-0">
                {[
                  "Focusing on full-stack development, algorithms, and AI fundamentals",
                  "Building practical projects and contributing to open-source",
                  "Maintaining strong academic performance while developing real-world skills",
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 leading-relaxed pl-6 relative mb-2 before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div variants={slideRight} className="relative pl-12">
            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#2563eb]" />

            <motion.div
              whileHover={{ x: 8 }}
              className="bg-[#f1f9f1] p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Self-Directed Learning
                </h3>
                <span className="text-sm font-semibold text-primary bg-white px-3 py-1 rounded-md">
                  Ongoing
                </span>
              </div>

              <p className="text-base font-semibold text-slate-600 mb-4">
                Full-Stack Development & Problem Solving
              </p>

              <ul className="list-none p-0 m-0">
                {[
                  "Completed multiple personal projects demonstrating technical proficiency",
                  "Regular practice on competitive programming platforms",
                  "Staying current with industry trends and best practices",
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 leading-relaxed pl-6 relative mb-2 before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
