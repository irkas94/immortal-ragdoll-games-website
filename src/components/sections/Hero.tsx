'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden vhs-effect">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {/* Option 1: Static background with animated elements */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          {/* Option 2: When you have video, replace above with: */}
          {/* 
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="/path-to-poster-image.jpg"
          >
            <source src="/path-to-video.webm" type="video/webm" />
            <source src="/path-to-video.mp4" type="video/mp4" />
          </video>
          */}
          
          {/* Option 3: YouTube embed background (when ready) */}
          {/* 
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            allow="autoplay; encrypted-media"
          />
          */}
        </div>
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
            "We make games that hit like a bat full of nails."
          </motion.p>
          
          {/* Robert's Hollywood Credentials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 p-4 bg-gradient-to-r from-red-900/30 to-blue-900/30 backdrop-blur-sm border border-gray-700 rounded-lg"
          >
            <p className="text-lg text-yellow-400 font-semibold mb-2">
              🏆 Founded by Award-Winning VFX Artist Robert Alomar
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">
                🎬 Shang-Chi VFX
              </span>
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                🦔 Sonic the Hedgehog
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                🐱 Cats VFX
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Texas-based indie studio crafting stylized, emotional, character-driven 
            survival horror experiences using Unreal Engine and Hollywood-quality VFX expertise.
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
            ECHOES OF DARKNESS
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            A stylized horror experience where Hollywood VFX expertise meets indie gaming innovation. 
            Reality bends and nightmares take form with cinematic-quality visual effects.
          </p>
          
          {/* Placeholder for game screenshot/trailer */}
          <div className="bg-gray-800 rounded-lg h-64 md:h-80 mb-6 flex items-center justify-center border border-gray-600">
            <div className="text-center">
              <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-400">Official Teaser Available</p>
              <p className="text-gray-500 text-sm mt-2">Hollywood VFX meets Indie Horror</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://vimeo.com/854224033"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>WATCH TEASER</span>
            </motion.a>
            
            <motion.a
              href="https://linktr.ee/immortalragdollgames"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 hover:border-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>VIEW PORTFOLIO</span>
            </motion.a>
          </div>
        </motion.div>
          <div className="bg-gray-800 rounded-lg h-64 md:h-80 mb-6 flex items-center justify-center border border-gray-600">
            <div className="text-center">
              <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-400">Gameplay Trailer Coming Soon</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>WISHLIST NOW</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 hover:border-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>WATCH TRAILER</span>
            </motion.button>
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
