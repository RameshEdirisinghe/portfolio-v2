import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return toast.error('Please fill all fields');
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { from_name: formData.name, reply_to: formData.email, message: formData.message }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message. Try again later.');
    }
  };

  return (
    <section id="contact" className="section-wrap pb-16">
      <Toaster position="top-right" toastOptions={{ style: { background: '#161a17', color: '#f5f3ee' } }} />
      <div className="section-inner grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="paper-card p-6 sm:p-8">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s build something useful and well-crafted.</h2>
          <p className="section-copy max-w-none">Available for engineering roles, freelance builds, and collaborative technical work.</p>
          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <a href="mailto:ranganathedirisingha@gmail.com" className="block rounded-[24px] border border-[rgba(22,26,23,0.08)] bg-white/70 px-5 py-4"><Mail size={18} className="mb-3 text-[var(--accent-deep)]" />ranganathedirisingha@gmail.com</a>
            <div className="flex gap-3"><a href="https://www.linkedin.com/in/ramesh-edirisinghe/" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white"><Linkedin size={18} /></a><a href="https://github.com/RameshEdirisinghe" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white"><Github size={18} /></a></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="paper-card space-y-4 p-6 sm:p-8">
          <p className="section-kicker">Send Message</p>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full rounded-[22px] border border-[rgba(22,26,23,0.08)] bg-white/80 px-5 py-4 text-sm outline-none" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-full rounded-[22px] border border-[rgba(22,26,23,0.08)] bg-white/80 px-5 py-4 text-sm outline-none" />
          <textarea name="message" value={formData.message} onChange={handleChange} rows={7} placeholder="Tell me about the project or opportunity." className="w-full resize-none rounded-[22px] border border-[rgba(22,26,23,0.08)] bg-white/80 px-5 py-4 text-sm outline-none" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"><Send size={16} />Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
