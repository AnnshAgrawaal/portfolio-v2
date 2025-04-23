'use client';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiAmazon, SiHackerrank } from 'react-icons/si';
import { FaShieldAlt, FaGraduationCap, FaCode, FaPalette, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: SiReact, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-black dark:text-white' },
];

const experience = [
  {
    name: 'Web Development',
    icon: FaCode,
    color: 'text-blue-500',
    description: 'Full-stack development with modern technologies'
  },
  {
    name: 'UI/UX Design',
    icon: FaPalette,
    color: 'text-purple-500',
    description: 'Creating intuitive and beautiful user interfaces'
  },
  {
    name: 'Project Management',
    icon: FaProjectDiagram,
    color: 'text-green-500',
    description: 'Leading and managing development projects'
  }
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    icon: SiAmazon,
    color: 'text-orange-500',
    date: '2023'
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    icon: FaShieldAlt,
    color: 'text-green-500',
    date: '2023'
  },
  {
    name: 'HackerRank Python Certification',
    issuer: 'HackerRank',
    icon: SiHackerrank,
    color: 'text-green-600',
    date: '2023'
  }
];

const currentLearning = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    icon: FaGraduationCap,
    color: 'text-purple-500',
    progress: 'In Progress'
  },
  {
    name: 'Advanced System Design',
    issuer: 'Educative.io',
    icon: FaGraduationCap,
    color: 'text-blue-500',
    progress: 'Starting Soon'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function About() {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-4 text-center md:text-left"
          >
            Skills
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex items-center gap-2 p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-4 text-center md:text-left"
          >
            Experience
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {experience.map((exp) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${exp.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} color={exp.color} />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold mb-4 text-center"
        >
          Certifications
        </motion.h3>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <Icon size={28} color={cert.color} />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Issued: {cert.date}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Currently Learning Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="text-blue-500">
            <FaGraduationCap size={24} />
          </div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-center"
          >
            Currently Learning
          </motion.h3>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {currentLearning.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <Icon size={28} color={cert.color} />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  {cert.progress}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
  