import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  return (
    <div className="minimal-container">
      <main className="main-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="content-wrapper"
        >
          {/* Logo */}
          <img src="/logo.png" alt="Ayyıldız Outdoor" className="hero-logo" />

          {/* Wheel Container Container */}
          <div className="wheel-placeholder">
            <div id="elfsight-wheel-container">
              {/* PASTE YOUR ELFSIGHT CODE HERE */}
              <div className="loading-text">Yükleniyor...</div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="minimal-footer">
        <p>© 2026 Ayyıldız Outdoor</p>
      </footer>
    </div>
  );
};

export default App;
