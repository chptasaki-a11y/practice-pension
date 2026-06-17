import { useState, useEffect } from 'react';
import { navLinks } from '@/mocks/homeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-[72px]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2 group"
        >
          <span className="font-heading text-2xl md:text-[28px] font-bold text-foreground-950 tracking-tight whitespace-nowrap cursor-pointer">
            Auberge Märchen
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-foreground-700 hover:text-primary-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#reservation');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-500 text-background-50 text-sm font-semibold hover:bg-accent-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calendar-check-line w-4 h-4 flex items-center justify-center"></i>
            ご予約
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground-950 cursor-pointer"
          aria-label="メニュー"
        >
          <i className={`w-6 h-6 flex items-center justify-center ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background-50/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-background-200/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="py-3 text-sm font-medium text-foreground-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#reservation');
            }}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent-500 text-background-50 text-sm font-semibold hover:bg-accent-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calendar-check-line w-4 h-4 flex items-center justify-center"></i>
            ご予約
          </a>
        </div>
      </div>
    </header>
  );
}