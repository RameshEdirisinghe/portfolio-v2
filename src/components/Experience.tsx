import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Intern Software Engineer',
      company: 'Residue Solutions',
      location: 'Colombo, Sri Lanka',
      duration: 'Jun 2025 - Present',
      type: 'Full-time',
      technologies: ['React', 'Node.js','Express js', 'Fire Base', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      position: 'React Developer Intern',
      company: 'Technocraft Solutions',
      location: 'Kurunegala, Sri Lanka',
      duration: 'May 2025 - Jun 2025',
      type: 'Part-time',
      technologies: ['React', 'Redux', 'Express js']
    },
    {
      id: 3,
      position: 'Trainee Software Developer',
      company: 'Icet',
      location: 'Pandura, Sri Lanka',
      duration: 'Jul 2024 - May 2025',
      type: 'Full-time',
      technologies: ['Spring-Boot', 'Angular Js','Flutter','Node.js', 'Java', 'Js','MySQL','Tailwind CSS']
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in crafting innovative solutions through software development
          </p>
        </div>

        <div className="relative">
          {/* Simplified timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-800 to-slate-500"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-start mb-8 pl-12">
              {/* Timeline dot */}
              <div className="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-sky-800 to-slate-500 rounded-full border-2 border-slate-900 z-10"></div>

              {/* Content */}
              <div className="w-full bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    exp.type === 'Full-time' ? 'bg-sky-800/40 text-gray-300' :
                    exp.type === 'Internship' ? 'bg-slate-800/40 text-gray-300' :
                    exp.type === 'Freelance' ? 'bg-sky-700/40 text-gray-300' :
                    'bg-slate-700/40 text-gray-300'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-2">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-300 mb-4">
                  <Calendar className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span>{exp.duration}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-sky-800/40 text-gray-300 rounded text-sm group-hover:bg-sky-800/60 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Experience;