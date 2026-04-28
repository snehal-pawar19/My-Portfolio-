import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Sun, FileText } from 'lucide-react';

const ProjectCard = ({ title, description, tags, icon: Icon, report, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group bg-white dark:bg-cyber-gray/30 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-cyber-neon/50 hover:shadow-2xl hover:shadow-cyber-neon/10 transition-all cursor-default flex flex-col h-full"
    >
      <div className="h-56 bg-gradient-to-br from-cyber-dark to-cyber-gray flex items-center justify-center relative overflow-hidden shrink-0">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
          <div className="absolute inset-0 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="relative group/icon">
          <div className="absolute inset-0 bg-cyber-neon/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          <Icon 
            className="text-cyber-neon opacity-20 group-hover:opacity-80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10" 
            size={120} 
          />
        </div>
        
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-cyber-dark/90 text-cyber-neon text-[10px] font-mono uppercase tracking-wider rounded-md border border-cyber-neon/30">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyber-neon transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base mb-8 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <a 
            href={report}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Project Report for ${title}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/30 hover:bg-cyber-neon hover:text-black rounded-lg text-sm font-bold transition-all group/btn w-full justify-center md:w-auto"
          >
            <FileText size={18} />
            View Project Report
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Hand Gesture Recognition Toolkit',
      description: 'Developed an innovative toolkit using Arduino and Flex Sensors to recognize and translate hand gestures into digital commands. Ideal for accessibility and human-computer interaction.',
      tags: ['Arduino', 'Flex Sensors', 'Embedded C'],
      icon: Cpu,
      report: '/reports/hand gesture report.pdf',
    },
    {
      title: 'Solar Dryer using IoT',
      description: 'Built an automated solar drying system integrated with IoT. Utilized Arduino and various sensors to monitor and control temperature and humidity for optimal drying efficiency.',
      tags: ['IoT', 'Arduino', 'Sensors', 'Automation'],
      icon: Sun,
      report: '/reports/Solar dryer Report.pdf',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured <span className="cyber-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Showcasing technical excellence through hardware, software, and IoT integration.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
