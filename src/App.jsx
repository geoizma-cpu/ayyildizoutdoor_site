import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const App = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const startSite = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio failed:", e));
    }
    setHasInteracted(true);
  };

  return (
    <div className="minimal-container">
      {/* Background Audio */}
      <audio ref={audioRef} src="/casino-music.mp3" loop />

      {!hasInteracted ? (
        <div className="enter-overlay">
          <div className="overlay-content">
            <img src="/logo.png" alt="Ayyıldız Outdoor" className="hero-logo pulse" />
            <button className="enter-button" onClick={startSite}>
              ŞANSA BAŞLA
            </button>
          </div>
        </div>
      ) : (
        <div className="content-stack fade-in">
          <img src="/logo.png" alt="Ayyıldız Outdoor" className="hero-logo" />
          <div className="wheel-container">
            <div className="elfsight-app-445ad64b-1f41-4f42-8e02-18a7d1684fb1" data-elfsight-app-lazy></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
