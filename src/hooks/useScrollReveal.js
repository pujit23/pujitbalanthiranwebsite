import { useEffect } from 'react';

export const useScrollReveal = (ref, options = { threshold: 0.12, delay: 0 }) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial classes for the animation state
    element.classList.add('reveal-base');
    if (options.delay > 0) {
      element.style.transitionDelay = `${options.delay}s`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          element.classList.add('revealed');
          observer.unobserve(element); // once: true
        }
      },
      {
        threshold: options.threshold || 0.12,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options.threshold, options.delay]);
};
