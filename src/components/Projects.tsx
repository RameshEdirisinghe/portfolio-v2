import career from '../assets/career-connect.jpg';
import kafka from '../assets/kfka.jpg';
import movie from '../assets/movie.jpg';
import { ArrowUpRight } from 'lucide-react';

const items = [
  { title: 'Career Connect', image: career, text: 'Recruitment platform with resume workflows, protected routes, and admin tooling.', tech: ['Next.js', 'Node.js', 'MongoDB'], link: 'https://github.com/RameshEdirisinghe/CareerConnect-with-MERN-Stack.git' },
  { title: 'MovieExplorer', image: movie, text: 'A movie discovery product with search, favorites, and responsive UX polish.', tech: ['React', 'TypeScript', 'Docker'], link: 'https://github.com/RameshEdirisinghe/MovieExplorer-React.git' },
  { title: 'Kafka Microservices', image: kafka, text: 'Producer-consumer architecture focused on asynchronous event processing.', tech: ['Kafka', 'Spring Boot', 'Java'], link: 'https://github.com/RameshEdirisinghe/Kafka-Consumer-with-SpringBoot.git' },
] as const;

const Projects = () => (
  <section id="projects" className="section-wrap">
    <div className="section-inner">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Projects that show product thinking, system design, and execution.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">A tighter featured set is better than a noisy wall. These three represent the strongest range across product UI, business software, and backend architecture.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="paper-card overflow-hidden transition duration-300 hover:-translate-y-1">
            <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">{item.tech.map((tech) => <span key={tech} className="paper-chip px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-deep)]">{tech}</span>)}</div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.05em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="surface-link mt-6">View Code <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
