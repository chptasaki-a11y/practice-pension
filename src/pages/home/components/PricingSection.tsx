import { useScrollReveal } from '@/hooks/useScrollReveal';
import { pricingPlans } from '@/mocks/homeData';

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background-100">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-14 md:mb-18`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
            料金表
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold">
            <i className="ri-star-fill w-3.5 h-3.5 flex items-center justify-center"></i>
            おすすめプラン
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`scroll-reveal rounded-2xl p-6 md:p-8 relative transition-all duration-500 ${
                plan.recommended
                  ? 'bg-primary-500 text-background-50 ring-4 ring-primary-300/40 -mt-2 md:-mt-4'
                  : 'bg-background-50 text-foreground-950'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.15}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.15}s`,
              }}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-500 text-background-50 text-xs font-bold whitespace-nowrap">
                  一番人気
                </span>
              )}

              <h3
                className={`font-heading text-xl md:text-2xl font-semibold mb-1 ${
                  plan.recommended ? 'text-background-50' : 'text-foreground-950'
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-5 mb-6">
                <span
                  className={`font-heading text-3xl md:text-4xl font-bold ${
                    plan.recommended ? 'text-background-50' : 'text-primary-500'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${plan.recommended ? 'text-background-50/70' : 'text-foreground-400'}`}
                >
                  {plan.per}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 text-sm ${
                      plan.recommended ? 'text-background-50/90' : 'text-foreground-600'
                    }`}
                  >
                    <i
                      className={`ri-check-line w-4 h-4 flex items-center justify-center flex-shrink-0 ${
                        plan.recommended ? 'text-accent-400' : 'text-primary-400'
                      }`}
                    ></i>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  plan.recommended
                    ? 'bg-accent-500 text-background-50 hover:bg-accent-600'
                    : 'bg-primary-500 text-background-50 hover:bg-primary-600'
                }`}
              >
                <i className="ri-calendar-check-line w-4 h-4 flex items-center justify-center"></i>
                このプランで予約
              </a>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div
          className="scroll-reveal mt-12 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        >
          <p className="text-foreground-400 text-xs">
            ※ 表示価格は税込です。別途入湯税（お一人様150円）を頂戴いたします。
            <br />
            ※ お一人様でのご利用は、各プラン+5,000円の追加料金となります。
          </p>
        </div>
      </div>
    </section>
  );
}