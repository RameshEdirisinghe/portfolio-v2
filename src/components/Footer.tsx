import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Mock data (to be updated by you)
  const personalData = {
    firstName: 'Ramesh',
    fullName: 'Ramesh Edirisinghe',
    location: 'Colombo, Sri Lanka',
    email: 'ramesh.edirisinghe@email.com',
    phone: '+94 77 123 4567',
    socialLinks: {
      github: 'https://github.com/ramesh-edirisinghe',
      linkedin: 'https://linkedin.com/in/ramesh-edirisinghe'
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Left Column - Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-2xl font-bold text-white">
              {personalData.firstName}
              <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent">.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Software Engineer crafting scalable, modern solutions with a passion for innovation and continuous learning.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-lg text-gray-300 hover:bg-gradient-to-r hover:from-sky-800 hover:to-slate-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-white/10"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-lg text-gray-300 hover:bg-gradient-to-r hover:from-sky-800 hover:to-slate-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-white/10"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-lg text-gray-300 hover:bg-gradient-to-r hover:from-sky-800 hover:to-slate-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-white/10"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:bg-gradient-to-r hover:from-sky-800 hover:to-slate-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="pt-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center space-x-2 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-lg px-4 py-2 text-gray-300 hover:bg-gradient-to-r hover:from-sky-800 hover:to-slate-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10"
              >
                <span>Return to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} {personalData.fullName}. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;