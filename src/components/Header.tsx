import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between rounded-full border border-[rgba(22,26,23,0.08)] bg-[rgba(245,243,238,0.88)] px-4 py-3 shadow-[0_16px_30px_rgba(30,36,32,0.08)] backdrop-blur-xl sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
          aria-label="Go to top"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-bold text-white">
            R
          </span>
          <span className="font-['Space_Grotesk'] text-lg font-bold tracking-[-0.04em]">
            ramesh.
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('#contact')}
            className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-deep)]"
          >
            Let's Talk
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(22,26,23,0.08)] bg-white/70 text-[var(--ink)] md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[28px] border border-[rgba(22,26,23,0.08)] bg-[rgba(245,243,238,0.94)] p-4 shadow-[0_16px_30px_rgba(30,36,32,0.08)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-[var(--muted)] transition hover:bg-white hover:text-[var(--ink)]"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
