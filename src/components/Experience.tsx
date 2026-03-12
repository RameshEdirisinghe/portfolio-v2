import { Briefcase, CalendarRange, MapPin } from 'lucide-react';

const items = [
  {
    role: 'Associate Software Engineer',
    company: 'Residue Solutions',
    time: 'May 2025 - Present',
    place: 'Colombo, Sri Lanka',
    text: 'Building backend and mobile product features with NestJS, Flutter, Express, Firebase, MongoDB, and AWS.',
    stack: ['NestJS', 'Flutter', 'MongoDB', 'AWS'],
  },
  {
    role: 'Trainee Software Developer',
    company: 'iCET',
    time: 'Jul 2024 - May 2025',
    place: 'Panadura, Sri Lanka',
    text: 'Delivered software projects across Java, Spring Boot, AngularJS, Node.js, and MySQL-based systems.',
    stack: ['Spring Boot', 'AngularJS', 'Node.js', 'MySQL'],
  },
] as const;

const Experience = () => (
  <section id="experience" className="section-wrap">
    <div className="section-inner">
      <p className="section-kicker">Experience</p>
      <h2 className="section-title">Software delivery across product, platform, and application work.</h2>
      <div className="mt-12 space-y-6 md:pl-16">
        {items.map((item) => (
          <article key={item.role} className="paper-card relative p-6 sm:p-8">
            <div className="absolute -left-16 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.12)] bg-white md:flex">
              <Briefcase size={18} className="text-[var(--accent-deep)]" />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.05em]">{item.role}</h3>
                <p className="mt-2 text-lg font-medium text-[var(--ink)]">{item.company}</p>
              </div>
              <div className="space-y-2 text-sm text-[var(--muted)]">
                <div className="inline-flex items-center gap-2"><CalendarRange size={16} className="text-[var(--accent-deep)]" />{item.time}</div>
                <div className="inline-flex items-center gap-2"><MapPin size={16} className="text-[var(--accent-deep)]" />{item.place}</div>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.stack.map((tech) => <span key={tech} className="paper-chip px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-deep)]">{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
