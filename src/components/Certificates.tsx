import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import python from '../assets/python.jpg';
import react from '../assets/react.jpg';
import typeScript from '../assets/TypeScript.png';
import blockChain from '../assets/blockChain_page-0001.jpg';
import genAi from '../assets/gen-ai_page-0001.jpg';
import devOps from '../assets/devopspdf_page-0001.jpg';

const Certificates = () => {
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
      title: 'TypeScript for JavaScript Developers',
      issuer: 'Linkedin Learning',
      date: 'May 2025',
      credentialId: 'GCP-ARCH-2023-003',
      image: typeScript,
      verifyUrl: 'https://www.linkedin.com/learning/certificates/9fec4fd05246b0489a4d45cf6b69d6badb0aecab0591910180d655cd8ff5ad4b',
      description: 'Enhanced JavaScript skills with TypeScript by learning static typing, interfaces, and modern language features for better code quality.',
      skills: ['TypeScript Syntax', 'Static Typing', 'Interfaces & Generics', 'Object-Oriented Programming', 'Code Refactoring']
    },
    {
      id: 4,
      title: 'Blockchain Basics',
      issuer: 'LinkedIn Learning',
      date: 'June 2025',
      credentialId: '',
      image: blockChain,
      verifyUrl: 'https://lnkd.in/gtk_C5bn',
      description: 'Gained foundational knowledge of blockchain technology, including decentralized systems, smart contracts, and distributed ledger principles.',
      skills: ['Blockchain Fundamentals', 'Smart Contracts', 'Distributed Ledger', 'Decentralization', 'Cryptographic Hashing']
    },
    {
      id: 5,
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
      id: 6,
      title: 'Fundamentals of DevOps',
      issuer: 'KodeKloud',
      date: 'February 2025',
      credentialId: '',
      image: devOps,
      verifyUrl: 'https://aspen.eccouncil.org/VerifyUser',
      description: 'Learned core DevOps principles and collaboration techniques to improve software delivery.',
      skills: ['CI/CD', 'Automation', 'Infrastructure as Code', 'Monitoring', 'Collaboration']
    }
  ];

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
          {certificates.map((cert) => (
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

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-300 to-slate-300 bg-clip-text text-transparent mb-2">6+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-300 to-slate-300 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-300">Skills Validated</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-300 to-slate-300 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-gray-300">Pass Rate</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-gray-400/50 transition-all duration-500">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-300 to-slate-300 bg-clip-text text-transparent mb-2">2024</div>
            <div className="text-gray-300">Recent Achievement</div>
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