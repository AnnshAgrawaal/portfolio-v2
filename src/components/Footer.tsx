'use client';

import { Linkedin, Twitter, Twitch, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 mt-8 border-t">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://twitch.tv/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <Twitch size={20} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
