import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Junior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'Colombo, Sri Lanka',
      duration: 'Jan 2024 - Present',
      type: 'Full-time',
      description: 'Developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Developed 3+ full-stack web applications using React and Node.js',
        'Improved application performance by 40% through code optimization',
        'Mentored 2 junior developers and conducted code reviews',
        'Implemented automated testing resulting in 95% test coverage'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      position: 'Software Development Intern',
      company: 'InnovateX',
      location: 'Kandy, Sri Lanka',
      duration: 'Jun 2023 - Dec 2023',
      type: 'Internship',
      description: 'Gained hands-on experience in software development lifecycle. Worked on multiple projects ranging from web applications to mobile development.',
      achievements: [
        'Built a mobile app using React Native with 10k+ downloads',
        'Contributed to open-source projects with 500+ GitHub stars',
        'Participated in agile development processes and daily standups',
        'Created comprehensive documentation for development processes'
      ],
      technologies: ['React Native', 'Python', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      id: 3,
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      location: 'Remote',
      duration: 'Jan 2023 - May 2023',
      type: 'Freelance',
      description: 'Provided web development services to small businesses and startups. Created responsive websites and e-commerce solutions.',
      achievements: [
        'Delivered 8+ websites for local businesses',
        'Achieved 100% client satisfaction rating',
        'Increased clients\' online presence by 300% on average',
        'Reduced website loading times by 60% through optimization'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'MySQL']
    },
    {
      id: 4,
      position: 'Research Assistant',
      company: 'University of Moratuwa',
      location: 'Moratuwa, Sri Lanka',
      duration: 'Sep 2022 - Dec 2022',
      type: 'Part-time',
      description: 'Assisted in research projects related to machine learning and data analysis. Contributed to academic publications and conference presentations.',
      achievements: [
        'Co-authored 2 research papers in international conferences',
        'Developed ML models with 92% accuracy for data classification',
        'Presented research findings at 3 academic conferences',
        'Created data visualization tools for research analysis'
      ],
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Jupyter']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'
              }`}>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400' :
                      exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-400' :
                      exp.type === 'Freelance' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                  
                  <div className="flex items-center space-x-4 text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-blue-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;