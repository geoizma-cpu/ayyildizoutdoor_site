import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './index.css';

const App = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log("Müzik başlatılamadı:", e));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="minimal-container">
      {/* Background Audio */}
      <audio ref={audioRef} src="/casino-music.mp3" loop />

      {/* Music Toggle */}
      <button className="music-toggle" onClick={toggleMusic}>
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>

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
