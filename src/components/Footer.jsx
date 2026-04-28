import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-50 dark:bg-cyber-dark border-t border-gray-200 dark:border-cyber-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold cyber-gradient">Snehal Pawar</span>
            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xs">
              Building secure and innovative solutions for the future.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="https://github.com/snehal-pawar19" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyber-neon transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/snehal-pawar-0884b1278" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyber-neon transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:snehalpawar15118@gmail.com" className="text-gray-500 hover:text-cyber-neon transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyber-neon transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Snehal Pawar. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Designed & Built with <span className="text-cyber-purple">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
