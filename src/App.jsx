import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, ShoppingBag, Mail, Instagram, Facebook } from 'lucide-react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Ayyıldız Outdoor" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-[#c5a059] transition-colors">ANA SAYFA</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">KOLEKSİYON</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">İLETİŞİM</a>
          </nav>
          <button className="bg-[#c5a059] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#d4b57a] transition-all transform hover:scale-105">
            MAĞAZAYA GİT
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c5a059] blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#c5a059] blur-[120px] rounded-full opacity-50"></div>
          </div>

          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                ŞANSINI <span className="gold-text">DENE</span>,<br /> 
                KAZANMAYA BAŞLA
              </h1>
              <p className="text-secondary text-lg max-w-2xl mx-auto mb-10">
                Ayyıldız Outdoor ile doğanın tadını çıkarırken sürpriz indirimler ve hediyeler kazanma şansı yakala. Çarkı çevir, sana özel kodun sahibi ol!
              </p>
            </motion.div>

            {/* Elfsight Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-card p-4 md:p-8 max-w-4xl mx-auto min-h-[500px] flex flex-col items-center justify-center relative border-[#c5a059]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#c5a059]/5 to-transparent pointer-events-none rounded-2xl"></div>
              
              {/* This is where the Elfsight widget goes */}
              <div id="elfsight-wheel-container" className="w-full">
                <div className="flex flex-col items-center text-center py-12">
                  <div className="p-6 rounded-full bg-[#c5a059]/10 mb-6">
                    <Star className="w-12 h-12 text-[#c5a059]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Hediye Çarkı Yükleniyor...</h3>
                  <p className="text-secondary max-w-md">
                    Elfsight widget kodunuzu buraya eklediğinizde çarkınız bu alanda görünecektir.
                  </p>
                  
                  {/* INSTRUCTIONS FOR USER */}
                  <div className="mt-8 p-4 bg-black/40 border border-[#c5a059]/20 rounded-lg text-sm text-left font-mono">
                    <p className="text-[#c5a059] mb-2">// Elfsight Kodunuzu Buraya Yapıştırın</p>
                    <code className="text-gray-400">
                      &lt;script src="https://apps.elfsight.com/p/platform.js" defer&gt;&lt;/script&gt;<br />
                      &lt;div class="elfsight-app-[WIDGET_ID]"&gt;&lt;/div&gt;
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-black/40">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:border-[#c5a059]/50 transition-colors">
              <div className="bg-[#c5a059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gift className="text-[#c5a059] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Sürpriz Hediyeler</h4>
              <p className="text-secondary text-sm">Her çevirişte farklı bir indirim veya hediye kazanma şansı seni bekliyor.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-[#c5a059]/50 transition-colors">
              <div className="bg-[#c5a059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="text-[#c5a059] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Anında Kullanım</h4>
              <p className="text-secondary text-sm">Kazandığın kodları web sitemizde anında kullanarak alışverişe başlayabilirsin.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-[#c5a059]/50 transition-colors">
              <div className="bg-[#c5a059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-[#c5a059] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Premium Kalite</h4>
              <p className="text-secondary text-sm">Ayyıldız Outdoor güvencesiyle en kaliteli ekipmanlara en uygun fiyatlarla sahip ol.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <img src="/logo.png" alt="Ayyıldız Outdoor" className="h-8 w-auto mb-4 opacity-70" />
              <p className="text-secondary text-sm">© 2026 Ayyıldız Outdoor. Tüm Hakları Saklıdır.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="p-3 glass-card hover:bg-[#c5a059]/10 transition-colors rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass-card hover:bg-[#c5a059]/10 transition-colors rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass-card hover:bg-[#c5a059]/10 transition-colors rounded-full">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
