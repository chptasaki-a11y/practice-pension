import { useScrollReveal } from '@/hooks/useScrollReveal';
import { facilities } from '@/mocks/homeData';

export default function FacilitiesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="facilities" className="relative z-10 pt-20 md:pt-36 pb-0">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-14 md:pb-10">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-14 md:mb-18`}
        >
          <div className="relative inline-block ">
            <h2 className="relative z-10 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
              設備とサービス
            </h2>
            <p
              className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent-400 whitespace-nowrap leading-none absolute left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none"
              style={{ bottom: '100%', marginBottom: '-0.5em' }}
              aria-hidden
            >
              Facilities & Services
            </p>
          </div>
          <p className="mt-4 text-foreground-500 text-sm max-w-md mx-auto">
            心地よいご滞在を支える、館内の設備とサービスのご案内です。
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left: Large image card */}
          <div
            className="scroll-reveal w-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative rounded-3xl overflow-hidden h-[360px] md:h-[480px] group cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Elegant%20European%20style%20inn%20lobby%20with%20grand%20fireplace%20and%20comfortable%20seating%2C%20warm%20ambient%20lighting%2C%20antique%20furniture%20and%20bookshelves%2C%20cream%20and%20beige%20tones%2C%20cozy%20fairy%20tale%20atmosphere%2C%20high%20ceilings%20with%20wooden%20beams%2C%20welcoming%20and%20intimate%20space%2C%20high%20quality%20interior%20photography&width=900&height=1100&seq=facility-lobby-2026-d1&orientation=portrait"
                alt="館内ラウンジ"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground-950/60 to-transparent">
                <span className="text-background-50 text-lg font-heading font-semibold">暖炉ラウンジ</span>
                <p className="text-background-50/80 text-sm mt-1">くつろぎの共有スペース</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facility icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-14">
          {facilities.map((item, idx) => (
            <div
              key={item.label}
              className="scroll-reveal flex flex-col items-center text-center p-5 rounded-2xl bg-background-50 hover:bg-background-100 transition-colors duration-300 cursor-default"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + idx * 0.08}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + idx * 0.08}s`,
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-3">
                <i className={`${item.icon} text-primary-500 text-xl w-5 h-5 flex items-center justify-center`}></i>
              </div>
              <p className="text-xm font-semibold text-foreground-950 mb-1">{item.label}</p>
              <p className="text-xs text-foreground-400">{item.description}</p>
            </div>
          ))}
        </div>

      </div>


      <div className="flex flex-col gap-2 mt-14 md:mt-20">
          <div className="h-px bg-foreground-300/40" />
          <div className="h-px bg-foreground-300/40" />
        </div>
    </section>
  );
}