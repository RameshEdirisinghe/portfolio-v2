import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Cpu } from 'lucide-react';

const TechStack = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Redis', level: 65 },
      ]
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'iOS Development', level: 50 },
      ]
    },
    {
      category: 'DevOps',
      icon: <Cpu className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />,
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 60 },
      ]
    },
    {
      category: 'Programming',
      icon: <Code className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />,
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Data Structures', level: 80 },
        { name: 'Algorithms', level: 75 },
        { name: 'System Design', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I leverage to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gray-500/20 rounded-lg group-hover:bg-gray-500/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-sky-800 to-slate-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
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

export default TechStack;