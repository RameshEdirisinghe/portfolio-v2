import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Invalid email address');
      return;
    }

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('EmailJS success', res);
      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error', err);
      toast.error('Failed to send message. Try again later.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />,
      title: 'Email',
      value: 'ranganathedirisingha@gmail.com',
      link: 'mailto:ranganathedirisingha@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />,
      title: 'Phone',
      value: '+94 70 5787818',
      link: 'tel:+94705787818'
    },
    {
      icon: <MapPin className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />,
      title: 'Location',
      value: 'Maharagama, Sri Lanka',
      link: 'https://maps.app.goo.gl/DXSkddkQ44vfeeop8'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ramesh-edirisinghe/',
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/RameshEdirisinghe',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: 'Twitter',
      url: 'https://x.com/RameshEdi',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: 'WhatsApp',
      url: 'https://wa.me/qr/SFAUXWBPOKAYE1',
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0D0D1C',
            color: '#fff',
            border: '1px solid #333',
          },
          success: {
            iconTheme: { primary: '#4ade80', secondary: '#1e1e1e' },
          },
          error: {
            iconTheme: { primary: '#f87171', secondary: '#1e1e1e' },
          },
        }}
      />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-sky-800 to-slate-500 bg-clip-text text-transparent animate-gradient">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's connect for projects, collaborations, or a quick tech chat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Connect With Me</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="flex items-center space-x-3 p-4 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl border border-slate-800/50 rounded-2xl hover:border-gray-400/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 group">
                  <div className="p-2 bg-sky-800/40 rounded-lg group-hover:bg-sky-800/60 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300 group-hover:bg-gradient-to-r group-hover:from-sky-800 group-hover:to-slate-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-full border border-gray-700 text-gray-300 transition-all duration-300 transform hover:scale-110 hover:bg-cyan-700/50 hover:border-cyan-700 hover:text-cyan-300"
                    title={social.name}>
                    {React.cloneElement(social.icon, { className: "w-5 h-5 transition-colors" })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-xl p-8 rounded-2xl border border-slate-800/50">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-800 rounded-lg focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-800 rounded-lg focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-800 rounded-lg focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400 resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-sky-800 to-slate-500 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
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

export default Contact;
