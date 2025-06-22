'use client';

import { motion } from 'framer-motion';
import { Twitter, Download, ExternalLink, Film, Palette, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Twitter/X',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/ImmortalRagdoll',
      color: 'hover:text-blue-400'
    },
    {
      name: 'ArtStation',
      icon: <Palette className="w-6 h-6" />,
      url: 'https://robertalomar8.artstation.com/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/robert-alomar-vfx/',
      color: 'hover:text-green-400'
    },
    {
      name: 'IMDB',
      icon: <Film className="w-6 h-6" />,
      url: 'https://www.imdb.com/name/nm9475138/',
      color: 'hover:text-yellow-400'
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
            PRESS & CONTACT
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate, cover our games, or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">General Inquiries</h4>
                  <p className="text-gray-300">contact@immortalragdoll.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Press & Media</h4>
                  <p className="text-gray-300">press@immortalragdoll.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Business & Partnerships</h4>
                  <p className="text-gray-300">business@immortalragdoll.com</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg border border-gray-700 hover:border-gray-500`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Press Kit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Press Kit</h3>
              
              <p className="text-gray-300 mb-6">
                Everything you need to cover Immortal Ragdoll Games and our projects.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div>
                    <h4 className="text-white font-semibold">Studio Assets</h4>
                    <p className="text-gray-400 text-sm">Logos, photos, bios</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div>
                    <h4 className="text-white font-semibold">Deadlight Manor Kit</h4>
                    <p className="text-gray-400 text-sm">Screenshots, trailer, info</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
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
