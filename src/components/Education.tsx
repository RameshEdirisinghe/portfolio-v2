import { CalendarRange, GraduationCap, MapPin } from 'lucide-react';

const items = [
  {
    degree: 'Bachelor of Information Technology',
    school: 'University of Moratuwa',
    place: 'Moratuwa, Sri Lanka',
    time: '2022 - Present',
    tags: ['Software Engineering', 'Data Structures', 'AI Concepts'],
  },
  {
    degree: 'Diploma in Software Engineering',
    school: 'Institute of Computer Engineering Technology',
    place: 'Panadura, Sri Lanka',
    time: '2024 - 2025',
    tags: ['Java', 'Spring Boot', 'React'],
  },
  {
    degree: 'Advanced Level, Physical Science',
    school: 'Isipathana College',
    place: 'Colombo 05, Sri Lanka',
    time: '2019 - 2021',
    tags: ['Mathematics', 'Physics', 'Problem Solving'],
  },
] as const;

const Education = () => (
  <section id="education" className="section-wrap">
    <div className="section-inner">
      <p className="section-kicker">Education</p>
      <h2 className="section-title">Academic grounding that supports product thinking and engineering depth.</h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.degree} className="paper-card p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white">
              <GraduationCap size={18} className="text-[var(--accent-deep)]" />
            </div>
            <h3 className="mt-5 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.05em]">{item.degree}</h3>
            <p className="mt-2 text-base font-medium text-[var(--ink)]">{item.school}</p>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <div className="inline-flex items-center gap-2"><MapPin size={15} className="text-[var(--accent-deep)]" />{item.place}</div>
              <div className="inline-flex items-center gap-2"><CalendarRange size={15} className="text-[var(--accent-deep)]" />{item.time}</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => <span key={tag} className="paper-chip px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-deep)]">{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
