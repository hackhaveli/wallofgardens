'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const NS = 'http://www.w3.org/2000/svg';
    function el(t: string, a: Record<string, string>) {
      const n = document.createElementNS(NS, t);
      for (const k in a) n.setAttribute(k, a[k]);
      return n;
    }
    function fill(id: string, fn: (s: SVGElement) => void) {
      const s = document.getElementById(id) as unknown as SVGElement;
      if (s && s.children.length === 0) fn(s);
    }

    // 1. Foliage generation for living wall section (#folia)
    const folia = document.getElementById('folia');
    if (folia && folia.children.length === 0) {
      const pal = ['#7FA65C', '#A8C48C', '#5E8442'];
      for (let i = 0; i < 46; i++) {
        const y = 34 + Math.random() * 300;
        const x = 100 + Math.random() * 30;
        const s = 5 + Math.random() * 9;
        const p = document.createElementNS(NS, 'path');
        p.setAttribute('d', `M${x} ${y + s} C ${x - s} ${y + s} ${x - s} ${y - s} ${x} ${y - s} C ${x + s} ${y - s} ${x + s} ${y + s} ${x} ${y + s} Z`);
        p.setAttribute('fill', pal[Math.floor(Math.random() * pal.length)]);
        p.setAttribute('opacity', (0.4 + Math.random() * 0.5).toFixed(2));
        folia.appendChild(p);
      }
    }

    // 2. Balcony planter foliage (#bfol)
    const bfol = document.getElementById('bfol');
    if (bfol && bfol.children.length === 0) {
      const pal = ['#5E8442', '#7FA65C', '#A8C48C'];
      for (let i = 0; i < 22; i++) {
        const x = 96 + Math.random() * 40;
        const y = 62 + Math.random() * 30;
        const s = 4 + Math.random() * 6;
        bfol.appendChild(el('path', {
          d: `M${x.toFixed(1)} ${(y + s).toFixed(1)} C ${(x - s)} ${(y + s)} ${(x - s)} ${(y - s)} ${x} ${(y - s)} C ${(x + s)} ${(y - s)} ${(x + s)} ${(y + s)} ${x} ${(y + s)} Z`,
          fill: pal[Math.floor(Math.random() * pal.length)],
          opacity: (0.5 + Math.random() * 0.45).toFixed(2)
        }));
      }
    }

    // 3. Terrace garden build-up elements (#dimples, #stipple, #foliage)
    function yAt(x: number, base: number) { return base + (x - 26) * (10 / 252); }

    const dm = document.getElementById('dimples');
    if (dm && dm.children.length === 0) {
      for (let x = 34; x < 274; x += 11) {
        const y = yAt(x, 201);
        dm.appendChild(el('path', { d: `M${x} ${(y + 6).toFixed(1)} q4.5 -9 9 0` }));
      }
    }

    const st = document.getElementById('stipple');
    if (st && st.children.length === 0) {
      for (let i = 0; i < 150; i++) {
        const sx = 28 + Math.random() * 248;
        const top = yAt(sx, 150), bot = yAt(sx, 194);
        const sy = top + 3 + Math.random() * (bot - top - 6);
        st.appendChild(el('circle', { cx: sx.toFixed(1), cy: sy.toFixed(1), r: (0.6 + Math.random() * 0.9).toFixed(1) }));
      }
    }

    const fo = document.getElementById('foliage');
    if (fo && fo.children.length === 0) {
      const pal = ['#5E8442', '#7FA65C', '#A8C48C', '#4C7038'];
      for (let j = 0; j < 40; j++) {
        const px = 32 + Math.random() * 240;
        const ground = yAt(px, 150);
        const h = 14 + Math.random() * 46;
        const stemTop = ground - h;
        fo.appendChild(el('path', {
          d: `M${px.toFixed(1)} ${ground.toFixed(1)} V${stemTop.toFixed(1)}`,
          stroke: '#5E8442', 'stroke-width': '1', opacity: '0.5'
        }));
        const n = 2 + Math.floor(Math.random() * 3);
        for (let k = 0; k < n; k++) {
          const ly = stemTop + k * (h / n) * 0.7, s = 4 + Math.random() * 7;
          fo.appendChild(el('path', {
            d: `M${px.toFixed(1)} ${(ly + s).toFixed(1)} C ${(px - s)} ${(ly + s)} ${(px - s)} ${(ly - s)} ${px} ${(ly - s)} C ${(px + s)} ${(ly - s)} ${(px + s)} ${(ly + s)} ${px} ${(ly + s)} Z`,
            fill: pal[Math.floor(Math.random() * pal.length)],
            opacity: (0.45 + Math.random() * 0.45).toFixed(2)
          }));
        }
      }
    }

    // 4. Moss swatches procedural drawing
    fill('sw-bun', (s) => {
      const pal = ['#5E8442', '#7FA65C', '#A8C48C', '#4C7038'];
      for (let i = 0; i < 52; i++) {
        const cx = Math.random() * 100, cy = Math.random() * 66, r = 4 + Math.random() * 7;
        s.appendChild(el('circle', {
          cx: cx.toFixed(1), cy: cy.toFixed(1), r: r.toFixed(1),
          fill: pal[Math.floor(Math.random() * pal.length)], opacity: (0.55 + Math.random() * 0.4).toFixed(2)
        }));
      }
    });

    fill('sw-flat', (s) => {
      const pal = ['#6E9450', '#88AC68', '#567C3E'];
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * 100, y = Math.random() * 66;
        const w = 10 + Math.random() * 22, h = 4 + Math.random() * 7;
        s.appendChild(el('ellipse', {
          cx: x.toFixed(1), cy: y.toFixed(1),
          rx: (w / 2).toFixed(1), ry: (h / 2).toFixed(1),
          fill: pal[Math.floor(Math.random() * pal.length)], opacity: (0.5 + Math.random() * 0.4).toFixed(2)
        }));
      }
    });

    fill('sw-reindeer', (s) => {
      const pal = ['#9DB88A', '#C3D2B4', '#7E9E68', '#B4C9A2'];
      for (let i = 0; i < 46; i++) {
        const x = Math.random() * 100, y = Math.random() * 66, r = 2 + Math.random() * 4;
        const g = el('g', {});
        g.appendChild(el('circle', {
          cx: x.toFixed(1), cy: y.toFixed(1), r: r.toFixed(1),
          fill: pal[Math.floor(Math.random() * pal.length)], opacity: (0.6 + Math.random() * 0.35).toFixed(2)
        }));
        for (let j = 0; j < 3; j++) {
          const a = Math.random() * 6.28, L = r + 2 + Math.random() * 4;
          g.appendChild(el('path', {
            d: `M${x.toFixed(1)} ${y.toFixed(1)} L${(x + Math.cos(a) * L).toFixed(1)} ${(y + Math.sin(a) * L).toFixed(1)}`,
            stroke: pal[Math.floor(Math.random() * pal.length)], 'stroke-width': '1.1', opacity: '0.6'
          }));
        }
        s.appendChild(g);
      }
    });

    fill('sw-mixed', (s) => {
      s.appendChild(el('rect', { x: '0', y: '0', width: '100', height: '66', fill: '#EFEDE4' }));
      const pal = ['#5E8442', '#7FA65C', '#A8C48C', '#C3D2B4', '#4C7038'];
      for (let i = 0; i < 44; i++) {
        const cx = Math.random() * 100, cy = Math.random() * 66, r = 3 + Math.random() * 7;
        s.appendChild(el('circle', {
          cx: cx.toFixed(1), cy: cy.toFixed(1), r: r.toFixed(1),
          fill: pal[Math.floor(Math.random() * pal.length)], opacity: (0.55 + Math.random() * 0.4).toFixed(2)
        }));
      }
      s.appendChild(el('rect', { x: '40', y: '0', width: '7', height: '66', fill: '#8A6A44', opacity: '.75' }));
      s.appendChild(el('rect', { x: '70', y: '0', width: '5', height: '66', fill: '#8A6A44', opacity: '.6' }));
    });

    // 5. Callout stagger animations
    document.querySelectorAll('#callouts .callout, #co1 .callout, #co2 .callout').forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${1.0 + (i % 8) * 0.07}s`;
    });

    // 6. Intersection Observer for reveals, charts, and progress bars
    const targets = document.querySelectorAll('.rv, .rvp, .chart, .prog');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });

      targets.forEach((target) => observer.observe(target));
      return () => observer.disconnect();
    } else {
      targets.forEach((target) => target.classList.add('in'));
    }
  }, [pathname]);

  return null;
}
