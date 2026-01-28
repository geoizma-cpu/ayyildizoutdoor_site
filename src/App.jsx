import React, { useRef, useEffect } from 'react';
import './index.css';

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
      }
    };

    // Attempt play immediately (may be blocked by browser)
    playAudio();

    // Forced Start on first interaction (required by Chrome/Safari/Mobile)
    const events = ['click', 'touchstart', 'mousedown', 'keydown'];
    events.forEach(event => window.addEventListener(event, playAudio, { once: true }));

    return () => {
      events.forEach(event => window.removeEventListener(event, playAudio));
    };
  }, []);

  return (
    <div className="minimal-container">
      {/* Background Audio */}
      <audio ref={audioRef} src="/casino-music.mp3" autoPlay loop />

      <div className="content-stack">
        <img src="/logo.png" alt="Ayyıldız Outdoor" className="hero-logo" />
        <div className="wheel-container">
          <div className="elfsight-app-445ad64b-1f41-4f42-8e02-18a7d1684fb1" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
  );
};

export default App;
