import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cuisineImages } from '@/mocks/homeData';
import background from '@/assets/menu-background.png';

const cuisineSrcs: Record<string, string> = {
  'cuisine-01': 'https://readdy.ai/api/search-image?query=Elegant%20appetizer%20platter%20on%20white%20ceramic%20plate%2C%20fine%20dining%20presentation%2C%20fresh%20seasonal%20vegetables%20and%20herbs%2C%20warm%20candlelit%20table%20setting%2C%20soft%20golden%20lighting%2C%20European%20country%20inn%20style%2C%20cream%20linen%20tablecloth%2C%20gourmet%20food%20photography&width=600&height=420&seq=cuisine-01-2026-e1&orientation=landscape',
  'cuisine-02': 'https://readdy.ai/api/search-image?query=Beautifully%20plated%20main%20course%20dish%20with%20roasted%20meat%20and%20seasonal%20vegetables%2C%20fine%20dining%20restaurant%20presentation%2C%20warm%20evening%20ambiance%2C%20elegant%20tableware%2C%20soft%20candlelight%2C%20European%20country%20inn%20style%2C%20gourmet%20cuisine%20photography&width=600&height=420&seq=cuisine-02-2026-e2&orientation=landscape',
  'cuisine-03': 'https://readdy.ai/api/search-image?query=Artistic%20dessert%20plate%20with%20fruit%20tart%20and%20cream%2C%20elegant%20plating%2C%20edible%20flowers%20garnish%2C%20warm%20afternoon%20light%2C%20vintage%20silverware%2C%20cream%20tablecloth%2C%20cozy%20European%20inn%20atmosphere%2C%20pastry%20dessert%20food%20photography&width=600&height=420&seq=cuisine-03-2026-e3&orientation=landscape',
  'cuisine-04': 'https://readdy.ai/api/search-image?query=Beautiful%20continental%20breakfast%20table%20with%20fresh%20bread%20pastries%20fruit%20and%20coffee%2C%20morning%20sunlight%20through%20window%2C%20elegant%20table%20setting%2C%20cream%20linen%2C%20vintage%20teacups%2C%20warm%20and%20inviting%2C%20European%20country%20inn%20style%2C%20food%20photography&width=600&height=420&seq=cuisine-04-2026-e4&orientation=landscape',
  'cuisine-05': 'https://readdy.ai/api/search-image?query=Elegant%20afternoon%20tea%20set%20with%20vintage%20teapot%20and%20fine%20china%20cups%2C%20small%20pastries%20and%20sandwiches%2C%20soft%20natural%20light%2C%20lace%20tablecloth%2C%20fresh%20flowers%2C%20cozy%20European%20cottage%20vibe%2C%20warm%20and%20romantic%20atmosphere%2C%20food%20photography&width=600&height=420&seq=cuisine-05-2026-e5&orientation=landscape',
};

export default function CuisineSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="dishes" className="py-20 md:py-40 bg-background-50 relative">
      {/* 変更点: hidden md:block を追加し、モバイル版で背景を非表示に */}
      <img
        src={background}
        alt="お料理背景"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-top"
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-10 md:mb-14`}
        >
          <div className="relative inline-block">
            <h2 className="relative z-10 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
              お料理
            </h2>
            <p
              className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent-300 whitespace-nowrap leading-none absolute left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none"
              style={{ bottom: '100%', marginBottom: '-0.5em' }}
              aria-hidden
            >
              Dishes
            </p>
          </div>
          <p className="mt-4 text-foreground-500 text-sm max-w-lg md:max-w-xl mx-auto">
            夕食は、信州牛や旬の野菜をふんだんに使った全7品のディナーコース。<br />
            朝食は、焼きたてのパンと高原の卵や自家製ジャムをお楽しみいただけます。
          </p>
        </div>

        {/* Image grid: 上3枚・下2枚 */}
        <div
          className="scroll-reveal flex flex-col items-center gap-4 md:gap-6 mt-9"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          {/* 上段：3枚 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
            {cuisineImages.slice(0, 3).map((img) => (
              <div
                key={img.seq}
                className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={cuisineSrcs[img.seq]}
                  alt={img.alt}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 pt-6 pointer-events-none">
                  <p className="text-sm md:text-xs lg:text-base text-white text-center font-heading drop-shadow-md">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 下段：2枚（中央寄せ） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:w-2/3">
            {cuisineImages.slice(3, 5).map((img) => (
              <div
                key={img.seq}
                className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={cuisineSrcs[img.seq]}
                  alt={img.alt}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 pt-6 pointer-events-none">
                  <p className="text-sm md:text-xs lg:text-base text-white text-center font-heading drop-shadow-md">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div
          className="scroll-reveal mt-14 text-center max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
        </div>
      </div>
    </section>
  );
}