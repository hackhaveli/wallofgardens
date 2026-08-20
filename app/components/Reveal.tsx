'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface Props extends Record<string, unknown> {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tag?: React.ElementType;
  delay?: number;
  type?: 'rv' | 'rvp';
  href?: string;
  'data-n'?: string;
}

export default function Reveal({ children, className = '', style, tag: Tag = 'div', delay, type = 'rv', ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `dl${delay}` : '';
  const fullClass = `${type} ${delayClass} ${className}`.trim();

  const Tag2 = Tag as React.ElementType;
  return (
    <Tag2 ref={ref} className={fullClass} style={style} {...rest}>
      {children}
    </Tag2>
  );
}

