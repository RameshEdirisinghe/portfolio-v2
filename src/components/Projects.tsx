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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.github}
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={selectedProject.live}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
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
    </section>
  );
};

export default Projects;