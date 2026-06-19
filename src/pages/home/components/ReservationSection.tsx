import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ReservationSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const snsLinks = [
    { name: 'Instagram', icon: 'ri-instagram-line', url: '#' },
    { name: 'Facebook', icon: 'ri-facebook-line', url: '#' },
    { name: 'X', icon: 'ri-twitter-x-line', url: '#' },
    { name: 'LINE', icon: 'ri-line-line', url: '#' },
  ];

  return (
    <section id="reservation" className="py-20 md:py-28 bg-primary-700 md:scroll-mt-14">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-12 md:mb-16`}
        >
          <div className="relative inline-block ">
            <h2 className="relative z-10 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 leading-[1.2]">
              ご予約
            </h2>
            <p
              className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent-600 whitespace-nowrap leading-none absolute left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none"
              style={{ bottom: '100%', marginBottom: '-0.5em' }}
              aria-hidden
            >
              Reservation
            </p>
          </div>
          <p className="mt-4 text-background-50/80 text-sm max-w-md mx-auto">
            心ほどける休日への扉。<br className="hidden sm:block" />
            お電話にてご予約・お問い合わせを承っております。
          </p>
        </div>

        {/* コンテンツエリア */}
        <div className="flex flex-col items-center gap-6 md:gap-8">

          {/* Phone Card (Main CTA) */}
          <div className="w-full max-w-[600px]">
            <div
              className="scroll-reveal rounded-2xl bg-background-50/5 border border-background-50/10 text-background-50 p-10 h-full flex flex-col justify-center items-center text-center backdrop-blur-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
              }}
            >
              <div className="w-14 h-14 rounded-full bg-background-50/15 flex items-center justify-center mb-6">
                <i className="ri-phone-line text-background-50 text-xl flex items-center justify-center"></i>
              </div>
              <h3 className="font-heading text-lg font-medium mb-2 tracking-widest">お電話でのご予約</h3>
              <a
                href="tel:0269-XX-XXXX"
                className="text-4xl md:text-5xl font-bold tracking-wider hover:text-accent-400 transition-colors duration-300 cursor-pointer my-4 font-heading"
              >
                0269-XX-XXXX
              </a>
              <p className="text-background-50/70 text-xs tracking-wider">受付時間 9:00〜20:00（年中無休）</p>
            </div>
          </div>

          {/* Info & SNS Card */}
          <div className="w-full max-w-[600px]">
            <div
              className="scroll-reveal rounded-2xl bg-background-50/5 border border-background-50/10 p-10 md:p-12 flex flex-col items-center text-center backdrop-blur-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              }}
            >
              {/* ご予約について */}
              <h3 className="font-heading text-lg font-semibold text-background-50 mb-6 tracking-widest">ご案内</h3>
              <ul className="space-y-4 text-sm text-background-50/80 inline-block text-left w-full max-w-sm">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-accent-400 text-lg leading-none mt-[2px]"></i>
                  <span>チェックイン 15:00 / チェックアウト 11:00</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-accent-400 text-lg leading-none mt-[2px]"></i>
                  <span>キャンセルは3日前まで無料</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-accent-400 text-lg leading-none mt-[2px]"></i>
                  <span>お支払いは現金またはクレジットカード</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-accent-400 text-lg leading-none mt-[2px]"></i>
                  <span>ペット同伴不可（介助犬を除く）</span>
                </li>
              </ul>

              {/* 区切り線 */}
              <div className="w-10 h-[2px] bg-accent-400 my-10 opacity-60"></div>

              {/* SNS */}
              <h3 className="font-heading text-sm font-semibold text-background-50/60 mb-5 tracking-widest uppercase">Official SNS</h3>
              <div className="flex justify-center gap-4">
                {snsLinks.map((sns) => (
                  <a
                    key={sns.name}
                    href={sns.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-background-50/20 hover:border-accent-400 hover:bg-accent-400/10 flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label={sns.name}
                  >
                    <i className={`${sns.icon} text-background-50/80 group-hover:text-accent-400 text-xl transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}