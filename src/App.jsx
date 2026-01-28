import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './index.css';

const App = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const startSite = () => {
    // Premium Confetti Explosion
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#c5a059', '#f1d38e', '#ffffff'] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#c5a059', '#f1d38e', '#ffffff'] });
    }, 250);

    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }

    setHasInteracted(true);
  };

  // Particles Array for Background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="minimal-container">
      {/* Floating Gold Dust Particles */}
      {!hasInteracted ? null : particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}

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
