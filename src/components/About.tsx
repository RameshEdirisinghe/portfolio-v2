import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import heroPerson from '../assets/heroPerson.png';
import resume from '../assets/Ramesh-Edirisinghe-CV-Jul-2025.pdf';
import awsLogo from '../assets/aws.png';
import dockerLogo from '../assets/docker1.png';
import githubLogo from '../assets/github.png';
import postmanLogo from '../assets/postman.png';

const partnerLogos = [
  { src: awsLogo, alt: 'Amazon Web Services' },
  { src: dockerLogo, alt: 'Docker' },
  { src: githubLogo, alt: 'GitHub' },
  { src: postmanLogo, alt: 'Postman' },
];

const About = () => {
  return (
    <section id="about" className="overflow-hidden pt-10 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#f7f6f3] px-4 pb-0 pt-6 sm:px-8 lg:px-12 lg:pt-8">

          {/* dotted background */}
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#bdbdbd_0.8px,transparent_0.8px)] [background-size:16px_16px]" />

          {/* ornaments */}
          <div className="pointer-events-none absolute left-8 top-32 h-40 w-40 rounded-full bg-pink-100/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-24 right-20 h-40 w-40 rounded-full bg-purple-100/50 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[90px_minmax(0,1fr)]">

            {/* left social icons */}
            <div className="hidden items-center justify-center lg:flex">
              <div className="flex flex-col gap-6 text-gray-500">
                <a
                  href="https://www.linkedin.com/in/ramesh-edirisinghe/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://github.com/RameshEdirisinghe"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black"
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

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">

              {/* text section */}
              <div className="order-2 text-center lg:order-1">

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#5f6662]">
                  Software Engineer
                </p>

                <h1 className="font-['Space_Grotesk'] text-[clamp(3rem,9vw,6rem)] font-bold leading-[0.9] tracking-[-0.08em] text-[#111]">
                  Ramesh Edirisinghe
                </h1>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-[#5f6662] sm:text-base">
                  Full-Stack Engineer // Product-Focused Builder
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                  <a
                    href={resume}
                    download="Ramesh-Edirisinghe-CV-Jul-2025.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <Download size={18} />
                    Download CV
                  </a>

                  <button
                    onClick={() =>
                      document
                        .querySelector('#projects')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#111] transition hover:border-[#7abfa8] hover:text-[#3f8f74]"
                  >
                    View Projects
                    <ArrowUpRight size={18} />
                  </button>

                </div>
              </div>

              {/* photo section */}
              <div className="order-1 lg:order-2">

                <div className="relative mx-auto w-full max-w-[340px] [mask-image:linear-gradient(to_bottom,black_50%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black_70%,transparent)]">

                  {/* green arch background */}
                  <div className="absolute inset-x-8 top-6 bottom-0 rounded-t-[999px] bg-[#c9dad5]" />

                  {/* floor shadow */}
                  <div className="absolute bottom-2 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/20 blur-xl"></div>

                  {/* photo */}
                  <img
                    src={heroPerson}
                    alt="Ramesh Edirisinghe portrait"
                    className="relative z-10 mx-auto max-h-[520px] object-contain drop-shadow-[0_35px_30px_rgba(0,0,0,0.35)]"
                  />

                  {/* decorative rings */}
                  <div className="pointer-events-none absolute left-[6%] top-[38%] h-[26%] w-[88%] rounded-[999px] border-[2px] border-[#6fc7ae]" />

                  <div className="pointer-events-none absolute left-[10%] top-[64%] h-[18%] w-[80%] rounded-[999px] border-[2px] border-[#6fc7ae]" />

                </div>
              </div>
            </div>
          </div>

          {/* logo bar */}
          <div className="relative z-10 mt-10 sm:mt-14">
            <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#dfe4e1] py-7 sm:py-8">
              <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-evenly gap-x-12 gap-y-6 px-6 sm:gap-x-16 lg:gap-x-24">
                {partnerLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 w-auto sm:h-12"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;