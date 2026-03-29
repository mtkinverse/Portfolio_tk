import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { label: 'About',      href: '#hero'       },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Tools',      href: '#tools'      },
  { label: 'Projects',   href: '#projects'   },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="bg-bgTheme-dark w-full sticky top-0 z-50 shadow-md shadow-black/30">
      <nav className="flex items-center justify-between px-4 py-3 max-w-site mx-auto">

        {/* Brand */}
        <a href="#hero" className="text-white font-bold text-lg hover:text-bgTheme-accent transition-colors duration-200">
          Muhammad Taha Khan
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-bgTheme-accent font-semibold'
                      : 'text-textTheme-muted hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Contact info (desktop) */}
        <div className="hidden md:flex items-center gap-4 text-sm text-textTheme-muted">
          <a href="tel:+923062992398" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <FaPhone size={12} /> +92 306 2992398
          </a>
          <a href="mailto:mtkinverse@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <FaEnvelope size={12} /> mtkinverse@gmail.com
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-bgTheme-card border-t border-bgTheme-light/20 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-textTheme-muted hover:text-white text-sm py-1 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-bgTheme-light/20 flex flex-col gap-2 text-xs text-textTheme-muted">
            <a href="tel:+923062992398" className="flex items-center gap-2 hover:text-white">
              <FaPhone size={11} /> +92 306 2992398
            </a>
            <a href="mailto:mtkinverse@gmail.com" className="flex items-center gap-2 hover:text-white">
              <FaEnvelope size={11} /> mtkinverse@gmail.com
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
