"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import React Icons

export const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-16 sm:py-24 lg:py-32 text-white max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
      >
        {/* Left Section */}
        <div className="space-y-8 sm:space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8"
          >
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-300">Phone</p>
              <a
                href="tel:8447526262"
                className="text-lg sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +91 8447526262
                <span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-300">Email</p>
              <a
                href="mailto:deepakjuneja2001@gmail.com"
                className="text-lg sm:text-2xl lg:text-3xl font-semibold hover:text-purple-400 transition duration-300 flex items-center"
              >
                deepakjuneja2001@gmail.com
                <span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-300">Address</p>
              <address className="text-sm sm:text-xl not-italic leading-relaxed">
                Gurugram, Haryana, India
              </address>
            </div>

            {/* Social Icons Section */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Deepakjuneja28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition duration-300"
              >
                <FaGithub size={30} /> {/* React Icon for GitHub */}
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-juneja-a69498203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition duration-300"
              >
                <FaLinkedin size={30} /> {/* React Icon for LinkedIn */}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-64 sm:h-80 lg:h-full rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.777155220027!2d76.98699851115319!3d28.45613329196806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1798e59e96e7%3A0x9c4d47f438a084da!2sDev%20Bms%20Builders%20%26%20Contractors!5e0!3m2!1sen!2sin!4v1734083037496!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
