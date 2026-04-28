import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <a 
    href={href} 
    className="flex items-center gap-4 p-4 bg-white dark:bg-cyber-gray/30 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyber-neon/50 transition-all group"
  >
    <div className="w-10 h-10 rounded-full bg-cyber-neon/10 flex items-center justify-center group-hover:bg-cyber-neon/20 transition-colors">
      <Icon className="text-cyber-neon" size={20} />
    </div>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{label}</p>
      <p className="text-sm font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-cyber-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="cyber-gradient">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
              <ContactInfo icon={Mail} label="EMAIL" value="snehalpawar15118@gmail.com" href="mailto:snehalpawar15118@gmail.com" />
              <ContactInfo icon={Phone} label="PHONE" value="+91 932 258 8024" href="tel:+91 9322588024" />
              <ContactInfo icon={Github} label="GITHUB" value="github.com/snehal-pawar19" href="https://github.com/snehal-pawar19" />
              <ContactInfo icon={Linkedin} label="LINKEDIN" value="linkedin.com/in/snehal-pawar-0884b1278" href="https://www.linkedin.com/in/snehal-pawar-0884b1278" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full p-8 bg-gradient-to-br from-cyber-neon/10 to-cyber-purple/10 rounded-3xl border border-cyber-neon/20 shadow-2xl shadow-cyber-neon/5 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon to-cyber-purple opacity-50"></div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg relative z-10">
                "Currently looking for internship opportunities in Cyber Security and Networking. 
                I'm always open to discussing new projects or security-related challenges."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
