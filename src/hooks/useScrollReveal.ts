import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal(threshold: number = 0.15, rootMargin: string = '0px 0px -40px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

export function useScrollRevealStagger(
  itemCount: number,
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -30px 0px',
  staggerDelay: number = 120
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const children = Array.from(node.children) as HTMLElement[];

    const observers: IntersectionObserver[] = [];

    children.forEach((child, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = new Set(prev);
                next.add(index);
                return next;
              });
            }, index * staggerDelay);
            observer.unobserve(child);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(child);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [itemCount, threshold, rootMargin, staggerDelay]);

  return { containerRef, visibleItems };
}

export function useParallax(speed: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setOffset((scrollProgress - 0.5) * speed * 60);
    }
  }, [speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { ref, offset };
}