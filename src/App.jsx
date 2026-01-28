import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './index.css';

const SPIN_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const App = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    checkLockStatus();
    const timer = setInterval(checkLockStatus, 1000);
    return () => clearInterval(timer);
  }, []);

  const checkLockStatus = () => {
    const lastSpin = localStorage.getItem('lastSpinTimestamp');
    if (lastSpin) {
      const now = Date.now();
      const elapsed = now - parseInt(lastSpin);
      if (elapsed < SPIN_COOLDOWN) {
        setIsLocked(true);
        const remaining = SPIN_COOLDOWN - elapsed;
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}s ${minutes}d ${seconds}sn`);
      } else {
        setIsLocked(false);
      }
    }
  };

  const startSite = () => {
    if (isLocked) return;

    // Save timestamp when they enter the wheel area
    localStorage.setItem('lastSpinTimestamp', Date.now().toString());

    // Premium Confetti Explosion
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const remaining = animationEnd - Date.now();
      if (remaining <= 0) return clearInterval(interval);
      const particleCount = 50 * (remaining / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#c5a059', '#f1d38e', '#ffffff'] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#c5a059', '#f1d38e', '#ffffff'] });
    }, 250);

    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }

    setHasInteracted(true);
  };

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="minimal-container">
      {hasInteracted && particles.map(p => (
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

      <audio ref={audioRef} src="/casino-music.mp3" loop />

      {!hasInteracted ? (
        <div className="enter-overlay">
          <div className="overlay-content">
            <img src="/logo.png" alt="Ayyıldız Outdoor" className="hero-logo pulse" />

            {isLocked ? (
              <div className="lock-message fade-in">
                <h3>YARIN TEKRAR BEKLERİZ</h3>
                <p>Günün şansını az önce kullandın.</p>
                <div className="countdown-timer">{timeLeft}</div>
              </div>
            ) : (
              <button className="enter-button" onClick={startSite}>
                ŞANSINI DENE
              </button>
            )}
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
