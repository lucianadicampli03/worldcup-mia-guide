"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";

type RevealVariant = "fade-up" | "fade-up-lg" | "scale-in" | "fade-in";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  as?: ElementType;
  root?: RefObject<Element | null>;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  as: Tag = "div",
  root,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        root: root?.current ?? null,
        rootMargin: root?.current ? "0px 0px -6% 0px" : "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root, threshold]);

  return (
    <Tag
      ref={ref as never}
      className={`scroll-reveal scroll-reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
