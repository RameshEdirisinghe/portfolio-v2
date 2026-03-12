import { ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import heroPerson from '../assets/heroPerson.png';
import resume from '../assets/Ramesh-Edirisinghe-CV-Jul-2025.pdf';
import awsLogo from '../assets/aws.png';
import dockerLogo from '../assets/docker1.png';
import githubLogo from '../assets/github.png';
import postmanLogo from '../assets/postman.png';

const heroMetrics = [
  { label: 'Years Building', value: '3+' },
  { label: 'Projects Delivered', value: '20+' },
  { label: 'Primary Focus', value: 'Full Stack' },
];

const partnerLogos = [
  { src: awsLogo, alt: 'Amazon Web Services' },
  { src: dockerLogo, alt: 'Docker' },
  { src: githubLogo, alt: 'GitHub' },
  { src: postmanLogo, alt: 'Postman' },
];

const About = () => {
  return (
    <section id="about" className="section-wrap overflow-hidden pt-10 sm:pt-14">
      <div className="section-inner">
        <div className="relative overflow-hidden rounded-[36px] px-4 pb-8 pt-6 sm:px-8 lg:px-12 lg:pb-12 lg:pt-8">
          <div className="ornament-arch -left-16 bottom-0 h-40 w-40 sm:h-56 sm:w-56" />
          <div className="ornament-arch -right-8 top-12 h-48 w-28 rotate-180 sm:h-64 sm:w-40" />
          <div className="pointer-events-none absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--lavender)] blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[120px_minmax(0,1fr)_300px]">
            <div className="hidden items-center justify-center lg:flex">
              <div className="flex flex-col gap-6 text-[var(--muted)]">
                <a
                  href="https://www.linkedin.com/in/ramesh-edirisinghe/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--ink)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/RameshEdirisinghe"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--ink)]"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#contact"
                  className="text-xs font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl]"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="order-2 text-center lg:order-none">
              <p className="section-kicker">Software Engineer</p>
              <div className="mx-auto mb-8 flex max-w-[420px] justify-center lg:hidden">
                <div className="relative w-full max-w-[320px]">
                  <div className="absolute inset-x-6 bottom-0 top-6 rounded-t-[999px] bg-[#cad8d4]" />
                  <img
                    src={heroPerson}
                    alt="Ramesh Edirisinghe"
                    className="relative z-10 mx-auto h-auto max-h-[420px] object-contain drop-shadow-[0_26px_20px_rgba(17,19,17,0.28)]"
                  />
                  <div className="pointer-events-none absolute left-[8%] top-[36%] h-[28%] w-[84%] rounded-[999px] border-2 border-[var(--accent)]" />
                  <div className="pointer-events-none absolute left-[12%] top-[64%] h-[20%] w-[76%] rounded-[999px] border-2 border-[var(--accent)]" />
                </div>
              </div>

              <h1 className="font-['Space_Grotesk'] text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.08em]">
                Ramesh Edirisinghe
              </h1>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--muted)] sm:text-base">
                Full-Stack Engineer // Product-Focused Builder
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I design and ship clean digital products across web, backend, cloud, and mobile
                systems with a bias for clarity, speed, and practical engineering.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={resume}
                  download="Ramesh-Edirisinghe-CV-Jul-2025.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-deep)]"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(22,26,23,0.1)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
                >
                  View Projects
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="mt-10">
                <div className="logo-strip">
                  <div className="hidden min-[520px]:flex items-center justify-between gap-6">
                    {partnerLogos.map((logo) => (
                      <div key={logo.alt} className="logo-chip">
                        <img src={logo.src} alt={logo.alt} className="h-8 w-auto" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="relative min-[520px]:hidden">
                    <div className="logo-marquee">
                      {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                        <div key={`${logo.alt}-${idx}`} className="logo-chip">
                          <img src={logo.src} alt={logo.alt} className="h-7 w-auto" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative ml-auto w-full max-w-[320px]">
                <div className="absolute inset-x-6 bottom-0 top-6 rounded-t-[999px] bg-[#cad8d4]" />
                <img
                  src={heroPerson}
                  alt="Ramesh Edirisinghe portrait"
                  className="relative z-10 mx-auto h-auto max-h-[520px] object-contain drop-shadow-[0_28px_22px_rgba(17,19,17,0.3)]"
                />
                <div className="pointer-events-none absolute left-[6%] top-[34%] h-[28%] w-[88%] rounded-[999px] border-2 border-[var(--accent)]" />
                <div className="pointer-events-none absolute left-[10%] top-[64%] h-[20%] w-[80%] rounded-[999px] border-2 border-[var(--accent)]" />
                <div className="pointer-events-none absolute -right-6 top-16 flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-[rgba(111,199,174,0.25)] text-center text-xs font-bold uppercase tracking-[0.24em] text-[var(--ink)]">
                  Let's Talk
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;