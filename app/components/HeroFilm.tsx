'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

/*
 * Full-bleed cinematic hero background built from real project photography.
 * - Slow "camera drift" (Ken Burns) on the active photo + soft crossfades.
 * - Only the first photo loads up front (preloaded for LCP); the rest are
 *   mounted after the page settles so they never compete with first paint.
 * - Pauses when the tab is hidden; a visible pause control satisfies WCAG 2.2.2.
 * - prefers-reduced-motion: no autoplay, no drift — manual selection only.
 */

interface Slide {
  src: string;
  mobileSrc?: string;
  no: string;
  name: string;
  place: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    src: '/projects/vertical-gardens/penthouse-terrace-living-wall.webp',
    mobileSrc: '/projects/vertical-gardens/penthouse-terrace-living-wall-mobile.webp',
    no: 'VG—01',
    name: 'Penthouse Verandah Living Wall',
    place: 'Golf Course Road, Delhi NCR',
    alt: 'Luxury penthouse terrace living wall with evening ambient illumination',
  },
  {
    src: '/projects/vertical-gardens/holiday-inn-atrium.webp',
    no: 'VG—02',
    name: 'Double-Height Living Wall Atrium',
    place: 'Aerocity, New Delhi',
    alt: 'Two-story lush architectural living wall in corporate atrium',
  },
  {
    src: '/projects/vertical-gardens/multi-species-wave-wall.webp',
    no: 'VG—03',
    name: 'Multi-Species Flowing Wave Living Wall',
    place: 'CyberCity, Gurugram',
    alt: 'Curved multi-species high-density architectural living wall',
  },
  {
    src: '/projects/vertical-gardens/commercial-plaza-uplight.webp',
    no: 'VG—04',
    name: 'Commercial Plaza Architectural Living Wall',
    place: 'Barakhamba Road, Connaught Place',
    alt: 'Double-height commercial living wall with architectural ground uplighting',
  },
  {
    src: '/projects/vertical-gardens/courtyard-atrium-skylight.webp',
    no: 'VG—05',
    name: 'Courtyard Atrium Skylight Living Wall',
    place: 'Chhatarpur, South Delhi',
    alt: 'Double-height courtyard atrium living wall flanked by carved stone cladding',
  },
];

const HOLD_MS = 7000;

export default function HeroFilm() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0); // restarts the progress bar on manual jumps
  const [armed, setArmed] = useState(false); // mount slides 2..n after first paint
  const [playing, setPlaying] = useState(true);
  const [still, setStill] = useState(false);
  const hidden = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setStill(mq.matches);
      if (mq.matches) setPlaying(false);
    };
    sync();
    mq.addEventListener('change', sync);
    const t = window.setTimeout(() => setArmed(true), 1200);
    const onVis = () => { hidden.current = document.hidden; };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      mq.removeEventListener('change', sync);
      window.clearTimeout(t);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  useEffect(() => {
    if (!playing || !armed) return;
    const t = window.setTimeout(() => {
      if (hidden.current) { setCycle(c => c + 1); return; }
      setActive(a => (a + 1) % SLIDES.length);
    }, HOLD_MS);
    return () => window.clearTimeout(t);
  }, [active, cycle, playing, armed]);

  const go = useCallback((i: number) => {
    setActive(i);
    setCycle(c => c + 1);
  }, []);

  const cur = SLIDES[active];

  return (
    <>
      <div className="hf-bg" aria-hidden="true">
        {SLIDES.map((s, i) =>
          i === 0 || armed ? (
            <div key={s.src} className={`hf-slide${i === active ? ' is-on' : ''}${i % 2 ? ' alt' : ''}`}>
              {s.mobileSrc ? (
                <>
                  <div className="hf-view-desktop">
                    <Image
                      src={s.src}
                      alt={s.alt || ''}
                      fill
                      sizes="100vw"
                      preload={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="hf-view-mobile">
                    <Image
                      src={s.mobileSrc}
                      alt={s.alt || ''}
                      fill
                      sizes="100vw"
                      preload={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={s.src}
                  alt={s.alt || ''}
                  fill
                  sizes="100vw"
                  preload={i === 0}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              )}
            </div>
          ) : null,
        )}
        <div className="hf-scrim" />
      </div>

      <div className="hf-bar">
        <div className="shell hf-bar-in">
          <p className="hf-cap" aria-live="polite">
            <span className="hf-no">{cur.no}</span>
            <span className="hf-name">{cur.name}</span>
            <span className="hf-place">{cur.place}</span>
          </p>
          <div className="hf-ctl">
            <div className="hf-dots" role="group" aria-label="Featured projects">
              {SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  className={`hf-dot${i === active ? ' is-on' : ''}`}
                  aria-label={`Show ${s.name}`}
                  aria-current={i === active}
                  onClick={() => go(i)}
                >
                  <i
                    key={i === active ? `${active}-${cycle}` : i}
                    style={{ animationDuration: `${HOLD_MS}ms`, animationPlayState: playing && armed ? 'running' : 'paused' }}
                  />
                </button>
              ))}
            </div>
            {!still && (
              <button
                type="button"
                className="hf-play"
                aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                onClick={() => setPlaying(p => !p)}
              >
                {playing ? <span className="ic-pause" aria-hidden="true" /> : <span className="ic-play" aria-hidden="true" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
