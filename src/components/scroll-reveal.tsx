'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // SSR: 'visible' so content is immediately painted (helps FCP).
  // After hydration: 'hidden' for below-fold, 'revealed' for in-viewport.
  const [state, setState] = useState<'visible' | 'hidden' | 'revealed'>('visible');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const inViewport = el.getBoundingClientRect().top < window.innerHeight;

    if (inViewport) {
      setState('revealed');
      return;
    }

    setState('hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    state === 'hidden' ? 'scroll-reveal-hidden' : state === 'revealed' ? 'scroll-revealed' : '';

  return (
    <div
      ref={ref}
      className={`${stateClass} ${className}`.trim()}
      style={state === 'revealed' && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
