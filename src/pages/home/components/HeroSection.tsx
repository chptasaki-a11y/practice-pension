import { useScrollReveal } from '@/hooks/useScrollReveal';
import hero from '@/assets/hero.png';
import heromb from '@/assets/hero-mb.jpg';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <section id="hero" className="relative z-20 h-[100dvh] bg-background-50 ">

      <div className="absolute top-0 bottom-0 left-0 w-full md:top-0 md:left-auto md:right-0 md:w-[85%] lg:w-[90%] z-0 overflow-hidden ">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background-50/20 to-background-50 md:bg-gradient-to-r md:from-background-50 md:via-background-50/5 md:to-transparent"></div>

        <picture>
          <source media="(min-width: 768px)" srcSet={hero} />
          <img
            src={heromb}
            alt="洋風民宿の外観"
            className="w-full h-full object-cover object-bottom md:object-top"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto flex items-end justify-start  px-8 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-28">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} w-[92%] sm:w-[80%] md:w-[55%] lg:w-[50%] xl:w-[45%]`}
        >
          {/* h1 を基準にするラッパー */}
          <div className="relative">
            <h1 className="relative z-20 font-heading text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] [text-shadow:_0_0_10px_#fff,_0_0_20px_#fff,_0_0_30px_#fff]">
              森の奥に佇む
              <br />
              <span className="italic text-primary-500">メルヘン</span>
              な洋館で
              <br />
              心ほどける休日を
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}