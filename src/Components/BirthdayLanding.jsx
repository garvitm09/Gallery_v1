import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Heart, PartyPopper, Sparkles } from 'lucide-react';
import '../css/BirthdayLanding.css';
import { driveAsset } from '../lib/driveAsset';
const couple1 = driveAsset("IMG_20250601_141733_096.jpg");
const couple2 = driveAsset("Snapchat-88349609.jpg");
const couple3 = driveAsset("Screenshot_20261021-042059_WhatsApp~2.jpg");
const couple4 = driveAsset("Snapchat-1207783633.jpg");
const couple5 = driveAsset("Snapchat-1176263424.jpg");
const couple6 = driveAsset("Screenshot_20261017-151559_Snapchat~2.jpg");
const couple7 = driveAsset("Snapchat-1082952972.jpg");
const couple8 = driveAsset("Snapchat-1687674530.jpg");

const BIRTHDAY = new Date(2026, 10, 18, 0, 0, 0, 0);

// Put your photos in the project's /public/photos folder and list them here.
// Add or remove entries freely; the jar fills itself.
const PHOTOS = [
  { src: couple1, caption: 'us, always' },
  { src: couple2, caption: 'my favourite day' },
  { src: couple3, caption: 'that smile' },
  { src: couple4, caption: 'little adventures' },
  { src: couple5, caption: 'just you' },
  { src: couple6, caption: 'laughing again' },
  { src: couple7, caption: 'home is you' },
  { src: couple8, caption: 'forever starts here' },
];

// Where each photo lies in the pile at the bottom of the screen.
// x/y = position in %, r = rotation in degrees, z = stacking order.
// m* values are the phone layout (a taller, tighter pile that fills about half the screen).
const SPOTS = [
  { x: 12, y: 86, r: -9, z: 5, mx: 16, my: 90, mr: -8, mz: 7 },
  { x: 30, y: 92, r: 7, z: 6, mx: 30, my: 66, mr: 11, mz: 5 },
  { x: 48, y: 86, r: -5, z: 7, mx: 50, my: 94, mr: 6, mz: 8 },
  { x: 67, y: 92, r: 10, z: 8, mx: 70, my: 64, mr: -10, mz: 6 },
  { x: 86, y: 86, r: -8, z: 9, mx: 84, my: 90, mr: -6, mz: 9 },
  { x: 22, y: 60, r: 12, z: 2, mx: 20, my: 38, mr: -12, mz: 2 },
  { x: 50, y: 58, r: -6, z: 3, mx: 52, my: 36, mr: 7, mz: 3 },
  { x: 77, y: 60, r: 11, z: 4, mx: 82, my: 40, mr: 13, mz: 4 },
];

const CONFETTI_COLORS = ['#ff9fb6', '#f6d6a8', '#ffe0e7', '#e86f9a', '#ffc98a'];

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

/* Photos lying in a jar. Tap one: it pops up, then vanishes. When the jar is empty
   the landing page behind is revealed. State lives in memory only, so a refresh
   brings every photo back. */
function PhotoJar({ onFinish }) {
  const [gone, setGone] = useState([]);
  const [popped, setPopped] = useState(null);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  const total = PHOTOS.length;

  useEffect(() => {
    window.scrollTo(0, 0);
    const html = document.documentElement.style.overflow;
    const body = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = html;
      document.body.style.overflow = body;
    };
  }, []);

  // Popped photo shows for a moment, then starts to vanish
  useEffect(() => {
    if (popped === null) return undefined;
    const t = window.setTimeout(() => setLeaving(true), 2400);
    return () => window.clearTimeout(t);
  }, [popped]);

  useEffect(() => {
    if (!leaving) return undefined;
    const t = window.setTimeout(() => {
      setGone((g) => [...g, popped]);
      setPopped(null);
      setLeaving(false);
    }, 420);
    return () => window.clearTimeout(t);
  }, [leaving, popped]);

  // Jar empty: fade the whole intro out, then unmount it
  useEffect(() => {
    if (gone.length < total) return undefined;
    setDone(true);
    const t = window.setTimeout(onFinish, 850);
    return () => window.clearTimeout(t);
  }, [gone, total, onFinish]);

  const skip = () => { setPopped(null); setLeaving(false); setGone(PHOTOS.map((_, i) => i)); };
  const left = total - gone.length;

  return createPortal(
    <div className={`bl-stage${done ? ' is-done' : ''}`}>
      <div className="bl-stage-veil" />

      <div className="bl-stage-top">
        <p className="bl-stage-hint">
          {left === total ? 'tap a memory to open it' : `${left} ${left === 1 ? 'memory' : 'memories'} left`}
        </p>
        <button type="button" className="bl-skip" onClick={skip}>skip</button>
      </div>

      <div className="bl-pile">
        {PHOTOS.map((photo, i) => {
          const spot = SPOTS[i % SPOTS.length];
          const out = gone.includes(i) || popped === i;
          return (
            <button
              key={photo.src}
              type="button"
              className={`bl-jp${out ? ' is-out' : ''}`}
              aria-label={`Open memory ${i + 1}`}
              tabIndex={out ? -1 : 0}
              onClick={() => setPopped(i)}
              style={{
                '--x': `${spot.x}%`,
                '--y': `${spot.y}%`,
                '--r': `${spot.r}deg`,
                '--z': spot.z,
                '--mx': `${spot.mx}%`,
                '--my': `${spot.my}%`,
                '--mr': `${spot.mr}deg`,
                '--mz': spot.mz,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <span className="bl-jp-pic">
                <img src={photo.src} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </span>
            </button>
          );
        })}
      </div>

      {popped !== null && (
        <div
          className={`bl-pop${leaving ? ' is-leaving' : ''}`}
          role="dialog"
          aria-label="Memory"
          onClick={() => setLeaving(true)}
        >
          <figure className="bl-pop-card">
            <div className="bl-pop-pic">
              <img src={PHOTOS[popped].src} alt={PHOTOS[popped].caption} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <figcaption>{PHOTOS[popped].caption}</figcaption>
          </figure>
        </div>
      )}
    </div>,
    document.body
  );
}

export default function BirthdayLanding() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [introDone, setIntroDone] = useState(false);

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

  const confetti = useMemo(
    () => Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: `${(i * 61 + 5) % 100}%`,
      delay: `${(i % 8) * -1.9}s`,
      duration: `${9 + (i % 5) * 2}s`,
      dx: `${((i % 5) - 2) * 22}px`,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    })),
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="bl">
      {!introDone && <PhotoJar onFinish={() => setIntroDone(true)} />}

      <div className="bl-sky" aria-hidden="true">
        {stars.map((s) => (
          <i
            key={s.id}
            className="bl-star"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }}
          />
        ))}
        {confetti.map((c) => (
          <b
            key={c.id}
            className="bl-confetti"
            style={{ left: c.left, animationDelay: c.delay, animationDuration: c.duration, '--dx': c.dx, '--c': c.color }}
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

        <div className="bl-badge"><PartyPopper size={15} /> November is all yours</div>
        <p className="bl-pretitle">to my favourite person</p>
        <h1 className="bl-title">
          It's your birthday
          <span>month yayy!!</span>
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