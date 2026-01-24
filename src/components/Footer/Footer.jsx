import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-10 border-t border-white/10"
    >
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-6">


          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-1"
          >
            <p className="text-sm text-white/90">
              &copy; {currentYear} Kaustubh Hiwanj. All rights reserved.
            </p>
            <p className="text-xs text-white/70">
              Built with React & modern web technologies
            </p>
          </motion.div>

{/* icon */}
          <motion.div
            variants={fadeUp}
            className="flex gap-6 items-center"
          >
            {[
              {
                href: "https://github.com/Kaustubh0505",
                label: "GitHub",
                icon: (
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..." />
                ),
              },
              {
                href: "https://www.linkedin.com/in/kaustubh-hiwanj-429b302b1/",
                label: "LinkedIn",
                icon: (
                  <path d="M20.447 20.452h-3.554v-5.569..." />
                ),
              },
              {
                href: "https://leetcode.com/Kaustubh5555",
                label: "LeetCode",
                icon: (
                  <path d="M16.102 17.93l-2.697 2.607..." />
                ),
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-all flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {item.icon}
                </svg>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
