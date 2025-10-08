import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export default function Hero() {
  const images = [
    '/hero/img1.png',
    '/hero/img2.png',
    '/hero/img3.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Preload all images to prevent black screen gap
    const preloadImages = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,211,183,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(123,97,255,0.15),transparent_50%)]" />
      </div>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${image})`,
            zIndex: index === currentImage ? 1 : 0,
          }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: index === currentImage ? 1.05 : 1,
            opacity: index === currentImage ? 0.6 : 0,
          }}
          transition={{
            scale: { duration: 3, ease: "easeOut" },
            opacity: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full"></div>
        </motion.div>
      ))}
      
      {/* Floating crypto symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">₿</div>
        <div className="absolute top-40 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '150ms' }}>Ξ</div>
        <div className="absolute bottom-32 left-1/4 text-4xl opacity-10 animate-pulse" style={{ animationDelay: '300ms' }}>◊</div>
        <div className="absolute bottom-20 right-1/3 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '500ms' }}>⟠</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 
            mb-6 mt-14 md:mt-0">
          <Zap size={16} className="text-primary animate-pulse" />
          <span className="text-sm text-white font-medium">Plateforme 100% française 🇫🇷</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
          Maîtrise la crypto
          <br />
          <span className="text-white">
            facilement
          </span>
        </h1>
        <p className="text-base md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          La première plateforme e-learning francophone pour comprendre Bitcoin, Ethereum, la blockchain et le Web3 étape par étape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" 
              className="text-lg px-10 py-4 h-auto group
                  w-4/5 md:w-auto" asChild>
            <a href="#waitlist">
              Commencer gratuitement
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
          <Button variant="outline" size="lg" 
              className="text-lg px-10 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20
                w-4/5 md:w-auto"
                 asChild>
            <a href="#demo" className="flex items-center gap-2">
              <Play size={20} />
              Voir la démo
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4+</div>
            <div className="text-sm text-white/70">Modules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-white/70">Leçons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-white/70">Français</div>
          </div>
        </div>
      </div>
    </section>
  )
}