import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {
  const ProfileImg = "/Profile.jpeg";
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-cyber-gray/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="cyber-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Computer Science Engineering student specializing in Cyber Security. 
                My journey in tech is driven by a deep curiosity for how systems work and how to protect them.
              </p>
              <p>
                I pride myself on being a quick learner and a dedicated problem solver. 
                Whether it's debugging a complex piece of code or analyzing network traffic, 
                I enjoy the challenge of finding efficient and secure solutions.
              </p>
              <p>
                My interest in cyber security stems from a passion for digital safety 
                and the intricate dance of networking protocols. I'm constantly exploring 
                new tools and methodologies to stay ahead in this ever-evolving field.
              </p>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <motion.div 
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="relative group"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-neon to-cyber-purple rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Container */}
              <div className="relative aspect-square w-64 md:w-80 rounded-full overflow-hidden border-4 border-cyber-dark bg-cyber-dark shadow-2xl shadow-cyber-neon/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={ProfileImg} 
                    alt="Snehal Pawar Profile" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-neon/20 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Decorative Animated Borders */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-cyber-neon rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-cyber-purple rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
