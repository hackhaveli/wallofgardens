'use client';
import { useEffect, useRef } from 'react';

export default function HeroArt() {
  const foliaRef = useRef<SVGGElement>(null);
  const calloutRefs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate foliage
    const f = foliaRef.current;
    if (f) {
      const NS = 'http://www.w3.org/2000/svg';
      const pal = ['#7FA65C', '#A8C48C', '#5E8442'];
      for (let i = 0; i < 46; i++) {
        const y = 34 + Math.random() * 300;
        const x = 100 + Math.random() * 30;
        const s = 5 + Math.random() * 9;
        const p = document.createElementNS(NS, 'path');
        p.setAttribute('d',
          `M${x} ${y+s} C ${x-s} ${y+s} ${x-s} ${y-s} ${x} ${y-s}` +
          ` C ${x+s} ${y-s} ${x+s} ${y+s} ${x} ${y+s} Z`
        );
        p.setAttribute('fill', pal[Math.floor(Math.random() * pal.length)]);
        p.setAttribute('opacity', (0.4 + Math.random() * 0.5).toFixed(2));
        f.appendChild(p);
      }
    }
    // Stagger callouts
    const ctn = calloutRefs.current;
    if (ctn) {
      ctn.querySelectorAll('.callout').forEach((el, i) => {
        (el as HTMLElement).style.animationDelay = `${1.1 + i * 0.06}s`;
      });
    }
  }, []);

  return (
    <div className="hero-art">
      <div className="rule-tag"><span className="tag light">Fig. 01 — Living wall section</span></div>
      <div className="dwg-wrap-lg">
        <svg className="dwg" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg"
          role="img" aria-label="Technical cross-section of a living wall showing existing wall, steel frame, waterproof backing, panel system, growing medium, irrigation line and drainage channel">

          {/* 01 existing wall */}
          <g className="lyr" style={{animationDelay:'.05s'}}>
            <rect x="16" y="20" width="34" height="330" stroke="rgba(244,243,236,.34)" strokeWidth="1"/>
            <path d="M16 40 L50 20 M16 70 L50 50 M16 100 L50 80 M16 130 L50 110 M16 160 L50 140 M16 190 L50 170 M16 220 L50 200 M16 250 L50 230 M16 280 L50 260 M16 310 L50 290 M16 340 L50 320"
              stroke="rgba(244,243,236,.16)" strokeWidth="1"/>
          </g>

          {/* 02 MS frame */}
          <g className="lyr" style={{animationDelay:'.18s'}}>
            <rect x="58" y="24" width="9" height="322" stroke="#C8A55B" strokeWidth="1.2"/>
            <path d="M50 60 H58 M50 150 H58 M50 240 H58 M50 330 H58" stroke="#C8A55B" strokeWidth="1.2"/>
          </g>

          {/* 03 waterproof backing */}
          <g className="lyr" style={{animationDelay:'.3s'}}>
            <rect x="67" y="24" width="7" height="322" fill="rgba(200,165,91,.16)" stroke="#C8A55B" strokeWidth="1"/>
          </g>

          {/* 04 panel system */}
          <g className="lyr" style={{animationDelay:'.42s'}}>
            <rect x="74" y="24" width="30" height="322" stroke="rgba(244,243,236,.3)" strokeWidth="1"/>
            <path d="M74 70 H104 M74 116 H104 M74 162 H104 M74 208 H104 M74 254 H104 M74 300 H104"
              stroke="rgba(244,243,236,.22)" strokeWidth="1"/>
          </g>

          {/* 05 growing medium */}
          <g className="lyr" style={{animationDelay:'.54s'}}>
            <rect x="78" y="30" width="22" height="310" fill="rgba(127,166,92,.2)"/>
          </g>

          {/* 06 planting */}
          <g className="lyr" style={{animationDelay:'.66s'}} ref={foliaRef}></g>

          {/* 07 drip line */}
          <g className="lyr" style={{animationDelay:'.8s'}}>
            <path d="M89 18 V330" stroke="#7FA65C" strokeWidth="1.4" strokeDasharray="3 5"/>
            <circle cx="89" cy="70" r="2.4" fill="#7FA65C"/>
            <circle cx="89" cy="150" r="2.4" fill="#7FA65C"/>
            <circle cx="89" cy="230" r="2.4" fill="#7FA65C"/>
            <circle cx="89" cy="310" r="2.4" fill="#7FA65C"/>
          </g>

          {/* 08 collection channel */}
          <g className="lyr" style={{animationDelay:'.92s'}}>
            <path d="M58 350 H150 L150 366 L58 372 Z" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.1)"/>
            <path d="M150 358 h22" stroke="#C8A55B" strokeWidth="1.2"/>
            <path d="M166 354 l8 4 -8 4" stroke="#C8A55B" strokeWidth="1.2" fill="none"/>
          </g>

          {/* leader lines */}
          <g className="lyr" style={{animationDelay:'1.02s'}} stroke="rgba(244,243,236,.22)" strokeWidth="1">
            <path d="M33 20 V10 H210"/>
            <path d="M62 24 V44 H210"/>
            <path d="M70 90 H210"/>
            <path d="M104 132 H210"/>
            <path d="M100 186 H210"/>
            <path d="M126 240 H210"/>
            <path d="M89 292 H210"/>
            <path d="M172 358 H210"/>
          </g>
          <g className="lyr" style={{animationDelay:'1.08s'}} fill="rgba(244,243,236,.62)"
            fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="1">
            <text x="216" y="13">01</text>
            <text x="216" y="47">02</text>
            <text x="216" y="93">03</text>
            <text x="216" y="135">04</text>
            <text x="216" y="189">05</text>
            <text x="216" y="243">06</text>
            <text x="216" y="295">07</text>
            <text x="216" y="361">08</text>
          </g>
        </svg>

        <div className="callouts" id="callouts" ref={calloutRefs}>
          <div className="callout light"><b>01</b><span className="light">Existing wall</span></div>
          <div className="callout light"><b>02</b><span className="light">MS frame, stood off</span></div>
          <div className="callout light"><b>03</b><span className="light">Waterproof backing</span></div>
          <div className="callout light"><b>04</b><span className="light">Panel system</span></div>
          <div className="callout light"><b>05</b><span className="light">Growing medium</span></div>
          <div className="callout light"><b>06</b><span className="light">Planting</span></div>
          <div className="callout light"><b>07</b><span className="light">Drip line, zoned</span></div>
          <div className="callout light"><b>08</b><span className="light">Collection channel to drain</span></div>
        </div>
      </div>
    </div>
  );
}
