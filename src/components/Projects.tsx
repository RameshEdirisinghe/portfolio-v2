import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import kafka from '../assets/kfka.jpg';
import career from '../assets/career-connect.jpg';
import movie from '../assets/movie.jpg';
import mos from '../assets/mos-burger.jpg';
import iot from '../assets/iot.jpg';
import shelby from '../assets/shelby.jpg';
import cafe from '../assets/cafe.jpg';
import camping from '../assets/camping.jpg';
import android from '../assets/android.jpg';
import ai from '../assets/ai.jpg';
import tik from '../assets/tic-tac-toe.jpg';
import hr from '../assets/Hr.jpg';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live?: string;
  Demo?: string;
  longDescription: string;
  features: string[];
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3 for mobile

  const projects: Project[] = [
    {
      id: 1,
      title: 'Career Connect',
      description: 'A full-stack job portal built with Next.js, Node.js, Express, and MongoDB',
      image: career,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/RameshEdirisinghe/CareerConnect-with-MERN-Stack.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_nextjs-fullstack-mernstack-activity-7322282936462884864-GLib?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'A full-stack job portal featuring secure user authentication with JWT, job search and listings, resume uploads, server-side rendering for SEO, and an admin dashboard for managing users and postings.',
      features: [
        'JWT Authentication & Protected Routes',
        'Server-side Rendering (Next.js)',
        'Job Listings & Search Functionality',
        'Resume Upload System',
        'Admin Dashboard',
        'RESTful API with Express & MongoDB'
      ]
    },
    {
      id: 2,
      title: 'MovieExplorer',
      description: 'A dynamic movie discovery app built with React and TypeScript.',
      image: movie,
      technologies: ['React', 'TypeScript', 'Docker', 'Tailwind CSS', 'Context API', 'TMDb API'],
      github: 'https://github.com/RameshEdirisinghe/MovieExplorer-React.git',
      live: 'https://movie-explorer-zeta-eight.vercel.app',
      longDescription: 'A modern film discovery platform that allows users to explore trending movies, search films in real-time, save favorites locally, and view detailed film information including trailers, cast, and ratings. Built with React, TypeScript, and TMDb API, with full responsiveness and a sleek yellow/black theme supporting light/dark modes.',
      features: [
        'Browse Trending & Popular Movies',
        'Real-time Search Functionality',
        'Favorites Saved in LocalStorage',
        'Movie Trailers, Cast & Genre Details',
        'Light/Dark Mode Toggle',
        'Fully Responsive UI'
      ]
    },
    {
      id: 3,
      title: 'Kafka Microservices Project',
      description: 'A real-time event-driven microservices architecture using Apache Kafka and Spring Boot.',
      image: kafka,
      technologies: ['Apache Kafka', 'Spring Boot', 'Java', 'REST API'],
      github: 'https://github.com/RameshEdirisinghe/Kafka-Consumer-with-SpringBoot.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_apachekafka-realtimedata-eventdrivenarchitecture-activity-7307576480190935041-PRbK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'A hands-on microservices project leveraging Apache Kafka for real-time data streaming and asynchronous communication. Includes a REST-based producer service and a Kafka consumer that processes messages in real-time. Built with Spring Boot and custom Kafka configurations for serialization and reliability under high load.',
      features: [
        'Kafka Producer with REST API',
        'Kafka Consumer Service',
        'Custom Serialization/Deserialization',
        'Asynchronous Microservices Communication',
        'Real-Time Message Processing',
        'Scalable & Resilient Architecture'
      ]
    },
    {
      id: 4,
      title: 'Mos Burger',
      description: 'A full-stack burger ordering platform with authentication, and AWS integration.',
      image: mos,
      technologies: ['Spring Boot', 'AngularJS', 'AWS S3', 'Tailwind CSS', 'MySQL', 'Hibernate'],
      github: 'https://github.com/RameshEdirisinghe/MOS-BURGERS-FULL-PROJECT.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_springboot-angularjs-tailwindcss-activity-7304747284414496768-6oQR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'Mos Burger is a full-stack web application built to manage burger orders and user data with clean layered architecture. The app features AWS S3 integration for secure image uploads, MySQL with Hibernate for database management, and AngularJS with OAuth for user authentication and dynamic navigation.',
      features: [
        'Image Upload to AWS S3',
        'Secure OAuth Authentication',
        'MySQL & Hibernate Integration',
        'Angular Routing & Two-Way Binding',
        'Layered Spring Boot Architecture',
        'Tailwind CSS Styling'
      ]
    },
    {
      id: 5,
      title: 'Arduino WebSocket LED Control',
      description: 'A simple yet powerful IoT project to control LEDs using Arduino Mega and WebSockets.',
      image: iot,
      technologies: ['Arduino Mega', 'WebSockets', 'Ngrok', 'JavaScript', 'Embedded Systems'],
      github: 'https://github.com/RameshEdirisinghe/arduino-websocket-bridge-Iot.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_softwareengineer-iot-ngrok-activity-7331693911591006208-grvz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'An Internet of Things project integrating Arduino Mega with WebSockets for real-time LED control from a web interface. This project explores hardware-software integration and demonstrates how code can interact with the physical world. Ngrok is used for tunneling, enabling remote access to the Arduino controller from anywhere.',
      features: [
        'Real-time LED Control via WebSockets',
        'Arduino Mega + JavaScript Interface',
        'Ngrok Tunnel for Remote Access',
        'Hardware/Software Integration',
        'Hands-on IoT Implementation',
        'Minimal Latency Communication'
      ]
    },
    {
      id: 6,
      title: 'Shelby Threads',
      description: 'A stylish, secure, and scalable POS system for clothing stores',
      image: shelby,
      technologies: ['JavaFX', 'Hibernate', 'JasperReports', 'Java', 'MySQL', 'Email API'],
      github: 'https://github.com/RameshEdirisinghe/ClothiFy---JavaFx.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_java-javafx-advancedjava-activity-7296652525573656576-6niI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'Shelby Threads is a JavaFX-based Point of Sale system tailored for clothing store management, themed after Peaky Blinders. It features layered architecture, secure authentication, catalog image handling, and advanced reporting capabilities using JasperReports. Built with Hibernate and MySQL, the system also supports email-based password recovery and PDF bill printing.',
      features: [
        'Layered Architecture & Dependency Injection',
        'Hibernate + SQL Integration',
        'Image-Based Product Catalog',
        'Secure Password Recovery via Email',
        'Password Encryption & Decoding',
        'Sales Reports with JasperReports',
        'PDF Bill Printing',
        'Executable File for Deployment'
      ]
    },
    {
      id: 7,
      title: 'Word Guessing Game',
      description: 'A fun android app that challenges users to guess hidden words letter by letter.',
      image: android,
      technologies: ['Java', 'Kotlin', 'Android Studio'],
      github: 'https://github.com/RameshEdirisinghe/Word-Play-Game.git',
      live: '',
      longDescription: 'A mobile word game built as part of the Mobile Application module at the University of Moratuwa. Features include dynamic word generation, score tracking, adjustable difficulty levels, and a clean, intuitive UI to ensure a rewarding gameplay experience.',
      features: [
        'Dynamic Word Selection',
        'Interactive Gameplay',
        'Customizable Difficulty Levels',
        'Score Tracking System',
        'Responsive & Clean UI Design'
      ]
    },
    {
      id: 8,
      title: 'Espresso Junction',
      description: 'A web-based system to manage café operations, orders, and billing.',
      image: cafe,
      technologies: ['PHP', 'JavaScript', 'Bootstrap','HTML', 'CSS',  'MySQL'],
      github: 'https://github.com/RameshEdirisinghe/Espresso-Junction---Cafe-Management-System.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_softwaredevelopment-cafemanagementsystem-activity-7273421452354154496-FCRP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'Espresso Junction is a full-featured café management web app that streamlines customer orders, admin management, and billing. Developed for the Programming Project Module at the University of Moratuwa, it connects to a MySQL database via XAMPP for efficient data handling.',
      features: [
        'Order Management',
        'Customer Billing System',
        'Responsive UI Design',
        'Admin Dashboard',
        'Database Integration with MySQL',
        'Clean UX for Café Operations'
      ]
    },
    {
      id: 9,
      title: '3D Virtual Camping Experience',
      description: 'A web-based 3D immersive environment recreating the essence of outdoor camping.',
      image: camping,
      technologies: ['Three.js', 'React.js', 'TailwindCSS'],
      github: 'https://github.com/RameshEdirisinghe/3d-camping.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_threejs-reactjs-tailwindcss-activity-7295195406953586688-RU-i?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'This project brings the outdoor adventure experience to the web with a 3D virtual camping environment. It merges creative design with real-time rendering to simulate a relaxing and explorative digital nature space.',
      features: [
        '3D Web Environment',
        'Real-Time Rendering',
        'Interactive User Experience',
        'Responsive Layouts',
        'Nature-Inspired Visuals'
      ]
    },
    {
      id: 10,
      title: 'HR Management System',
      description: 'A full-stack HR platform to manage employees, roles, attendance, and leave requests.',
      image: hr,
      technologies: ['Spring Boot', 'AngularJS', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/RameshEdirisinghe/Fortium-Partners-HR-Management-System-Frontend.git',
      live: '',
      longDescription: 'A comprehensive Human Resource Management System designed for streamlined employee administration. Built using Spring Boot and AngularJS with TailwindCSS for responsive design. Includes features like role-based access, employee CRUD, attendance tracking, and leave management.',
      features: [
        'Employee CRUD Operations',
        'Role-Based Access Control',
        'Attendance Tracking System',
        'Leave Management Workflow',
        'Responsive Admin Dashboard',
        'Spring Boot + AngularJS Integration'
      ]
    },
    {
      id: 11,
      title: 'AI Chatbot',
      description: 'A sleek and fast AI chatbot with Markdown rendering and Google AI Studio integration.',
      image: ai,
      technologies: ['JavaScript', 'Google AI Studio'],
      github: 'https://github.com/RameshEdirisinghe/Ai-chat-Bot.git',
      Demo: 'https://www.linkedin.com/posts/ramesh-edirisinghe_proud-to-present-my-ai-chatbot-project-activity-7275601478096928768-V97_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD__kyQB7jIbZPDt6CKA_7J1Qlx_Nh-Cmc4',
      longDescription: 'An intelligent chatbot interface built with modern front-end technologies and integrated with Google AI Studio. It supports Markdown syntax for enhanced interactivity and offers a responsive, dark-themed UI.',
      features: [
        'Google AI Integration',
        'Markdown Support',
        'Responsive Design',
        'Custom Dark Theme',
        'Fast and Lightweight Interaction'
      ]
    },
    {
      id: 12,
      title: 'Tic-Tac-Toe Game',
      description: 'A simple and interactive React-based Tic-Tac-Toe game.',
      image: tik,
      technologies: ['React.js', 'JavaScript'],
      github: 'https://github.com/RameshEdirisinghe/Tic-Tac-Toe-React.git',
      live: '',
      longDescription: 'A lightweight game that introduces core React principles like useState, conditional rendering, and win detection logic. Designed for beginner-level practice in React.',
      features: [
        'Turn-Based Logic',
        'Win Condition Detection',
        'State Management with useState',
        'Clean Component-Based Structure'
      ]
    }
  ];

  // Set initial visible count based on screen size
  useEffect(() => {
    const isPC = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
    setVisibleCount(isPC ? 6 : 3);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const loadMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-100/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-sky-200 to-slate-200 bg-clip-text text-transparent animate-pulse">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project) => (
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
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:bg-gradient-to-r from-sky-200 to-slate-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
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
                    <span className="px-3 py-1 bg-slate-800/40 text-gray-300 rounded-full text-sm group-hover:bg-slate-800/60 transition-colors duration-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.live ? (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:bg-gradient-to-r from-sky-200 to-slate-200 hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  ) : project.Demo ? (
                    <a 
                      href={project.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:bg-gradient-to-r from-sky-200 to-slate-200 hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="border border-cyan-600/90 bg-transparent hover:bg-slate-50 hover:text-black text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              aria-label="Load more projects"
            >
              Load More
            </button>
          </div>
        )}

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
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-200 to-slate-200 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  {selectedProject.live ? (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-sky-200 to-slate-200 text-black px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-white/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  ) : selectedProject.Demo ? (
                    <a 
                      href={selectedProject.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-sky-200 to-slate-200 text-black px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-white/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}
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