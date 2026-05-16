import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.18,
    },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "OpenBazar – Full-Stack E-Commerce Marketplace",
      problem:
        "Traditional e-commerce platforms often lack flexibility for thrift selling, seller management, and modern user experience, while small sellers struggle with inventory, payments, and visibility.",
      solution:
        "Built a full-stack e-commerce marketplace with customer, seller, and admin roles. Implemented secure authentication, product listings, cart & checkout flow, Razorpay payments, thrift marketplace, image uploads via Cloudinary, and an admin dashboard for platform management.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Cloudinary",
      ],
      impact:
        "Provides a scalable, real-world e-commerce platform supporting both new and pre-owned product sales, demonstrating end-to-end system design, secure payments, and production-ready architecture.",
      github: "https://github.com/Kaustubh0505/OpenBazar",
      demo: "https://openbazar.kaustubh.codes/",
    },

      
    {
      title: "Analyst AI – Multi-Agent Data Analysis Platform",
      problem:
        "Data analysis workflows are often time-consuming and require technical expertise for cleaning datasets, generating insights, creating visualizations, and answering business-related questions from raw CSV files.",
      solution:
        "Built a multi-agent AI-powered data analysis platform that automates the complete analytics pipeline. Implemented AI-driven data cleaning, exploratory data analysis, insight generation, interactive visualizations, natural language querying, report generation, and dataset manipulation using LangGraph-orchestrated AI agents with a FastAPI backend and React frontend.",
      techStack: [
        "FastAPI",
        "LangGraph",
        "LangChain",
        "Google Gemini",
        "React 19",
        "React Router v7",
        "TypeScript",
        "Tailwind CSS",
        "Pandas",
        "Recharts",
        "Axios",
      ],
      impact:
        "Transforms raw datasets into actionable business insights through an intelligent multi-agent workflow, reducing manual analysis effort while enabling interactive exploration, automated reporting, and AI-assisted decision-making for non-technical users.",
      github: "https://github.com/Kaustubh0505/Analyst_AI",
      demo: "https://analystai.kaustubh.codes",
    },
  
    {
      title: "Customer Retention Assistant – AI-Powered Churn Prediction System",
      problem:
        "Businesses often struggle to identify customers likely to churn and lack actionable, data-driven retention strategies. Traditional churn prediction systems provide probabilities but fail to deliver personalized recommendations or explainable insights for customer retention teams.",
      solution:
        "Built an AI-powered customer retention assistant that combines Machine Learning with Agentic RAG (Retrieval-Augmented Generation). Implemented a Random Forest-based churn prediction engine, personalized retention strategy generation using LangChain and Gemini, conversational follow-up support, and a Streamlit dashboard for real-time customer health analysis.",
      techStack: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "LangChain",
        "Google Gemini",
        "ChromaDB",
        "Streamlit",
        "Custom CSS",
      ],
      impact:
        "Provides businesses with an intelligent, explainable churn analysis platform that predicts customer attrition and recommends evidence-based retention strategies, enabling proactive decision-making and improved customer engagement.",
      github: "https://github.com/Kaustubh0505/Customer-Churn-Prediction-ML",
      demo: "https://customer-churn-prediction-ml-123.streamlit.app/",
    },

  ];  

  return (
    <section className="section bg-[#f1f9f1]" id="projects">
      <div className="container ">

    {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Real-world applications solving practical problems with modern technologies
        </motion.p>

{/* projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {project.title}
              </h3>

              <div className="flex-1 flex flex-col gap-5 mb-8">
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ y: -2 }}
                        className="text-xs font-medium px-3 py-1.5 bg-slate-100 text-slate-900 rounded-md border border-slate-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Impact
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6 border-t border-slate-200 mt-auto">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-transparent text-slate-900 border-2 border-slate-200 hover:border-primary hover:text-primary transition-all"
                >
                  View Code
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-transparent text-slate-900 border-2 border-slate-200 hover:border-primary hover:text-primary transition-all"
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
