import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Shield, Database } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-cyber-neon transition-all hover:shadow-lg hover:shadow-cyber-neon/10 group"
    >
      <div className="w-12 h-12 bg-cyber-neon/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyber-neon/20 transition-colors">
        <Icon className="text-cyber-neon" size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm font-medium text-cyber-neon">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: delay + 0.3 }}
                className="bg-gradient-to-r from-cyber-neon to-cyber-purple h-1.5 rounded-full shadow-[0_0_8px_rgba(0,243,255,0.5)]"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C / C++', level: 75 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 70 },
        { name: 'php ', level: 85 },
      ],
    },
    {
      title: 'Cyber Security',
      icon: Shield,
      skills: [
        { name: 'Networking', level: 85 },
        { name: 'OSI Model', level: 90 },
        { name: 'IPv4 / IPv6', level: 80 },
        { name: 'Routing', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="cyber-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} {...group} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
