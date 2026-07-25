import { useEffect, useRef, useState } from "react";

// Fades + slides content into view the first time it scrolls on-screen, then
// REMOVES the transform once it settles. A lingering CSS transform keeps the
// element on its own GPU layer, which makes text/images render slightly blurry —
// clearing it afterward keeps everything crisp. No libraries.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show immediately, no transform at all.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      // When our own reveal transition ends, drop the transform for crisp text/images.
      onTransitionEnd={(e) => {
        if (e.target === ref.current && visible) setSettled(true);
      }}
      className={
        "transition-all duration-700 ease-out " +
        (settled
          ? "opacity-100"
          : visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0") +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
