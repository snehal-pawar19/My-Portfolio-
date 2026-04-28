import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, ShieldCheck, MapPin, Briefcase, ChevronRight, Terminal } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, value }) => (
  <div className="flex items-center gap-4 p-4 bg-white dark:bg-cyber-gray/30 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyber-neon/50 transition-all group">
    <div className="w-10 h-10 rounded-lg bg-cyber-neon/10 flex items-center justify-center group-hover:bg-cyber-neon/20 transition-colors">
      <Icon className="text-cyber-neon" size={20} />
    </div>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">{title}</p>
      <p className="text-sm font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const SkillBadge = ({ text }) => (
  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-cyber-neon/5 border border-cyber-neon/20 text-cyber-neon rounded-full text-xs font-mono">
    <ChevronRight size={12} />
    {text}
  </span>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-cyber-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About <span className="cyber-gradient">Me</span>
            </h2>
            <div className="h-1 w-20 bg-cyber-neon mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column: Description & Skills */}
          <div className="space-y-10">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I am a <span className="text-cyber-neon font-semibold">Computer Science Engineering</span> student with a specialized focus on <span className="text-cyber-purple font-semibold">Cyber Security</span>. 
                My journey is fueled by a commitment to understanding complex systems and building secure digital environments.
              </p>
              <p>
                I thrive on solving security-related challenges, from analyzing network vulnerabilities to developing secure applications. 
                My approach combines technical rigor with a continuous learning mindset to stay ahead in the rapidly evolving cyber landscape.
              </p>
            </div>

            {/* What I Do */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <ShieldCheck className="text-cyber-neon" size={24} />
                What I Do
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Network Security", "Ethical Hacking Basics", "Web Security", "Python/Java Development", "Problem Solving"].map((skill) => (
                  <SkillBadge key={skill} text={skill} />
                ))}
              </div>
            </div>

            {/* Tools & Interests */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <Terminal className="text-cyber-purple" size={24} />
                Tools & Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Wireshark", "Kali Linux", "Burp Suite", "Git/GitHub", "Cloud Security basics"].map((tool) => (
                  <SkillBadge key={tool} text={tool} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <InfoCard 
              icon={GraduationCap} 
              title="Education" 
              value="Computer Science Engineering Student" 
            />
            <InfoCard 
              icon={ShieldCheck} 
              title="Specialization" 
              value="Cyber Security" 
            />
            <InfoCard 
              icon={MapPin} 
              title="Location" 
              value="Pune, India" 
            />
            <InfoCard 
              icon={Briefcase} 
              title="Career Goal" 
              value="Seeking internship/full-time opportunities" 
            />
            
            {/* Subtle Call to Action / Quote */}
            <div className="mt-4 p-6 bg-gradient-to-br from-cyber-neon/5 to-cyber-purple/5 rounded-2xl border border-dashed border-cyber-neon/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                "Dedicated to mastering the art of secure computing and contributing to a safer digital future."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
