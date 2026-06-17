import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cuisineImages } from '@/mocks/homeData';

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
    <section id="cuisine" className="py-20 md:py-28 bg-background-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? 'is-visible' : ''} text-center mb-10 md:mb-14`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-[1.2]">
            お料理
          </h2>
          <p className="mt-4 text-foreground-500 text-sm max-w-lg mx-auto">
            信州の豊かな恵みを、シェフが心を込めて一皿に。四季の移ろいを感じる本格洋食コースをお楽しみください。
          </p>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-accent-500 text-background-50 text-sm font-semibold hover:bg-accent-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            料金を見る
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
          </a>
        </div>

        {/* Image banner */}
        <div
          className="scroll-reveal flex gap-4 md:gap-6 overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <div className="flex gap-4 md:gap-6 flex-nowrap">
            {cuisineImages.map((img) => (
              <div
                key={img.seq}
                className="flex-shrink-0 w-[260px] md:w-[320px] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={cuisineSrcs[img.seq]}
                  alt={img.alt}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <p className="mt-2 text-xs text-foreground-400 text-center">{img.alt}</p>
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
          <p className="text-foreground-500 text-sm leading-relaxed">
            夕食は信州牛や季節の地野菜をふんだんに使った全7品のディナーコース。
            朝食は焼きたてのパンとともに、高原の新鮮な卵や自家製ジャムをお楽しみいただけます。
            食材はすべて地元の契約農家さんから直接仕入れています。
          </p>
        </div>
      </div>
    </section>
  );
}