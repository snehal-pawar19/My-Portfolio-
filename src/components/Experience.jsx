import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'ProAzure Software Solution',
      role: 'Industrial Trainee',
      period: 'June 2024 - July 2024',
      location: 'Remote/Pune',
      description: [
        'Working on UI improvement and front-end optimization using modern frameworks.',
        'Gaining hands-on exposure to Robotic Process Automation (RPA) workflows.',
        'Collaborating with senior developers to implement responsive design patterns.',
        'Participating in security audits and code review sessions.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="cyber-gradient">Experience</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-cyber-neon/30 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyber-neon shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
              
              <div className="bg-gray-50 dark:bg-cyber-gray/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyber-neon/50 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="text-cyber-neon" size={20} /> {exp.role}
                    </h3>
                    <p className="text-cyber-neon font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <p className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</p>
                    <p className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-neon shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
