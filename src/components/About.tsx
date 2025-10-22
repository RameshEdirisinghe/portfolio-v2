import { Mail, MapPin, Github, Linkedin, Code, Server, Cloud } from 'lucide-react';
import profilePic from '../assets/myImg.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gray-900"
      aria-label="About Section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Section: Profile */}
          <aside className="lg:col-span-4 bg-gray-800 rounded-xl p-8 h-fit lg:sticky lg:top-8">
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="Ramesh Edirisinghe"
                className="w-44 h-44 rounded-full object-cover border-4 border-gray-700 mb-6"
              />
              
              <h1 className="text-3xl font-bold text-white mb-2">Ramesh Edirisinghe</h1>
              <p className="text-lg text-gray-400 mb-4">Senior Software Engineer</p>
              <p className="text-sm text-gray-300 text-center mb-8 leading-relaxed">
                15+ years building scalable systems and leading engineering teams
              </p>

              {/* Contact Info */}
              <div className="w-full space-y-3 mb-8">
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <a href="mailto:ramesh.edirisinghe@example.com" className="hover:text-white transition-colors">
                    ramesh.edirisinghe@example.com
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  <span>Sri Lanka</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/RameshEdirisinghe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ramesh-edirisinghe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Section: Skills and Experience */}
          <main className="lg:col-span-8 space-y-8">
            {/* Core Skills Section */}
            <section className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700">Core Skills</h2>

              <div className="space-y-6">
                {/* Languages */}
                <div>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Code className="w-4 h-4 mr-2" />
                    <span>Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      TypeScript
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      Python
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      Go
                    </span>
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Server className="w-4 h-4 mr-2" />
                    <span>Backend</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      Node.js
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      PostgreSQL
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      Redis
                    </span>
                  </div>
                </div>

                {/* Cloud */}
                <div>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Cloud className="w-4 h-4 mr-2" />
                    <span>Cloud</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      AWS
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      Kubernetes
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default">
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </section>
  );
};

export default About;