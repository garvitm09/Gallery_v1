import { useEffect, useRef, useState } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import '../css/MusicPlayer.css';
import Baby from '../assets/Baby.mp3'
// Put your song in the project's /public folder and set its name here.
const SONG_SRC = Baby;
const SONG_TITLE = 'Our song';

/**
 * Render this ONCE, inside <BrowserRouter> but outside <Routes>, so it
 * stays mounted while the page changes and the song never restarts.
 */
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const rootRef = useRef(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  // Start automatically. Browsers often block this until the visitor
  // interacts with the page, so fall back to the first tap, click or key press.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const start = () => {
      if (pausedByUser.current || !audio.paused) return Promise.resolve();
      return audio.play().then(() => setPlaying(true));
    };

    const events = ['pointerdown', 'keydown', 'touchstart'];
    const onFirstInteraction = (e) => {
      if (rootRef.current && rootRef.current.contains(e.target)) return; // the button handles itself
      start().then(removeListeners).catch(() => {});
    };
    function removeListeners() {
      events.forEach((ev) => document.removeEventListener(ev, onFirstInteraction));
    }

    start().catch(() => {
      events.forEach((ev) => document.addEventListener(ev, onFirstInteraction));
    });
    return removeListeners;
  }, []);

  // Keep the button in sync if the browser or a headset pauses the audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const sync = () => setPlaying(!audio.paused);
    audio.addEventListener('play', sync);
    audio.addEventListener('pause', sync);
    return () => {
      audio.removeEventListener('play', sync);
      audio.removeEventListener('pause', sync);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        pausedByUser.current = false;
        await audio.play();
      } else {
        pausedByUser.current = true;
        audio.pause();
      }
    } catch {
      setMissing(true);
    }
  };

  return (
    <div className="mp" ref={rootRef}>
      <audio ref={audioRef} src={SONG_SRC} loop preload="auto" onError={() => setMissing(true)} />
      <button
        type="button"
        className={`mp-btn${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause the song' : 'Play the song'}
      >
        <span className="mp-disc"><Music size={16} /></span>
        <span className="mp-text">
          <strong>{SONG_TITLE}</strong>
          <small>{missing ? 'song file not found' : playing ? 'playing now' : 'tap to play'}</small>
        </span>
        <span className="mp-icon">
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </span>
      </button>
    </div>
  );
}