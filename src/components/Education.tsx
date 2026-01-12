import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      degree: 'Bachelor of Information Technology (BIT)',
      institution: 'University of Moratuwa',
      location: 'Moratuwa, Sri Lanka',
      duration: '2022 — Present',
      highlights: ['Software Engineering', 'Data Structures', 'AI & ML Concepts', 'Mobile App Development'],
    },
    {
      id: 2,
      degree: 'Diploma in Software Engineering',
      institution: 'Institute of Computer Engineering Technology (iCET)',
      location: 'Panadura, Sri Lanka',
      duration: '2024 — 2025',
      highlights: ['Java & OOP', 'Spring Boot', 'ReactJS', 'Industry Project Experience'],
    },
    {
      id: 3,
      degree: 'G.C.E. Advanced Level (Physical Science Stream)',
      institution: 'Isipathana College, Colombo',
      location: 'Colombo 05, Sri Lanka',
      duration: '2019 — 2021',
      highlights: ['Physics', 'Chemistry', 'Mathematics', 'problem Solving '],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Academic <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Journey</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A snapshot of my academic path, highlighting the institutions, degrees, and key milestones that shaped my knowledge and skills.
          </p>
        </div>

        <div className="space-y-8">
          {educationHistory.map((edu) => (
            <div
              key={edu.id}
              className="w-full bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-sky-800 group-hover:to-slate-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                {edu.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-3">
                <div className="flex items-center space-x-1">
                  <Building className="w-4 h-4 text-gray-300" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-gray-300" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-gray-300 mb-4">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span>{edu.duration}</span>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-sky-800/40 text-gray-300 rounded text-sm group-hover:bg-sky-800/60 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
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

export default Education;
