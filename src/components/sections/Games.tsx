'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Play, Download, Film, Award } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Deadlight Manor",
      pitch: "Stylized survival horror that hits like a bat full of nails - combining Hollywood VFX with AI-powered development.",
      status: "In Development",
      releaseDate: "Coming Soon",
      screenshots: [
        "/images/screenshots/2025-06-17 15-31-12.mp4.00_00_01_58.Still001.jpg",
        "/images/screenshots/2025-06-17 15-31-12.mp4.00_00_14_09.Still002.jpg", 
        "/images/screenshots/2025-06-17 15-31-12.mp4.00_00_20_52.Still003.jpg"
      ],
      trailer: "https://tr.ee/taI19MRqa9",
      wishlist: "https://drive.google.com/file/d/1CngO4NX7bTd-MMGr9OyGhVx7Qlq0Zliu/view",
      description: "Our flagship survival horror experience combining Hollywood VFX expertise with cutting-edge AI-powered workflows. Stylized, emotional, and unapologetically intense - this is indie gaming elevated to new heights.",
      features: [
        "Hollywood-quality VFX",
        "AI-powered development workflows", 
        "Stylized emotional storytelling",
        "Unreal Engine powered"
      ],
      isMainProject: true
    },
    {
      title: "Future Projects",
      pitch: "More incredible gaming experiences are in development, each showcasing Robert's unique artistic vision.",
      status: "Pre-Production",
      releaseDate: "TBA",
      screenshots: [
        "/images/dream/concept-art/Gioellez_2D_illustration_art_by_Hayao_Miyazaki_a_boy_standing_i_297c8102-134e-4fdc-a167-39a0d40de69f.png",
        "/images/deadlight-manor/concept-art/BoomRat_Concept_01.png"
      ],
      trailer: null,
      wishlist: null,
      description: "Robert continues to push the boundaries of indie gaming, bringing his Hollywood expertise to create experiences that are both visually stunning and emotionally engaging.",
      features: [
        "Innovative VFX techniques",
        "Professional quality standards",
        "Unique artistic vision",
        "Passion-driven development"
      ],
      isMainProject: false
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
            HOLLYWOOD MEETS INDIE GAMING
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience games crafted by an award-winning VFX artist with Hollywood blockbuster credentials.
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
              className={`backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-300 ${
                game.isMainProject 
                  ? 'bg-gradient-to-r from-red-900/40 to-blue-900/40 border-red-500 hover:border-red-400' 
                  : 'bg-gray-900/60 border-gray-700 hover:border-green-400'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Game Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      {game.isMainProject && (
                        <div className="flex items-center space-x-2">
                          <Film className="w-6 h-6 text-yellow-400" />
                          <Award className="w-6 h-6 text-yellow-400" />
                        </div>
                      )}
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
                    {game.isMainProject && (
                      <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-300 text-sm font-semibold">
                          🏆 Hollywood VFX + AI-Powered Workflows = Games That Hit Like a Bat Full of Nails
                        </p>
                      </div>
                    )}
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
                        <span>VFX Reel</span>
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
                      <img 
                        src={game.screenshots[0]} 
                        alt={`${game.title} screenshot`}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (sibling) sibling.style.display = 'flex';
                        }}
                      />
                      <div className="text-center hidden">
                        <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <p className="text-gray-400">Loading Screenshot...</p>
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-3 gap-2">
                      {game.screenshots.slice(0, 3).map((screenshot, thumbIndex) => (
                        <div key={thumbIndex} className="bg-gray-800 rounded h-20 flex items-center justify-center border border-gray-600 overflow-hidden">
                          <img 
                            src={screenshot} 
                            alt={`${game.title} thumbnail ${thumbIndex + 1}`}
                            className="w-full h-full object-cover rounded"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                              if (sibling) sibling.style.display = 'block';
                            }}
                          />
                          <span className="text-gray-500 text-xs hidden">Thumb {thumbIndex + 1}</span>
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
