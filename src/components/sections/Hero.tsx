'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Award, Film } from 'lucide-react';

const Hero = () => {
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  img.style.display = 'none';
  const parent = img.parentElement;
  if (parent) {
    parent.innerHTML += '<div class="bg-gray-800 flex items-center justify-center h-full text-gray-500">Image Loading...</div>';
  }
};

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden vhs-effect">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="/images/logos/immortal-ragdoll-logo.jpg"
        >
          <source src="/videos/skyline-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Studio Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 
            className="glitch text-4xl md:text-6xl lg:text-7xl font-black mb-6"
            data-text="IMMORTAL RAGDOLL"
          >
            IMMORTAL RAGDOLL
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-mono mb-4"
          >
            "We Make Games That Hit Like a Bat Full of Nails"
          </motion.p>
        </motion.div>

        {/* Hollywood Credentials Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-red-900/80 to-blue-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Film className="w-8 h-8 text-yellow-400" />
            <Award className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Award-Winning VFX Artist
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Robert Alomar • Hollywood Film Credits Include:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">
              🎬 Shang-Chi and the Legend of the Ten Rings
            </span>
            <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
              🦔 Sonic the Hedgehog
            </span>
            <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
              🐱 Cats
            </span>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Texas-based indie studio crafting stylized, emotional, character-driven survival horror 
            experiences using Unreal Engine and AI-powered workflows. From the award-winning VFX artist 
            behind major Hollywood blockbusters.
          </p>
        </motion.div>

        {/* Current Project Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DEADLIGHT MANOR
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Our flagship survival horror experience combining Hollywood VFX expertise with 
            cutting-edge AI-powered development workflows. Stylized, emotional, and unapologetically intense.
          </p>
          
          {/* Game trailer preview */}
          <div className="bg-gray-800 rounded-lg h-64 md:h-80 mb-6 flex items-center justify-center border border-gray-600 overflow-hidden relative group">
            <video 
              className="w-full h-full object-cover rounded-lg"
              poster="/images/screenshots/2025-06-17 15-31-12.mp4.00_00_01_58.Still001.jpg"
              muted
            >
              <source src="/videos/deadlight-manor-trailer.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
              <div className="text-center">
                <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <p className="text-gray-200 font-semibold">Official Teaser Available</p>
                <p className="text-gray-400 text-sm mt-2">Hollywood VFX meets Indie Gaming</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://tr.ee/taI19MRqa9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 107, 107, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>WATCH OFFICIAL TEASER</span>
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1CngO4NX7bTd-MMGr9OyGhVx7Qlq0Zliu/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 hover:border-green-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>VFX REEL</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-green-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
