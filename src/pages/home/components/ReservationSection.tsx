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
    <section id="reservation" className="py-20 md:py-28 bg-background-100">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-14 md:mb-18`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
            ご予約
          </h2>
          <p className="text-foreground-500 text-sm mt-3 max-w-md mx-auto">
            お電話にてご予約を承っております。お気軽にお問い合わせください。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Phone Card */}
          <div className="w-full lg:w-[55%]">
            <div
              className="scroll-reveal rounded-2xl bg-primary-500 text-background-50 p-8 md:p-10 h-full flex flex-col justify-center items-center text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-background-50/15 flex items-center justify-center mb-5">
                <i className="ri-phone-line text-background-50 text-2xl w-7 h-7 flex items-center justify-center"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">お電話でのご予約</h3>
              <p className="text-background-50/80 text-sm mb-4">お気軽にお問い合わせください</p>
              <a
                href="tel:0269-XX-XXXX"
                className="text-3xl md:text-4xl font-bold tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
              >
                0269-XX-XXXX
              </a>
              <p className="text-background-50/70 text-xs mt-4">受付時間 9:00〜20:00（年中無休）</p>
            </div>
          </div>

          {/* Reservation Info + SNS */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {/* ご予約について */}
            <div
              className="scroll-reveal rounded-2xl bg-background-50 p-6 md:p-8 flex-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              }}
            >
              <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-4">ご予約について</h3>
              <ul className="space-y-3 text-sm text-foreground-500">
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-line text-primary-400 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                  チェックイン 15:00 / チェックアウト 11:00
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-line text-primary-400 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                  キャンセルは3日前まで無料
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-line text-primary-400 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                  お支払いは現金またはクレジットカード
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-line text-primary-400 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                  ペット同伴不可（介助犬を除く）
                </li>
              </ul>
            </div>

            {/* SNS */}
            <div
              className="scroll-reveal rounded-2xl bg-background-50 p-6 md:p-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              }}
            >
              <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-4">SNS</h3>
              <p className="text-sm text-foreground-500 mb-4">
                最新情報はSNSでも発信中です
              </p>
              <div className="flex gap-3">
                {snsLinks.map((sns) => (
                  <a
                    key={sns.name}
                    href={sns.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-background-100 hover:bg-accent-100 flex items-center justify-center transition-colors duration-300 cursor-pointer group"
                    aria-label={sns.name}
                  >
                    <i className={`${sns.icon} text-foreground-500 group-hover:text-accent-500 text-lg w-5 h-5 flex items-center justify-center transition-colors duration-300`}></i>
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