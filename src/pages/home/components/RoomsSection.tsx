import { useScrollReveal } from '@/hooks/useScrollReveal';
import { rooms } from '@/mocks/homeData';

const roomImages: Record<string, string> = {
  'room-suite-01': 'https://readdy.ai/api/search-image?query=Luxurious%20European%20style%20suite%20room%20with%20large%20bay%20window%20overlooking%20forest%2C%20antique%20furniture%2C%20warm%20cream%20and%20beige%20tones%2C%20soft%20natural%20lighting%2C%20cozy%20fireplace%2C%20elegant%20four%20poster%20bed%2C%20fairy%20tale%20atmosphere%2C%20romantic%20and%20intimate%20interior%2C%20high%20quality%20interior%20photography&width=800&height=560&seq=room-suite-2026-c1&orientation=landscape',
  'room-deluxe-02': 'https://readdy.ai/api/search-image?query=Elegant%20deluxe%20hotel%20room%20in%20European%20cottage%20style%2C%20twin%20beds%20with%20white%20linen%2C%20warm%20beige%20walls%2C%20vintage%20wooden%20furniture%2C%20soft%20curtains%2C%20cozy%20seating%20area%2C%20gentle%20sunlight%20through%20window%2C%20romantic%20fairy%20tale%20vibe%2C%20peaceful%20and%20inviting%2C%20high%20quality%20interior%20photography&width=800&height=560&seq=room-deluxe-2026-c2&orientation=landscape',
  'room-standard-03': 'https://readdy.ai/api/search-image?query=Cozy%20compact%20European%20style%20guest%20room%20with%20double%20bed%2C%20warm%20cream%20walls%2C%20small%20antique%20desk%2C%20soft%20bedding%2C%20vintage%20lamp%2C%20wooden%20floor%2C%20gentle%20ambient%20light%2C%20charming%20and%20intimate%20atmosphere%2C%20fairy%20tale%20cottage%20aesthetic%2C%20high%20quality%20interior%20photography&width=800&height=560&seq=room-standard-2026-c3&orientation=landscape',
};

export default function RoomsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="rooms" className="relative z-10 pb-20 md:pb-28 pt-0">
 <div className="flex flex-col gap-2 mb-10 md:mb-14">
        <div className="h-px bg-foreground-300/40" />
        <div className="h-px bg-foreground-300/40" /></div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-14 md:pt-20">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} flex flex-col items-center text-center mb-14 md:mb-18`}
        >
          <div className="relative inline-block ">
            <h2 className="relative z-10 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
              お部屋とご料金
            </h2>
            <p
              className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent-400 whitespace-nowrap leading-none absolute left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none"
              style={{ bottom: '100%', marginBottom: '-0.5em' }}
              aria-hidden
            >
              Rooms & Price
            </p>
          </div>
          <p className="mt-4 text-foreground-500 text-sm max-w-md">
            全3タイプのお部屋から、お好みのスタイルを<br />お選びいただけます。
          </p>
        </div>

        {/* Room cards */}
        <div className="flex flex-col gap-8 md:gap-12">
          {rooms.map((room, idx) => {
            const isFeatured = room.featured;
            return (
              <div
                key={room.id}
                className="scroll-reveal group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col md:flex-row bg-background-50 text-foreground-950"
                style={{
                  transitionDelay: `${idx * 0.15}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* 左：画像 */}
                <div className="relative overflow-hidden w-full md:w-[45%] lg:w-[40%] flex-shrink-0">
                  <img
                    src={roomImages[room.imageSeq]}
                    alt={room.name}
                    className="w-full h-full min-h-[220px] md:min-h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Status label */}
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent-500 text-background-50"
                  >
                    <i className="w-3 h-3 flex items-center justify-center ri-star-fill"></i>
                    {isFeatured ? 'おすすめ' : '定番'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center w-full md:w-[55%] lg:w-[60%]">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold mb-2 text-foreground-950">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-foreground-400">
                    <span className="inline-flex items-center gap-1">
                      <i className="ri-user-line w-3.5 h-3.5 flex items-center justify-center"></i>
                      {room.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <i className="ri-aspect-ratio-line w-3.5 h-3.5 flex items-center justify-center"></i>
                      {room.size}
                    </span>

                  </div>
                  <p className="text-xs leading-relaxed mt-4 text-primary-600">
                    アメニティ
                  </p>
                  <p className="text-[10px] leading-relaxed mb-4 text-foreground-500">
                    {room.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-background-200 text-right">
                    <span className="font-heading text-3xl md:text-4xl font-bold text-primary-500">
                      {room.price}
                    </span>
                    <span className="text-xs ml-1 text-foreground-400">
                      {room.per}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="scroll-reveal mt-12 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        >
          <p className="text-foreground-400 text-xs text-left min-[455px]:text-center">
            ※ 表示価格は税込です。別途入湯税（お一人様150円）を頂戴いたします。
            <br />
            ※ お一人様でのご利用は、各プラン+5,000円の追加料金となります。
          </p>
        </div>
      </div>
    </section>
  );
}