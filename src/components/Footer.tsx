import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Certificates', '#certificates'],
  ['Contact', '#contact'],
] as const;

const Footer = () => {
  const year = new Date().getFullYear();
  const jump = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-[rgba(22,26,23,0.08)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-end">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.06em]">Building thoughtful software with a product mindset.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">Open to engineering opportunities, freelance builds, and technically serious collaborations.</p><div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]"><MapPin size={16} className="text-[var(--accent-deep)]" />Maharagama, Sri Lanka</div>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/RameshEdirisinghe" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com/in/ramesh-edirisinghe/" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:ranganathedirisingha@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3">{links.map(([label, href]) => <button key={label} onClick={() => jump(href)} className="text-left text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]">{label}</button>)}</div>
          <div><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-deep)]">Back to top<ArrowUpRight size={16} /></button></div>
        </div>
        <div className="mt-8 border-t border-[rgba(22,26,23,0.08)] pt-6 text-sm text-[var(--muted)]">© {year} Ramesh Edirisinghe. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
