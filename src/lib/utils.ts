'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useIntersectionObserver(
  options?: IntersectionObserverInit
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

export function useCounter(target: number, suffix = '', duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress * (2 - progress);
      const current = Math.floor(eased * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  const display = `${count.toLocaleString()}${suffix}`;

  return { display, start };
}

export function useScrollAnimation() {
  const { ref, isVisible } = useIntersectionObserver();

  return {
    ref,
    className: isVisible ? 'visible' : '',
  };
}

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string, offset = 60) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (!target) return;
  const pos = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: pos, behavior: 'smooth' });
}
