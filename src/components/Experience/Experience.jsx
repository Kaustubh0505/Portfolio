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
          Academic foundation, AI learning journey, and professional experience
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

          {/* Internship */}
          <motion.div variants={slideRight} className="relative mb-12 pl-12">
            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#2563eb]" />

            <motion.div
              whileHover={{ x: 8 }}
              className="bg-[#f1f9f1] p-8 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Web Developer Intern
                </h3>

                <span className="text-sm font-semibold text-primary bg-white px-3 py-1 rounded-md">
                  Jun 2025 - Jul 2025
                </span>
              </div>

              <p className="text-base font-semibold text-slate-600 mb-2">
                Alphavima Technologies Private Limited
              </p>

              <p className="text-sm text-slate-500 mb-4 italic">
                Internship Experience
              </p>

              <ul className="list-none p-0 m-0">
                {[
                  "Designed and developed an employee dashboard for managing employee-related data and workflows",
                  "Implemented invoice generation and downloading functionality for streamlined billing operations",
                  "Integrated Twilio API for automated SMS notifications and communication features",
                  "Worked on frontend and backend integration while improving API handling and UI responsiveness",
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

          {/* Education */}
          <motion.div variants={slideRight} className="relative mb-12 pl-12">
            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#2563eb]" />

            <motion.div
              whileHover={{ x: 8 }}
              className="bg-[#f1f9f1] p-8 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Bachelor of Technology (B.Tech)
                </h3>

                <span className="text-sm font-semibold text-primary bg-white px-3 py-1 rounded-md">
                  2024 - 2028
                </span>
              </div>

              <p className="text-base font-semibold text-slate-600 mb-2">
                Computer Science with Artificial Intelligence
              </p>

              <p className="text-sm text-slate-500 mb-4 italic">
                Newton School of Technology, Rishihood University
              </p>

              <ul className="list-none p-0 m-0">
                {[
                  "Studying full-stack development, data structures & algorithms, and artificial intelligence fundamentals",
                  "Building AI-powered applications using LangChain, LangGraph, RAG pipelines, and LLM workflows",
                  "Exploring machine learning, vector databases, prompt engineering, and agentic AI systems",
                  "Developing scalable real-world projects focused on AI automation and modern web technologies",
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

          {/* Self Learning */}
          <motion.div variants={slideRight} className="relative pl-12">
            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#2563eb]" />

            <motion.div
              whileHover={{ x: 8 }}
              className="bg-[#f1f9f1] p-8 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Self-Directed Learning
                </h3>

                <span className="text-sm font-semibold text-primary bg-white px-3 py-1 rounded-md">
                  2026 - Present
                </span>
              </div>

              <p className="text-base font-semibold text-slate-600 mb-4">
                AI Engineering, Full-Stack Development & Problem Solving
              </p>

              <ul className="list-none p-0 m-0">
                {[
                  "Learning advanced AI concepts including LangChain, LangGraph, Retrieval-Augmented Generation (RAG), and LLM orchestration",
                  "Building multi-agent AI systems, AI-powered analytics platforms, and intelligent automation tools",
                  "Practicing data structures and algorithms regularly through personal projects and coding platforms",
                  "Exploring modern backend architectures, vector databases, and scalable AI application deployment",
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