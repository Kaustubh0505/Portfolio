import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

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

  const socialLinks = [
    {
      href: "https://github.com/Kaustubh0505",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/kaustubh-hiwanj-429b302b1/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://leetcode.com/Kaustubh5555",
      label: "LeetCode",
      icon: <SiLeetcode />,
    },
  ];

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

          {/* Left */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-1"
          >
            <p className="text-sm text-white/90">
              &copy; {currentYear} Kaustubh Hiwanj. All rights reserved.
            </p>

            <p className="text-xs text-white/70">
              Built with React, AI & modern web technologies
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-5 items-center"
          >
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-xl text-white/80 hover:text-white transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;