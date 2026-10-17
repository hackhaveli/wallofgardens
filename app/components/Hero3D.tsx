'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

/*
 * CSS-3D living wall assembly for the home hero.
 * Real 3D (perspective + preserve-3d), no WebGL or animation libraries.
 * - On load the layers fly in along Z and lock together (one-time).
 * - Idle: a slow 3D sway. Pointer devices: gentle tilt toward the cursor.
 * - "View layers" toggles an exploded view with numbered layers.
 * prefers-reduced-motion: everything renders assembled and static.
 */

type BoxProps = { w: number; h: number; d: number; x: number; y: number; cls: string };

/** A solid with six faces, centred on (x, y) in the stage plane. */
function Box({ w, h, d, x, y, cls }: BoxProps) {
  const v = { '--w': `${w}px`, '--h': `${h}px`, '--d': `${d}px`, left: x - w / 2, top: y - h / 2 } as CSSProperties;
  return (
    <div className={`b3 ${cls}`} style={v}>
      <i className="f-fr" />
      <i className="f-bk" />
      <i className="f-r" />
      <i className="f-l" />
      <i className="f-t" />
      <i className="f-b" />
    </div>
  );
}

const LAYERS = [
  { no: '01', name: 'Existing wall' },
  { no: '02', name: 'MS frame, stood off' },
  { no: '03', name: 'Waterproof backing' },
  { no: '04', name: 'Modular panel system' },
  { no: '05', name: 'Planting' },
  { no: '06', name: 'Drip line & channel' },
];

export default function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [exploded, setExploded] = useState(false);

  // Pointer tilt — only on fine pointers, only when motion is allowed. rAF-throttled.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || still) return;
    const zone = el.closest('section') ?? el;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty('--tx', `${tx.toFixed(2)}deg`);
      el.style.setProperty('--ty', `${ty.toFixed(2)}deg`);
    };
    const onMove = (e: Event) => {
      const p = e as PointerEvent;
      const r = el.getBoundingClientRect();
      const nx = (p.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const ny = (p.clientY - (r.top + r.height / 2)) / window.innerHeight;
      ty = Math.max(-1, Math.min(1, nx)) * 9;
      tx = Math.max(-1, Math.min(1, ny)) * -6;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    zone.addEventListener('pointermove', onMove, { passive: true });
    zone.addEventListener('pointerleave', onLeave);
    return () => {
      zone.removeEventListener('pointermove', onMove);
      zone.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`h3${exploded ? ' is-x' : ''}`} ref={ref}>
      <div className="h3-scene" aria-hidden="true">
        <div className="h3-shadow" />
        <div className="h3-scale">
          <div className="h3-view">
            <div className="h3-sway">
              {/* 01 existing wall */}
              <div className="l3" style={{ '--i': 0, '--z': '0px' } as CSSProperties}>
                <Box cls="wall" w={330} h={430} d={34} x={0} y={0} />
                <span className="pin">01</span>
              </div>
              {/* 02 MS frame: four members */}
              <div className="l3" style={{ '--i': 1, '--z': '32px' } as CSSProperties}>
                <Box cls="steel" w={300} h={12} d={14} x={0} y={-194} />
                <Box cls="steel" w={300} h={12} d={14} x={0} y={194} />
                <Box cls="steel" w={12} h={400} d={14} x={-144} y={0} />
                <Box cls="steel" w={12} h={400} d={14} x={144} y={0} />
                <Box cls="steel" w={276} h={8} d={10} x={0} y={0} />
                <span className="pin">02</span>
              </div>
              {/* 03 waterproof backing */}
              <div className="l3" style={{ '--i': 2, '--z': '44px' } as CSSProperties}>
                <Box cls="mem" w={286} h={388} d={3} x={0} y={0} />
                <span className="pin">03</span>
              </div>
              {/* 04 panel / pocket modules */}
              <div className="l3" style={{ '--i': 3, '--z': '58px' } as CSSProperties}>
                <Box cls="panel" w={280} h={380} d={22} x={0} y={0} />
                <span className="pin">04</span>
              </div>
              {/* 05 planting */}
              <div className="l3" style={{ '--i': 4, '--z': '74px' } as CSSProperties}>
                <div className="plant">
                  <Image
                    src="/hero-planting.webp"
                    alt=""
                    width={600}
                    height={800}
                    sizes="(max-width: 1000px) 260px, 320px"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <span className="pin">05</span>
              </div>
              {/* 06 drip line + brass collection channel */}
              <div className="l3" style={{ '--i': 5, '--z': '66px' } as CSSProperties}>
                <Box cls="drip" w={272} h={4} d={4} x={0} y={-186} />
                <Box cls="brass" w={318} h={20} d={46} x={0} y={204} />
                <span className="pin pin-b">06</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h3-bar">
        <button type="button" className="h3-tog" aria-pressed={exploded} onClick={() => setExploded(v => !v)}>
          <span className="h3-ico" aria-hidden="true" />
          {exploded ? 'Assemble' : 'View layers'}
        </button>
        <span className="h3-cap"><b>Fig. 01</b> Living wall assembly</span>
      </div>
      <ol className="h3-key" aria-label="Living wall layers">
        {LAYERS.map(l => (
          <li key={l.no}><b>{l.no}</b>{l.name}</li>
        ))}
      </ol>
    </div>
  );
}
