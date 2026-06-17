import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="py-20 md:py-28 bg-background-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} flex flex-col lg:flex-row gap-12 lg:gap-20 items-center`}
        >
          {/* Left: Image */}
          <div className="w-full lg:w-[38%] flex-shrink-0">
            <div className="relative">
              <div className="mt-6 rounded-3xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Elegant%20European%20style%20inn%20interior%20with%20wooden%20staircase%20and%20chandelier%2C%20warm%20cozy%20lounge%20area%20with%20fireplace%2C%20antique%20furniture%2C%20soft%20ambient%20lighting%2C%20cream%20and%20beige%20color%20palette%2C%20romantic%20fairy%20tale%20atmosphere%2C%20vintage%20decor%2C%20high%20ceilings%2C%20welcoming%20and%20intimate%20space%2C%20editorial%20interior%20photography&width=700&height=900&seq=about-interior-2026-b2&orientation=portrait"
                  alt="館内ラウンジ"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[62%]">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2] mb-5">
              日常を離れ、
              <br />
              物語の中へ
              <br />
              誘う宿
            </h2>
            <p className="text-foreground-500 text-sm md:text-base leading-relaxed mb-4 max-w-lg">
              オーベルジュ・メルヘンは、信州の静かな森に抱かれた小さな洋館です。
            </p>
            <p className="text-foreground-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              築80年の英国風建築を丁寧にリノベーションし、古き良き時代の趣きと現代の快適さを融合させました。
              暖炉の灯り、アンティークの調度品、窓辺に広がる四季の風景——
              訪れるたびに新しい発見がある、そんな特別な場所でありたいと願っています。
              木洩れ日が差し込む静かな森の中、欧風の趣き漂う館で、日常を忘れるひとときをお過ごしください。
            おいしいお料理と、あたたかなおもてなしがあなたをお待ちしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}