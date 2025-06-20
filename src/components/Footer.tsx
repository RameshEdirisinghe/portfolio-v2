import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>&copy; {currentYear} Ramesh Edirisinghe. All rights reserved.</span>
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Ramesh</span>
          </div>

          {/* Right side - Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors duration-200">
              <div className="w-2 h-2 border-t border-r border-gray-400 transform rotate-[-45deg] translate-y-0.5 hover:border-white transition-colors duration-200"></div>
            </div>
          </button>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS • Designed for performance and accessibility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;