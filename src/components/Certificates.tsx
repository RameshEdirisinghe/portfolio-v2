import { Award, CalendarRange, ExternalLink } from 'lucide-react';
import blockChain from '../assets/blockChain_page-0001.jpg';
import docker from '../assets/Docker.png';
import genAi from '../assets/gen-ai_page-0001.jpg';
import mt from '../assets/MT.png';
import python from '../assets/python.jpg';
import react from '../assets/react.jpg';

const items = [
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: 'January 2024',
    image: python,
    text: 'Foundational Python programming and problem-solving training.',
    link: 'https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1',
  },
  {
    title: 'React BootCamp',
    issuer: 'LetsUpgrade',
    date: 'February 2025',
    image: react,
    text: 'Hands-on React learning focused on hooks, components, and responsive UI.',
    link: 'https://lnkd.in/gD8uCzCR',
  },
  {
    title: 'Docker Foundations',
    issuer: 'Docker via LinkedIn Learning',
    date: 'July 2025',
    image: docker,
    text: 'Containerization, images, CLI workflows, and Docker Compose.',
    link: 'https://www.linkedin.com/learning/certificates/2fba483d7eb1bdb58aa7ff10092f367389a1dcafeb08960f220f3a125bafd106',
  },
  {
    title: 'MITRE ATT&CK Foundations',
    issuer: 'AttackIQ',
    date: 'July 2025',
    image: mt,
    text: 'Security and threat-detection foundations using the ATT&CK framework.',
    link: 'https://www.credly.com/badges/d176daeb-2f6e-45e5-b649-2d49066cd6c1/linked_in_profile',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'LinkedIn Learning',
    date: 'June 2025',
    image: blockChain,
    text: 'An introduction to blockchain systems and smart-contract ideas.',
    link: 'https://lnkd.in/gtk_C5bn',
  },
  {
    title: 'Generative AI',
    issuer: 'LinkedIn Learning',
    date: 'May 2025',
    image: genAi,
    text: 'Conceptual grounding in generative models, use cases, and ethics.',
    link: 'https://www.linkedin.com/learning/certificates/2ec33fc3f570be1953015857987512a2a294a753aa4bc2a608bc55dde6030687?trk=share_certificate',
  },
] as const;

const stats = [
  ['Years of Coding', '3+'],
  ['Projects', '20+'],
  ['Certificates', '12+'],
  ['Contributions', '1300+'],
] as const;

const Certificates = () => (
  <section id="certificates" className="section-wrap">
    <div className="section-inner">
      <p className="section-kicker">Credentials</p>
      <h2 className="section-title">Continuous learning across engineering, cloud, security, and AI.</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="paper-card overflow-hidden">
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.05em]">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--ink)]">{item.issuer}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white"><Award size={18} className="text-[var(--accent-deep)]" /></div>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)]"><CalendarRange size={15} className="text-[var(--accent-deep)]" />{item.date}</div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent-deep)]">Verify<ExternalLink size={15} /></a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(([label, value]) => <div key={label} className="paper-card px-6 py-6 text-center"><p className="font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.06em]">{value}</p><p className="mt-2 text-sm text-[var(--muted)]">{label}</p></div>)}</div>
    </div>
  </section>
);

export default Certificates;
