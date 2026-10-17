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
  { src: '/project_03.jpg', no: 'P—03', name: 'Hybrid Living Wall — Lobby', place: 'Noida, Uttar Pradesh', alt: 'Floor-to-ceiling living wall in a hotel lobby' },
  { src: '/project_06.jpg', no: 'P—06', name: 'Natural Living Wall — Exterior', place: 'Faridabad, Haryana', alt: 'Natural living wall covering a building facade' },
  { src: '/project_04.jpg', no: 'P—04', name: 'Rooftop Terrace — Residence', place: 'Greater Kailash, Delhi', alt: 'Rooftop terrace garden at dusk with pergola and seating' },
  { src: '/project_01.jpg', no: 'P—01', name: 'Corporate Campus Landscape', place: 'Gurugram, Haryana', alt: 'Landscaped corporate campus garden at sunset' },
  { src: '/project_02.jpg', no: 'P—02', name: 'Preserved Moss Feature Wall', place: 'Connaught Place, Delhi', alt: 'Preserved moss wall behind an office reception desk' },
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
