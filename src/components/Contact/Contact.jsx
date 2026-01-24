import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "a1f85e29-2f7d-420c-8cbc-fd3923fdcc41");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully! I'll get back to you soon.");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section bg-[#f1f9f1]" id="contact">
      <div className="container">

{/* title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-subtitle"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 mt-12 items-start"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Let's Work Together
            </h3>

            <p className="text-lg leading-relaxed text-slate-600">
              Whether you're a recruiter looking for talent, a startup founder seeking a developer,
              or a business owner needing a technical solution, I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <motion.a
                whileHover={{ x: 6 }}
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg text-slate-900 font-medium hover:border-primary hover:text-primary hover:shadow-sm transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Me
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                href="https://www.linkedin.com/in/kaustubh-hiwanj-429b302b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg text-slate-900 font-medium hover:border-primary hover:text-primary hover:shadow-sm transition-all"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="inline-block transition-transform duration-300 hover:scale-110"
                />

                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm"
          >
            {["name", "email"].map((field) => (
              <div className="mb-6" key={field}>
                <label className="block text-sm font-semibold text-slate-900 mb-2 capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  placeholder={field === "email" ? "your.email@example.com" : "Your full name"}
                  className="w-full px-4 py-3.5 bg-[#f1f9f1] border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3.5 bg-[#f1f9f1] border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 resize-y"
              />
            </div>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full px-8 py-4 text-base font-extralight text-black bg-white rounded-lg hover:bg-primary-hover hover:shadow-md transition-all"
            >
              Send Message
            </motion.button>


            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-4 p-4 rounded-lg text-center font-medium ${result.includes("successfully")
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                >
                  {result}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
