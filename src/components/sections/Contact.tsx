'use client';

import { motion } from 'framer-motion';
import { Twitter, ExternalLink, Film, Palette, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Twitter/X',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/ImmortalRagdoll',
      color: 'hover:text-blue-400',
      description: 'Follow for game updates'
    },
    {
      name: 'ArtStation',
      icon: <Palette className="w-6 h-6" />,
      url: 'https://robertalomar8.artstation.com/',
      color: 'hover:text-blue-400',
      description: 'Professional VFX portfolio'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/robert-alomar-vfx/',
      color: 'hover:text-green-400',
      description: 'Professional networking'
    },
    {
      name: 'IMDB',
      icon: <Film className="w-6 h-6" />,
      url: 'https://www.imdb.com/name/nm9475138/',
      color: 'hover:text-yellow-400',
      description: 'Hollywood film credits'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/80">
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
            CONNECT WITH ROBERT
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow the journey of an award-winning VFX artist bringing Hollywood expertise to indie gaming.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Background</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-red-900/30 to-blue-900/30 rounded-lg border border-gray-600">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center">
                    <Film className="w-5 h-5 mr-2" />
                    Hollywood Film Credits
                  </h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Shang-Chi and the Legend of the Ten Rings (2021)</li>
                    <li>• Sonic the Hedgehog (2020)</li>
                    <li>• Cats (2019)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Current Focus</h4>
                  <p className="text-gray-300">Indie Game Development with Hollywood-quality VFX</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Specializations</h4>
                  <p className="text-gray-300">Real-time VFX, Stylized Effects, Award-winning Artistry</p>
                </div>
              </div>

              {/* Professional Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Professional Links</h4>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-all duration-200 p-3 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-800/30`}
                    >
                      {social.icon}
                      <div>
                        <span className="font-semibold">{social.name}</span>
                        <p className="text-sm text-gray-500">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Current Projects & Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Portfolio & Projects</h3>
              
              <p className="text-gray-300 mb-6">
                Explore Robert's professional work and current gaming projects.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="https://tr.ee/taI19MRqa9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-red-800/50 to-red-900/50 rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-200"
                >
                  <div>
                    <h4 className="text-white font-semibold">Deadlight Manor</h4>
                    <p className="text-gray-300 text-sm">Official Teaser Trailer</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-red-400" />
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1CngO4NX7bTd-MMGr9OyGhVx7Qlq0Zliu/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-green-500 transition-all duration-200"
                >
                  <div>
                    <h4 className="text-white font-semibold">Stylized VFX Reel</h4>
                    <p className="text-gray-300 text-sm">Hollywood-quality visual effects</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-green-400" />
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1yMtiCz6DnOcb-r2A10ook015wUdkp20i/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-200"
                >
                  <div>
                    <h4 className="text-white font-semibold">Real-Time VFX Reel</h4>
                    <p className="text-gray-300 text-sm">Live VFX demonstrations</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </motion.a>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Download Full Press Kit</span>
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">2024</div>
                  <div className="text-gray-400 text-sm">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400">Texas</div>
                  <div className="text-gray-400 text-sm">Based</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">2+</div>
                  <div className="text-gray-400 text-sm">Team Size</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">1</div>
                  <div className="text-gray-400 text-sm">Games in Dev</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
