import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import python from '../assets/python.jpg';
import react from '../assets/react.jpg';
import typeScript from '../assets/TypeScript.png';
import blockChain from '../assets/blockChain_page-0001.jpg';
import genAi from '../assets/gen-ai_page-0001.jpg';
import devOps from '../assets/devopspdf_page-0001.jpg';
import Docker from '../assets/Docker.png';
import MT from '../assets/MT.png';
import Express from '../assets/Express.png';
import ReduxCert from '../assets/Redux.png';
import Jakarta from '../assets/Jakarta.png';
import pythonQuick from '../assets/Python.png';
import { useState, useEffect } from 'react'; // Added imports for state and effect

const Certificates = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 certificates

  const certificates = [
    {
      id: 1,
      title: 'Python for Beginners',
      issuer: 'University of Moratuwa',
      date: 'January 2024',
      credentialId: 'N4HYt4INNI',
      image: python,
      verifyUrl: 'https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1',
      description: 'Completed an introductory course on Python programming, covering fundamental concepts and practical applications.',
      skills: ['Python Basics', 'Control Structures', 'Functions', 'File I/O', 'Problem Solving']
    },
    {
      id: 2,
      title: 'React BootCamp',
      issuer: 'LetsUpgrade',
      date: 'February 2025',
      credentialId: 'LUERJSFEB1251642',
      image: react,
      verifyUrl: 'https://lnkd.in/gD8uCzCR',
      description: 'Completed a hands-on React BootCamp covering hooks, state management, component design, and responsive UI development.',
      skills: ['React.js', 'Hooks & Components', 'State Management', 'Responsive Design']
    },
    {
      id: 3,
      title: 'Docker Foundations Professional Certificate',
      issuer: 'Docker, Inc. via LinkedIn Learning',
      date: 'July 2025',
      credentialId: '',
      image: Docker, 
      verifyUrl: 'https://www.linkedin.com/learning/certificates/2fba483d7eb1bdb58aa7ff10092f367389a1dcafeb08960f220f3a125bafd106',
      description: 'Learned Docker fundamentals including container creation, image management, and orchestration using Docker CLI and Compose.',
      skills: ['Docker Basics', 'Containerization', 'Docker CLI', 'Docker Compose', 'Image Management']
    },
    {
      id: 4,
      title: 'Foundations of Operationalizing MITRE ATT&CK v13',
      issuer: 'AttackIQ',
      date: 'July 2025',
      credentialId: '',
      image: MT,
      verifyUrl: 'https://www.credly.com/badges/d176daeb-2f6e-45e5-b649-2d49066cd6c1/linked_in_profile',
      description: 'Gained foundational understanding of MITRE ATT&CK framework, threat detection techniques, and operational strategies in cybersecurity.',
      skills: ['Cybersecurity', 'MITRE ATT&CK', 'Threat Detection', 'Incident Response', 'Security Operations']
    },
    {
      id: 5,
      title: 'TypeScript for JavaScript Developers',
      issuer: 'Linkedin Learning',
      date: 'May 2025',
      credentialId: 'GCP-ARCH-2023-003',
      image: typeScript,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/9fec4fd05246b0489a4d45cf6b69d6badb0aecab0591910180d655cd8ff5ad4b',
      description: 'Enhanced JavaScript expertise by learning TypeScript concepts including static typing, interfaces, and advanced OOP practices.',
      skills: ['TypeScript Syntax', 'Static Typing', 'Interfaces & Generics', 'Object-Oriented Programming', 'Code Refactoring']
    },
    {
      id: 6,
      title: 'Blockchain Basics',
      issuer: 'LinkedIn Learning',
      date: 'June 2025',
      credentialId: '',
      image: blockChain,
      verifyUrl: 'https://lnkd.in/gtk_C5bn',
      description: 'Acquired foundational knowledge of blockchain technology, including decentralized systems, smart contracts, and distributed ledger principles.',
      skills: ['Blockchain Fundamentals', 'Smart Contracts', 'Distributed Ledger', 'Decentralization', 'Cryptographic Hashing']
    },
    {
      id: 7,
      title: 'RESTful APIs with Node.js and Express',
      issuer: 'LinkedIn Learning',
      date: 'August 2025',
      credentialId: '',
      image: Express, 
      verifyUrl: 'https://www.linkedin.com/learning/certificates/85cd0982c666b67d51305c1d8faeb30c77bc3137d0713dbb8473706032637f5f?trk=share_certificate',
      description: 'Developed skills in building RESTful APIs using Node.js and Express, covering routing, middleware, error handling, and API design best practices.',
      skills: ['Express.js', 'RESTful Design', 'Middleware', 'Routing', 'Error Handling']
    },
    {
      id: 8,
      title: 'Type-Safe Redux',
      issuer: 'LinkedIn Learning',
      date: 'August 2025',
      credentialId: '',
      image: ReduxCert,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/7e33c3516f68507d05d40b5d43fa1588781ffc43aa5511ee0a66689f5dd8e5ad',
      description: 'Mastered Redux with TypeScript integration, focusing on type-safe state management, reducers, and action creators for scalable applications.',
      skills: ['Redux', 'TypeScript Integration', 'State Management', 'Action Creators', 'Reducers']
    },
    {
      id: 9,
      title: 'Generative AI',
      issuer: 'LinkedIn Learning',
      date: 'May 2025',
      credentialId: '',
      image: genAi,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/2ec33fc3f570be1953015857987512a2a294a753aa4bc2a608bc55dde6030687?trk=share_certificate',
      description: 'Developed a deep understanding of generative AI concepts, models, and applications, including creative AI solutions and ethical considerations.',
      skills: ['Generative Models', 'Neural Networks', 'Deep Learning', 'Ethics in AI']
    },
    {
      id: 10,
      title: 'Fundamentals of DevOps',
      issuer: 'KodeKloud',
      date: 'February 2025',
      credentialId: '',
      image: devOps,
      verifyUrl: 'https://aspen.eccouncil.org/VerifyUser',
      description: 'Learned core DevOps principles and collaboration techniques to improve software delivery and infrastructure management.',
      skills: ['CI/CD', 'Automation', 'Infrastructure as Code', 'Monitoring', 'Collaboration']
    },
    {
      id: 11,
      title: 'Jakarta EE Servlets ',
      issuer: '',
      date: 'July 2024',
      credentialId: '',
      image: Jakarta, 
      verifyUrl: 'https://www.linkedin.com/learning/certificates/2badf358c9743467f5c6be2e825a641111af025a2b14163dd1525226cad47065?trk=share_certificate',
      description: 'Learned the fundamentals of Jakarta EE Servlets, including request-response handling, session management, and building dynamic web applications using Java EE.',
      skills: ['Jakarta EE', 'Servlets', 'Web Development', 'Java EE']
    },
    {
      id: 12,
      title: 'Python Quick Start',
      issuer: 'LinkedIn Learning',
      date: 'September 2024',
      credentialId: '',
      image: pythonQuick,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/b4615a923b47ddd99e540ba43b22bf5f200449dfe7477d273e24b90e5e95cfc4?trk=share_certificate',
      description: 'Completed a quick-start Python course covering basic syntax, data types, control flow, and function creation to build foundational programming skills.',
      skills: ['Python Basics', 'Data Types', 'Control Flow', 'Functions']
    }
  ];

  // Set initial visible count based on screen size
  useEffect(() => {
    const isPC = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
    setVisibleCount(isPC ? 6 : 3); // Show 6 on large screens, 3 on smaller screens
  }, []);

  const loadMore = () => {
    setVisibleCount(certificates.length); // Show all certificates when "See More" is clicked
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
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
            Certifications & <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Achievements</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Credentials that showcase my expertise and dedication to lifelong learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.slice(0, visibleCount).map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-800 to-slate-500 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:bg-gradient-to-r from-sky-800 to-slate-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Building className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-sky-800/40 text-gray-300 rounded text-xs group-hover:bg-sky-800/60 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800/40 text-gray-300 rounded text-xs group-hover:bg-slate-800/60 transition-colors">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:bg-gradient-to-r from-sky-800 to-slate-500 hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                  >
                    <span className="text-sm">Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < certificates.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="border border-cyan-600/90 bg-transparent hover:bg-slate-50 hover:text-black text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              aria-label="Load more certificates"
            >
              See More
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-slate-300 bg-clip-text text-transparent mb-3">3+</div>
            <div className="text-gray-300 uppercase tracking-wide font-semibold">Years of Coding</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-slate-300 bg-clip-text text-transparent mb-3">20+</div>
            <div className="text-gray-300 uppercase tracking-wide font-semibold">Projects</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-slate-300 bg-clip-text text-transparent mb-3">15+</div>
            <div className="text-gray-300 uppercase tracking-wide font-semibold">Certifications</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-slate-300 bg-clip-text text-transparent mb-3">1200+</div>
            <div className="text-gray-300 uppercase tracking-wide font-semibold">GitHub Contributions</div>
          </div>
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

export default Certificates;