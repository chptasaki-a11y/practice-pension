import { useState, useEffect } from 'react';

// ナビゲーションの配列を左右に分割
const leftLinks = [
  { href: '#about', label: 'About' },
  { href: '#rooms', label: 'rooms' },
  { href: '#facilities', label: 'facilities' },
];

const rightLinks = [
  { href: '#dishes', label: 'dishes' },
  { href: '#access', label: 'access' },
  { href: '#reservation', label: 'reservation' },
];

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
      {/* 変更点: md:grid-cols-[1fr_auto_1fr] を指定し、
        ロゴ周りに固定の隙間 (gap-x-8 lg:gap-x-12) を設けています。
      */}
      <nav className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 lg:gap-x-12 px-6 md:px-10 lg:px-16 h-[72px]">
        
        {/* Desktop Left Nav */}
        {/* 変更点: justify-end を使用し、リンクを右側（ロゴ側）に寄せています */}
        <div className="hidden md:flex items-center justify-end gap-6 lg:gap-8">
          {leftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-base font-heading font-bold text-foreground-700 hover:text-primary-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center justify-start md:justify-center gap-2 group"
        >
          <span className="font-heading text-2xl md:text-[28px] font-bold text-foreground-950 tracking-tight whitespace-nowrap cursor-pointer">
            Auberge Märchen
          </span>
        </a>

        {/* Desktop Right Nav & Mobile hamburger */}
        {/* 変更点: PC時は justify-start (左/ロゴ寄せ)、モバイル時は justify-end (右端寄せ) に切り替え */}
        <div className="flex items-center justify-end md:justify-start">
          
          {/* Desktop Right Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {rightLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-heading font-bold text-foreground-700 hover:text-primary-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground-950 cursor-pointer"
            aria-label="メニュー"
          >
            <i className={`w-6 h-6 flex items-center justify-center ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background-50/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-background-200/60">
          {[...leftLinks, ...rightLinks].map((link) => (
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
        </div>
      </div>
    </header>
  );
}