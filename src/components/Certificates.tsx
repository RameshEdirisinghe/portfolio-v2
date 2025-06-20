import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'AWS-DEV-2024-001',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      verifyUrl: 'https://aws.amazon.com/certification/verify',
      description: 'Demonstrated proficiency in developing and maintaining applications on AWS platform with best practices.',
      skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation', 'S3']
    },
    {
      id: 2,
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: 'January 2024',
      credentialId: 'META-FE-2024-002',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      verifyUrl: 'https://coursera.org/verify',
      description: 'Comprehensive program covering modern front-end development practices and React ecosystem.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Figma', 'Git']
    },
    {
      id: 3,
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'December 2023',
      credentialId: 'GCP-ARCH-2023-003',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      verifyUrl: 'https://cloud.google.com/certification/verify',
      description: 'Expertise in designing, developing, and managing robust, secure, scalable, and dynamic solutions.',
      skills: ['GCP Services', 'Kubernetes', 'Cloud Architecture', 'DevOps', 'Security']
    },
    {
      id: 4,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'November 2023',
      credentialId: 'MONGO-DEV-2023-004',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      verifyUrl: 'https://university.mongodb.com/verify_certificate',
      description: 'Proficiency in MongoDB database design, development, and optimization techniques.',
      skills: ['MongoDB', 'Aggregation', 'Indexing', 'Schema Design', 'Performance']
    },
    {
      id: 5,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'October 2023',
      credentialId: 'DOCKER-DCA-2023-005',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      verifyUrl: 'https://docker.com/certification/verify',
      description: 'Comprehensive understanding of Docker containerization and orchestration technologies.',
      skills: ['Docker', 'Containerization', 'Docker Compose', 'Swarm', 'CI/CD']
    },
    {
      id: 6,
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: 'September 2023',
      credentialId: 'CEH-2023-006',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      verifyUrl: 'https://aspen.eccouncil.org/VerifyUser',
      description: 'Knowledge of security vulnerabilities, attack vectors, and defensive countermeasures.',
      skills: ['Penetration Testing', 'Network Security', 'Web Security', 'Social Engineering', 'Forensics']
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600/90 text-white p-2 rounded-full">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
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
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </span>
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
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
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">6+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-400">Skills Validated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400">Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">2024</div>
            <div className="text-gray-400">Recent Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;