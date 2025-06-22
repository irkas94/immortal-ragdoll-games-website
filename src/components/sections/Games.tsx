'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Play, Download } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Echoes of Darkness",
      pitch: "Hollywood VFX expertise meets indie horror innovation in this cinematic nightmare.",
      status: "In Development",
      releaseDate: "Coming Soon",
      screenshots: [
        "/placeholder-screenshot-1.jpg",
        "/placeholder-screenshot-2.jpg", 
        "/placeholder-screenshot-3.jpg"
      ],
      trailer: "https://vimeo.com/854224033",
      wishlist: "https://linktr.ee/immortalragdollgames",
      description: "Experience horror like never before with Hollywood-quality visual effects. From the VFX artist behind Shang-Chi, Sonic the Hedgehog, and Cats comes a new level of indie gaming excellence.",
      features: [
        "Hollywood-quality VFX",
        "Award-winning artistry", 
        "Cinematic storytelling",
        "Professional-grade effects"
      ],
      isMainProject: true
    },
    {
      title: "Deadlight Manor",
      pitch: "A stylized survival horror where reality bends and nightmares take form.",
      status: "In Development", 
      releaseDate: "2026",
      screenshots: [
        "/placeholder-concept-1.jpg",
        "/placeholder-concept-2.jpg"
      ],
      trailer: null,
      wishlist: null,
      description: "Navigate through a twisted manor where each room holds secrets darker than the last. Enhanced with professional VFX techniques for maximum immersion.",
      features: [
        "Stylized horror aesthetic",
        "Professional VFX integration",
        "Psychological survival mechanics",
        "Immersive sound design"
      ]
    }
  ];

  return (
    <section id="games" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OUR GAMES
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each game is crafted with passion, precision, and a healthy dose of madness.
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="space-y-20">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-green-400 transition-all duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Game Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {game.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-mono ${
                        game.status === 'In Development' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {game.status}
                      </span>
                    </div>
                    <p className="text-xl text-gray-300 mb-4 italic">
                      "{game.pitch}"
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {game.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {game.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Release Date */}
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>Expected Release: {game.releaseDate}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {game.wishlist && (
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Wishlist</span>
                      </motion.button>
                    )}
                    
                    {game.trailer && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-gray-600 hover:border-red-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
                      >
                        <Play className="w-5 h-5" />
                        <span>Trailer</span>
                      </motion.button>
                    )}

                    {game.status === 'Released' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Screenshots/Media */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    {/* Main Screenshot */}
                    <div className="bg-gray-800 rounded-lg h-64 md:h-80 flex items-center justify-center border border-gray-600 overflow-hidden">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <p className="text-gray-400">Screenshots Coming Soon</p>
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((thumb) => (
                        <div key={thumb} className="bg-gray-800 rounded h-20 flex items-center justify-center border border-gray-600">
                          <span className="text-gray-500 text-xs">Thumb {thumb}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">More Nightmares Coming Soon</h3>
          <p className="text-gray-300 mb-6">
            We're always cooking up new horrors. Stay tuned for announcements about future projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-2 px-6 rounded-lg transition-all duration-200"
          >
            Follow Our Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
