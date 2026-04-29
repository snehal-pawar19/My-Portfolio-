import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award } from 'lucide-react';

const CertificationCard = ({ title, issuer, date, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group bg-white dark:bg-cyber-gray/30 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-cyber-neon/50 hover:shadow-2xl hover:shadow-cyber-neon/10 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <Award className="text-cyber-neon shrink-0" size={20} />
          <span className="text-cyber-neon text-xs font-mono uppercase tracking-wider">{issuer}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-cyber-neon transition-colors duration-300">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
            <Calendar size={16} className="shrink-0" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const certs = [
    {
      title: 'AWS Solutions Architect Simulation',
      issuer: 'Forage / AWS',
      date: '2025',
    },
    {
      title: 'Deloitte Cyber Job Simulation (Forage)',
      issuer: 'Forage / Deloitte',
      date: '2025',
    },
    {
      title: 'Hackventure 2025 Cyber Security Bootcamp',
      issuer: 'Cyber Security Community',
      date: '2025',
    },
    {
      title: 'Design Fundamentals with AI',
      issuer: 'Coursera',
      date: '2025',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-cyber-dark/50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-neon/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Licenses & <span className="cyber-gradient">Certifications</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-cyber-neon mx-auto rounded-full"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certs.map((cert, index) => (
            <CertificationCard key={cert.title} {...cert} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
