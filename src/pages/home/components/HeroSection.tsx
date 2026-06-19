import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background-50">
      {/* Hero Image — always visible now, full width on mobile, right side on desktop */}
      <div className="w-full h-[55vh] md:h-[65vh] lg:absolute lg:right-0 lg:top-0 lg:w-[58%] lg:h-full">
        {/* Gradient overlay: fades to bottom on mobile, fades to left on desktop */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background-50/5 to-background-50 lg:bg-gradient-to-r lg:from-background-50 lg:via-background-50/20 lg:to-transparent"></div>
        <img
          src="https://readdy.ai/api/search-image?query=Beautiful%20European%20style%20mansion%20in%20a%20peaceful%20forest%20setting%2C%20warm%20fairy%20tale%20atmosphere%2C%20ivy%20covered%20stone%20walls%2C%20soft%20golden%20sunlight%20filtering%20through%20trees%2C%20whimsical%20and%20enchanting%20garden%2C%20storybook%20cottage%20aesthetic%2C%20cream%20and%20warm%20beige%20tones%2C%20romantic%20and%20cozy%20vibe%2C%20high%20quality%20architectural%20photography%20with%20soft%20dreamy%20lighting&width=1200&height=1400&seq=hero-mansion-2026-a1&orientation=portrait"
          alt="洋風民宿の外観"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content — overlays image on mobile, sits left on desktop */}
      <div className="relative z-20 w-full lg:w-[42%] flex items-end lg:items-center px-6 md:px-10 lg:px-16 pt-16 pb-10 md:pb-14 lg:py-32 min-h-screen">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} w-full bg-background-50/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-t-3xl lg:rounded-none px-5 md:px-8 pt-8 md:pt-10 pb-6 md:pb-8 lg:p-0`}
        >
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-primary-500 font-medium mb-4 md:mb-6">
            Welcome to Auberge Märchen
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground-950 leading-[1.15] mb-4 md:mb-6">
            森の奥に佇む
            <br />
            <span className="italic text-primary-500">メルヘン</span>
            な洋館で
            <br />
            心ほどける休日を
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            
          </div>
        </div>
      </div>
    </section>
  );
}