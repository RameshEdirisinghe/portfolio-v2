import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Cpu } from 'lucide-react';

const TechStack = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
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
      icon: <Server className="w-8 h-8" />,
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
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Redis', level: 65 },
      ]
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'iOS Development', level: 50 },
      ]
    },
    {
      category: 'DevOps',
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 60 },
      ]
    },
    {
      category: 'Programming',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Data Structures', level: 80 },
        { name: 'Algorithms', level: 75 },
        { name: 'System Design', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
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
    </section>
  );
};

export default TechStack;