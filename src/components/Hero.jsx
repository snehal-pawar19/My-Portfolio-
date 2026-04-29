import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileImg from '../assets/profile.jpeg';
import ResumePDF from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 bg-white dark:bg-cyber-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyber-neon/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center text-left lg:text-left"
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <h2 className="text-cyber-neon font-mono mb-4 text-xl tracking-wider">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Snehal Pawar
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-8 h-12">
              <span className="cyber-gradient">
                <Typewriter
                  words={['Cyber Security Enthusiast', 'CSE Student', 'Networking Geek', 'Problem Solver']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-10 text-lg text-center lg:text-left">
              Passionate about networking, security, and building real-world projects. 
              Currently focusing on mastering cyber security principles and developing secure systems.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-3 bg-cyber-neon hover:bg-cyber-neon/80 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyber-neon/20"
              >
                Get In Touch
              </a>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 font-bold rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-lg shadow-cyber-neon/5"
              >
                <FileText size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/snehal-pawar19" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/snehal-pawar-0884b1278" },
                { icon: Mail, href: "mailto:snehalpawar15118@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-gray-100 dark:bg-cyber-gray/30 rounded-full text-gray-600 dark:text-gray-400 hover:text-cyber-neon dark:hover:text-cyber-neon transition-colors border border-transparent hover:border-cyber-neon/30"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Profile Photo Content */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative"
            >
              {/* Animated Rings */}
              <div className="absolute -inset-4 bg-cyber-neon/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-neon via-cyber-purple to-cyber-neon rounded-full opacity-75 group-hover:opacity-100 animate-spin-slow"></div>
              
              {/* Image Frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyber-dark bg-cyber-dark shadow-2xl z-10">
                <img 
                  src={ProfileImg}
                  alt="Snehal Pawar" 
                  className="w-full h-full object-cover object-[center_15%] scale-110 transition-transform duration-700 hover:scale-125"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyber-purple/20 rounded-full blur-xl animate-bounce-slow"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyber-neon/20 rounded-full blur-xl animate-pulse"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
