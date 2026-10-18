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

const SLIDES = [
  { src: '/projects/vertical-gardens/holiday-inn-atrium.webp', no: 'VG—01', name: 'Double-Height Living Wall Atrium', place: 'Aerocity, New Delhi', alt: 'Two-story lush architectural living wall in corporate atrium' },
  { src: '/projects/moss-walls/federal-bank-moss-wall.webp', no: 'MW—01', name: 'Federal Bank Executive Moss Wall', place: 'Connaught Place, New Delhi', alt: 'Multi-tone wave preserved Scandinavian reindeer moss wall' },
  { src: '/projects/vertical-gardens/rooftop-pool-sunset.webp', no: 'TG—01', name: 'Penthouse Rooftop Terrace Lounge', place: 'Greater Kailash, Delhi', alt: 'Rooftop terrace garden at dusk with infinity pool and deck lighting' },
  { src: '/projects/moss-walls/wipro-revantage-reception.webp', no: 'MW—04', name: 'Wipro & Revantage Executive Lounge', place: 'CyberCity, Gurugram', alt: 'High-density acoustic preserved moss wall with acrylic corporate branding' },
  { src: '/projects/moss-walls/hul-unilever-curved-wall.webp', no: 'MW—02', name: 'Hindustan Unilever Atrium Feature', place: 'Corporate Campus, Delhi NCR', alt: 'Curved Scandinavian moss wall with embedded U-monogram and terracotta jali' },
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
              <Image
                src={s.src}
                alt=""
                fill
                sizes="100vw"
                preload={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
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
