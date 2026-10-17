import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Heart, Sparkles } from 'lucide-react';
import '../css/BirthdayLanding.css';

const BIRTHDAY = new Date(2026, 10, 18, 0, 0, 0, 0);


function getTimeLeft() {
  const difference = Math.max(0, BIRTHDAY.getTime() - Date.now());
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: difference === 0,
  };
}

function CountdownUnit({ value, label, big }) {
  return (
    <div className={`bl-unit${big ? ' bl-unit-big' : ''}`}>
      <span className="bl-unit-value">{String(value).padStart(2, '0')}</span>
      <span className="bl-unit-label">{label}</span>
    </div>
  );
}

export default function BirthdayLanding() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  // Deterministic star field so it doesn't reshuffle on every render
  const stars = useMemo(
    () => Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: `${(i * 53 + 7) % 100}%`,
      top: `${(i * 29 + 11) % 100}%`,
      size: 1 + (i % 3),
      delay: `${(i % 9) * -0.8}s`,
      duration: `${3 + (i % 5)}s`,
    })),
    []
  );

  const hearts = useMemo(
    () => Array.from({ length: 9 }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 9) % 100}%`,
      delay: `${(i % 6) * -2.3}s`,
      duration: `${16 + (i % 5) * 3}s`,
      size: 9 + (i % 4) * 4,
    })),
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="bl">
      <div className="bl-sky" aria-hidden="true">
        {stars.map((s) => (
          <i
            key={s.id}
            className="bl-star"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }}
          />
        ))}
        {hearts.map((h) => (
          <Heart
            key={h.id}
            className="bl-drift"
            fill="currentColor"
            style={{ left: h.left, animationDelay: h.delay, animationDuration: h.duration, width: h.size, height: h.size }}
          />
        ))}
      </div>

      <header className="bl-top">
        <Link to="/" className="bl-brand" aria-label="Home">
          <span className="bl-brand-dot"><Heart size={14} fill="currentColor" /></span>
          our little universe
        </Link>
        <span className="bl-top-note"><Sparkles size={14} /> made with love, just for you</span>
      </header>

      <section className="bl-hero">
        <div className="bl-orbits" aria-hidden="true">
          <span className="bl-ring bl-ring-1"><b /></span>
          <span className="bl-ring bl-ring-2"><b /></span>
          <span className="bl-ring bl-ring-3"><b /></span>
        </div>

        <p className="bl-pretitle">to my favourite person</p>
        <h1 className="bl-title">
          A universe
          <span>of us.</span>
        </h1>
        <p className="bl-intro">
          A little corner of the internet filled with our memories, the tiny things
          I adore about you, and all the moments still waiting for us.
        </p>
        <Link to="/gallery" className="bl-button">
          Step into our world <ArrowRight size={18} />
        </Link>
      </section>

      <a className="bl-cue" href="#countdown">
        there's something to look forward to <ArrowDown size={15} />
      </a>

      <section className="bl-count" id="countdown" aria-live="polite">
        <h2>{timeLeft.finished ? 'Happy birthday, my love.' : 'Your day is getting closer.'}</h2>
        <p className="bl-count-date">18 November 2026 — a day to celebrate you</p>

        {timeLeft.finished ? (
          <p className="bl-today">
            <Heart size={18} fill="currentColor" /> Today, the world got a little brighter because you were born.
          </p>
        ) : (
          <div className="bl-clock">
            <CountdownUnit big value={timeLeft.days} label="days" />
            <div className="bl-clock-small">
              <CountdownUnit value={timeLeft.hours} label="hours" />
              <CountdownUnit value={timeLeft.minutes} label="minutes" />
              <CountdownUnit value={timeLeft.seconds} label="seconds" />
            </div>
          </div>
        )}
        <p className="bl-foot-note">counting to midnight at the start of 18 November, your local time</p>
      </section>

      <footer className="bl-footer">
        made of memories and a little bit of magic <Heart size={12} fill="currentColor" />
      </footer>
    </main>
  );
}