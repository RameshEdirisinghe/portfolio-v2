import { Download, MapPin, GraduationCap, Briefcase, ArrowRight, Sparkles, Github, Linkedin, Phone } from 'lucide-react';
import profilePic from '../assets/myImg.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden bg-gray-950"
      aria-label="About Section"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl animate-pulse sm:w-32 sm:h-32"></div>
        <div className="absolute bottom-10 right-4 w-28 h-28 bg-cyan-500/5 rounded-full blur-3xl animate-pulse sm:delay-700 sm:w-36 sm:h-36"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-cyan-500/5 rounded-full blur-3xl animate-pulse sm:delay-300 sm:w-24 sm:h-24"></div>
      </div>

      {/* Minimal grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1.5 bg-cyan-700/10 border border-cyan-600/15 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 mr-2" />
                <span className="text-cyan-300 text-sm font-medium sm:text-base">Open to Opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-slate-600 to-slate-800 bg-clip-text text-transparent animate-gradient">
                  Ramesh Edirisinghe
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200">
                Full-Stack Software Engineer
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                I craft <span className="text-white font-medium bg-cyan-800/20 px-1.5 py-0.5 rounded">innovative solutions</span> with cutting-edge technologies, transforming complex challenges into elegant, user-friendly designs.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-lg p-2 sm:p-3 hover:border-cyan-600/30 hover:shadow-md hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-gray-700/30 rounded group-hover:bg-cyan-700/30 transition-colors">
                    <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-300 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase">Location</p>
                    <p className="text-white text-xs sm:text-base font-semibold">Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-lg p-2 sm:p-3 hover:border-cyan-600/30 hover:shadow-md hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-gray-700/30 rounded group-hover:bg-cyan-700/30 transition-colors">
                    <GraduationCap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-300 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase">University</p>
                    <p className="text-white text-xs sm:text-base font-semibold">UOM</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-lg p-2 sm:p-3 hover:border-cyan-600/30 hover:shadow-md hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-gray-700/30 rounded group-hover:bg-cyan-700/30 transition-colors">
                    <Briefcase className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-300 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase">Role</p>
                    <p className="text-white text-xs sm:text-base font-semibold">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="group relative bg-cyan-700/10 hover:bg-slate-50 hover:text-black text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5 group-hover:animate-pulse" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative border border-cyan-600/30 bg-transparent hover:bg-slate-50 hover:text-black text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 flex items-center justify-center space-x-2"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative flex flex-col items-center">
              
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-md object-cover border border-gray-700/20 group-hover:border-cyan-500/20 transition-all duration-300"
                />

              <div className="flex space-x-3.5 mt-3.5">
                <a
                  href="https://github.com/RameshEdirisinghe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-full hover:bg-cyan-700/50 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5 text-gray-300 hover:text-cyan-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ramesh-edirisinghe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-full hover:bg-cyan-700/50 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5 text-gray-300 hover:text-cyan-300" />
                </a>
                <a
                  href="https://wa.me/qr/SFAUXWBPOKAYE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-full hover:bg-cyan-700/50 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp Contact"
                >
                  <Phone className="w-4.5 h-4.5 text-gray-300 hover:text-cyan-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;