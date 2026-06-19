import { navLinks } from '@/mocks/homeData';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-accent-700 text-background-50">
      {/* Upper section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18 flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="mb-10 flex flex-col items-center">
          <p className="font-heading text-3xl font-bold tracking-tight mb-4">
            Auberge Märchen
          </p>
          <div className="w-8 h-[2px] bg-accent-500 mb-5"></div>
        </div>

        {/* Navigation Links */}
        <div className="mb-12 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-background-50/70 text-sm hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <ul className="space-y-2 text-background-50/70 text-sm">
            <li>TEL: 0269-XX-XXXX</li>
            <li>受付: 9:00〜20:00</li>
            <li>チェックイン: 15:00～20:00</li>
            <li>チェックアウト: ～11:00</li>
            <li>〒389-2502</li>
            <li>長野県下高井郡野沢温泉村豊郷123456</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-6 border-t border-background-50/10 flex flex-col items-center justify-center">
        <p className="text-background-50/40 text-xs">
          &copy; {new Date().getFullYear()} Auberge Märchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}