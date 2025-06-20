import { Download, MapPin, GraduationCap, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import profilePic from '../assets/myImg.jpg';


const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-slate-400/10 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      {/* ↑↑↑ This is where the background grid is styled. Adjust rgba alpha or size to make it more/less visible. */}

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-sky-700/10 border border-sky-600/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-gray-300 mr-2" />
                <span className="text-gray-300 text-sm font-medium">Available for new opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-sky-800 via-slate-500 to-slate-800/60 bg-clip-text text-transparent animate-gradient">
                  Ramesh Edirisinghe
                </span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200">
                  Full-Stack Software Engineer
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Passionate about creating <span className="text-white font-semibold bg-sky-800/40 px-2 py-1 rounded-md">innovative solutions</span> and
                learning cutting-edge technologies. I love turning complex problems into simple,
                beautiful and intuitive designs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-500/20 rounded-lg group-hover:bg-gray-500/30 transition-colors">
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Location</p>
                    <p className="text-white font-semibold">Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50  rounded-2xl p-4 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-500/20 rounded-lg group-hover:bg-gray-500/30 transition-colors">
                    <GraduationCap className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">University</p>
                    <p className="text-white font-semibold">UOM</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50  rounded-2xl p-4 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-500/20 rounded-lg group-hover:bg-gray-500/30 transition-colors">
                    <Briefcase className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Role</p>
                    <p className="text-white font-semibold">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex items-center justify-center space-x-2 overflow-hidden">
                <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </button>

              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative border-2 border-white/20 bg-white/5 text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/25 flex items-center justify-center space-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10">Let's Connect</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-white/10 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full border border-white/10 animate-ping"></div>

              <div className="w-80 h-80 bg-white/5 rounded-full absolute top-0 left-0 blur-3xl animate-pulse"></div>
              <div className="w-72 h-72 bg-white/10 rounded-full absolute top-4 left-4 blur-xl animate-pulse delay-1000"></div>

              <div className="relative z-10 w-72 h-72 bg-gradient-to-br from-sky-900/50 to-sky-900/20 backdrop-blur-xl rounded-full border-4 border-slate-700/50 flex items-center justify-center group hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="relative z-10 w-65 h-65 rounded-full object-cover border-4 border-white/10 group-hover:border-white/30 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 3s ease-in-out infinite 2s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
