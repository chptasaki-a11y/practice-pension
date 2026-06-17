import { useScrollReveal } from '@/hooks/useScrollReveal';
import { accessInfo } from '@/mocks/homeData';

export default function AccessSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="access" className="py-20 md:py-28 bg-background-50">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-14 md:mb-18`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
            アクセス
          </h2>
          <p className="mt-4 text-foreground-500 text-sm max-w-md mx-auto">
            信州の静かな森の中、日常から少し離れた場所に佇んでいます。
          </p>
        </div>

        {/* Map */}
        <div
          className="scroll-reveal rounded-2xl overflow-hidden mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.123456789!2d138.456789!3d36.856789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzI0LjQiTiAxMzjCsDI3JzMzLjQiRQ!5e0!3m2!1sja!2sjp!4v1687000000000"
            width="100%"
            height="400"
            className="border-0 w-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="オーベルジュ・メルヘン アクセスマップ"
          ></iframe>
        </div>

        {/* Access info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Address */}
          <div
            className="scroll-reveal rounded-2xl bg-background-100 p-6 md:p-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
              <i className="ri-map-pin-line text-primary-500 text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h4 className="font-heading text-lg font-semibold text-foreground-950 mb-2">住所</h4>
            <p className="text-foreground-500 text-sm leading-relaxed">{accessInfo.address}</p>
          </div>

          {/* Train */}
          <div
            className="scroll-reveal rounded-2xl bg-background-100 p-6 md:p-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
              <i className="ri-train-line text-primary-500 text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h4 className="font-heading text-lg font-semibold text-foreground-950 mb-2">電車でお越しの方</h4>
            <p className="text-foreground-500 text-sm leading-relaxed">{accessInfo.train}</p>
          </div>

          {/* Car */}
          <div
            className="scroll-reveal rounded-2xl bg-background-100 p-6 md:p-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
              <i className="ri-car-line text-primary-500 text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h4 className="font-heading text-lg font-semibold text-foreground-950 mb-2">お車でお越しの方</h4>
            <p className="text-foreground-500 text-sm leading-relaxed">{accessInfo.car}</p>
          </div>
        </div>

        {/* Bus info */}
        <div
          className="scroll-reveal mt-6 rounded-2xl bg-accent-50 p-5 md:p-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
          }}
        >
          <div className="flex items-center gap-3">
            <i className="ri-bus-line text-accent-600 text-lg w-5 h-5 flex items-center justify-center"></i>
            <div>
              <span className="text-sm font-semibold text-foreground-950">路線バス：</span>
              <span className="text-sm text-foreground-500">{accessInfo.bus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}