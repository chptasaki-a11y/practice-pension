import { navLinks } from '@/mocks/homeData';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-background-50">
      {/* Upper navigation */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-2xl font-bold tracking-tight mb-1">Auberge</p>
            <p className="font-heading text-2xl font-bold tracking-tight mb-3">Märchen</p>
            <div className="w-10 h-[2px] bg-accent-500 mb-4"></div>
            <p className="text-background-50/60 text-xs leading-relaxed">
              信州の森に佇む、
              <br />
              メルヘンな洋風民宿。
              <br />
              心ほどける休日を。
            </p>
          </div>

          {/* Nav columns */}
          <div>
            <h5 className="text-sm font-semibold text-background-50 mb-3">メニュー</h5>
            <div className="w-8 h-[2px] bg-accent-500 mb-4"></div>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-background-50/60 text-xs hover:text-background-50 transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-background-50 mb-3">リンク</h5>
            <div className="w-8 h-[2px] bg-accent-500 mb-4"></div>
            <ul className="space-y-2.5">
              {navLinks.slice(3, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-background-50/60 text-xs hover:text-background-50 transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-background-50 mb-3">お問い合わせ</h5>
            <div className="w-8 h-[2px] bg-accent-500 mb-4"></div>
            <ul className="space-y-2.5 text-background-50/60 text-xs">
              <li>TEL: 0269-XX-XXXX</li>
              <li>受付: 9:00〜20:00</li>
              <li>〒389-2502</li>
              <li>長野県下高井郡</li>
              <li>野沢温泉村豊郷1234</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background-50/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background-50/40 text-xs">
            &copy; {new Date().getFullYear()} Auberge Märchen. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-background-50/10 flex items-center justify-center hover:bg-accent-500/30 transition-colors duration-300 cursor-pointer" aria-label="Instagram">
              <i className="ri-instagram-line text-background-50/70 text-sm w-4 h-4 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-background-50/10 flex items-center justify-center hover:bg-accent-500/30 transition-colors duration-300 cursor-pointer" aria-label="Facebook">
              <i className="ri-facebook-line text-background-50/70 text-sm w-4 h-4 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-background-50/10 flex items-center justify-center hover:bg-accent-500/30 transition-colors duration-300 cursor-pointer" aria-label="Twitter X">
              <i className="ri-twitter-x-line text-background-50/70 text-sm w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}