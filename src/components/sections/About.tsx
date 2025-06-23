'use client';

import { motion } from 'framer-motion';
import { Zap, Heart, Film, Award, ExternalLink, Play } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Hollywood Quality",
      description: "Bringing blockbuster film VFX expertise to indie gaming experiences."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Artistry",
      description: "Professional excellence earned through major film productions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion-Driven",
      description: "Every game is a labor of love, crafted with dedication and care."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Workflows",
      description: "Combining Unreal Engine with cutting-edge AI tools for innovative development."
    }
  ];

  const credentials = [
    {
      title: "Shang-Chi and the Legend of the Ten Rings",
      year: "2021",
      studio: "Marvel Studios",
      role: "Visual Effects Artist",
      description: "Contributed stunning visual effects to this groundbreaking Marvel superhero film."
    },
    {
      title: "Sonic the Hedgehog", 
      year: "2020",
      studio: "Paramount Pictures",
      role: "Visual Effects Artist",
      description: "Helped bring the beloved blue blur to life with cutting-edge VFX."
    },
    {
      title: "Cats",
      year: "2019", 
      studio: "Universal Pictures",
      role: "Visual Effects Artist",
      description: "Applied advanced VFX techniques in this ambitious musical adaptation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
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
            FROM HOLLYWOOD TO INDIE GAMING
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet Robert Alomar, the award-winning VFX artist bringing Hollywood expertise to indie game development
          </p>
        </motion.div>

        {/* Robert's Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">The Artist Behind the Magic</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Robert Alomar is an award-winning VFX artist who has contributed his exceptional 
                  artistry to some of Hollywood's biggest blockbuster films. With credits including 
                  Marvel's Shang-Chi, Sonic the Hedgehog, and Cats, Robert brings a level of 
                  professional excellence rarely seen in indie gaming.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Now channeling his passion into indie game development, Robert combines Hollywood 
                  expertise with cutting-edge AI-powered workflows to create stylized, emotional 
                  survival horror experiences that push the boundaries of indie gaming.
                </p>
                <blockquote className="border-l-4 border-red-500 pl-6 italic text-xl text-gray-200">
                  "We make games that hit like a bat full of nails - every pixel crafted with Hollywood precision."
                </blockquote>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-white font-bold text-lg mb-2">Professional Links</h4>
                  <div className="space-y-2">
                    <a href="https://robertalomar8.artstation.com/" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      ArtStation Portfolio
                    </a>
                    <a href="https://www.imdb.com/name/nm9475138/" target="_blank" rel="noopener noreferrer"
                       className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                      <Film className="w-4 h-4 mr-2" />
                      IMDB Profile
                    </a>
                    <a href="https://www.linkedin.com/in/robert-alomar-vfx/" target="_blank" rel="noopener noreferrer"
                       className="flex items-center text-green-400 hover:text-green-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hollywood Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Hollywood Film Credits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((credit, index) => (
              <motion.div
                key={credit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-all duration-300"
              >
                <div className="text-red-400 mb-3">
                  <Film className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{credit.title}</h4>
                <p className="text-green-400 font-mono text-sm mb-2">{credit.year} • {credit.studio}</p>
                <p className="text-yellow-400 text-sm mb-3">{credit.role}</p>
                <p className="text-gray-300 text-sm">{credit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Sets Us Apart</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center hover:border-red-400 transition-all duration-300"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Experience Gaming Excellence
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              When you play Robert's games, you're experiencing the passion and expertise of an artist 
              who has contributed to Hollywood's biggest films. This is indie gaming elevated to a new level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://tr.ee/taI19MRqa9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Deadlight Manor</span>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1CngO4NX7bTd-MMGr9OyGhVx7Qlq0Zliu/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 hover:border-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>VFX Reel</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
