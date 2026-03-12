import aws from '../assets/aws.png';
import docker from '../assets/icons8-docker-48.png';
import flutter from '../assets/icons8-flutter-48.png';
import javaIcon from '../assets/icons8-java-48.png';
import mongo from '../assets/icons8-mongodb-48.png';
import next from '../assets/icons8-nextjs-48.png';
import node from '../assets/icons8-node-js-48.png';
import postman from '../assets/icons8-postman-inc-48.png';
import python from '../assets/icons8-python-48.png';
import react from '../assets/icons8-react-48 (1).png';
import spring from '../assets/icons8-spring-boot-48.png';
import typeScript from '../assets/icons8-typescript-48 (1).png';

const groups = [
  {
    title: 'Build Products',
    text: 'Frontend, backend, and mobile tools I rely on most.',
    items: [
      ['React', react], ['Next.js', next], ['Node.js', node], ['Spring Boot', spring],
      ['Flutter', flutter], ['TypeScript', typeScript], ['Java', javaIcon], ['Python', python],
    ],
  },
  {
    title: 'Ship and Operate',
    text: 'Platform tools for APIs, data, deployment, and workflow.',
    items: [
      ['AWS', aws], ['Docker', docker], ['MongoDB', mongo], ['Postman', postman],
    ],
  },
] as const;

const TechStack = () => (
  <section id="skills" className="section-wrap">
    <div className="section-inner">
      <p className="section-kicker">Capabilities</p>
      <h2 className="section-title">A practical toolkit for product-focused engineering.</h2>
      <p className="section-copy">I work across UI, backend services, databases, and delivery workflows with an emphasis on maintainable software.</p>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {groups.map((group) => (
          <article key={group.title} className="paper-card p-6 sm:p-8">
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.05em]">{group.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{group.text}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map(([name, icon]) => (
                <div key={name} className="rounded-[24px] border border-[rgba(22,26,23,0.08)] bg-white/70 px-4 py-4 transition hover:-translate-y-1 hover:border-[rgba(111,199,174,0.8)]">
                  <img src={icon} alt={name} className="h-10 w-10 object-contain" />
                  <p className="mt-3 text-sm font-medium text-[var(--ink)]">{name}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
