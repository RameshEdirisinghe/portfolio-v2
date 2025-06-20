import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/ramesh/ecommerce',
      live: 'https://ecommerce-demo.com',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern web technologies and best practices.',
      features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Integration', 'Order Tracking', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      github: 'https://github.com/ramesh/taskmanager',
      live: 'https://taskmanager-demo.com',
      longDescription: 'A modern task management application that enables teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking.',
      features: ['Real-time Collaboration', 'Drag & Drop Interface', 'Team Management', 'Progress Tracking', 'File Attachments', 'Notifications']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with forecasts and location-based data',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Weather API', 'Chart.js', 'CSS3', 'Geolocation'],
      github: 'https://github.com/ramesh/weather-app',
      live: 'https://weather-dashboard-demo.com',
      longDescription: 'An intuitive weather dashboard that provides accurate weather information, forecasts, and beautiful visualizations using modern web APIs and responsive design.',
      features: ['Current Weather', '7-Day Forecast', 'Location Detection', 'Weather Maps', 'Historical Data', 'Responsive Design']
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'Django', 'D3.js', 'PostgreSQL'],
      github: 'https://github.com/ramesh/social-analytics',
      live: 'https://analytics-demo.com',
      longDescription: 'A comprehensive social media analytics platform that helps businesses track their social media performance across multiple platforms with detailed insights and reporting.',
      features: ['Multi-Platform Integration', 'Real-time Analytics', 'Custom Reports', 'Engagement Metrics', 'Competitor Analysis', 'Export Features']
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Educational platform for online courses and student management',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI', 'Video.js', 'PWA'],
      github: 'https://github.com/ramesh/lms',
      live: 'https://lms-demo.com',
      longDescription: 'A modern learning management system that provides a seamless experience for both educators and students with course management, progress tracking, and interactive features.',
      features: ['Course Creation', 'Video Streaming', 'Progress Tracking', 'Assignments', 'Discussion Forums', 'Mobile App']
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency price tracking and portfolio management',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Redux', 'CoinGecko API', 'AsyncStorage', 'Charts'],
      github: 'https://github.com/ramesh/crypto-tracker',
      live: 'https://crypto-tracker-demo.com',
      longDescription: 'A comprehensive cryptocurrency tracking application that allows users to monitor prices, manage portfolios, and stay updated with market trends.',
      features: ['Real-time Prices', 'Portfolio Management', 'Price Alerts', 'Market Analysis', 'News Integration', 'Cross-platform']
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
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
            Featured <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:bg-gradient-to-r from-sky-800 to-slate-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-sky-800/40 text-gray-300 rounded-full text-sm group-hover:bg-sky-800/60 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-800/40Text-gray-300 rounded-full text-sm group-hover:bg-slate-800/60 transition-colors duration-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-300 hover:bg-gradient-to-r from-sky-800 to-slate-500 hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-800 to-slate-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-sky-800/40 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.github}
                    className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={selectedProject.live}
                    className="flex items-center space-x-2 bg-gradient-to-r from-sky-800 to-slate-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-white/10"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default Projects;