'use client';

import { useEffect, useState } from 'react';
import { Github, ExternalLink, Code, Gamepad2, BookOpen, Camera, Music, Coffee, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Task Tracker',
    description: 'A task management app with drag-and-drop and real-time syncing.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourname/task-tracker',
    demo: 'https://task-tracker-demo.vercel.app',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal website showcasing projects and skills.',
    tech: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/yourname/portfolio',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration.',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/yourname/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using OpenAI.',
    tech: ['React', 'OpenAI', 'Node.js'],
    github: 'https://github.com/yourname/ai-image-gen',
    demo: 'https://ai-image-gen.vercel.app',
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile-first fitness tracking application with progress analytics.',
    tech: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com/yourname/fitness-tracker',
    demo: 'https://fitness-tracker.vercel.app',
  }
];

const currentProjects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'Building an intelligent code assistant that helps developers write better code.',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    status: 'In Progress'
  },
  {
    title: 'Real-time Collaboration Tool',
    description: 'Developing a real-time collaboration platform for remote teams.',
    tech: ['WebSocket', 'React', 'Node.js'],
    status: 'Planning Phase'
  }
];

const hobbies = [
  {
    name: 'Coding',
    icon: Code,
    color: 'text-blue-500',
    description: 'Building side projects and learning new technologies'
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    color: 'text-purple-500',
    description: 'Strategy games and indie titles'
  },
  {
    name: 'Reading',
    icon: BookOpen,
    color: 'text-green-500',
    description: 'Tech books and sci-fi novels'
  },
  {
    name: 'Photography',
    icon: Camera,
    color: 'text-pink-500',
    description: 'Street and nature photography'
  },
  {
    name: 'Music',
    icon: Music,
    color: 'text-yellow-500',
    description: 'Playing guitar and piano'
  },
  {
    name: 'Coffee',
    icon: Coffee,
    color: 'text-orange-500',
    description: 'Exploring local coffee shops'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter(p => p.tech.includes(filter))
    : projects;

  return (
    <section className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h2>

      {/* Currently Working On Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="text-blue-500" size={24} />
          <h3 className="text-2xl font-semibold text-center">Currently Working On</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Completed Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hobbies Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          When I'm Not Coding
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-full ${hobby.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={hobby.color} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {hobby.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
