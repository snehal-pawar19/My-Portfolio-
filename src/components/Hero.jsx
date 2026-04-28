import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-cyber-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyber-neon/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyber-neon font-mono mb-4">Hello, I'm</h2>
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
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10 text-lg">
            Passionate about networking, security, and building real-world projects. 
            Currently focusing on mastering cyber security principles and developing secure systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-cyber-neon hover:bg-cyber-neon/80 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyber-neon/20"
            >
              Get In Touch
            </a>
            <a
              href="/snehal-pawar-resume.pdf"
              download="Snehal_Pawar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="px-8 py-3 border-2 border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 font-bold rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <FileText size={20} /> Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/snehal-pawar19" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-cyber-neon transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/snehal-pawar-0884b1278" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-cyber-neon transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:snehalpawar15118@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-cyber-neon transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
