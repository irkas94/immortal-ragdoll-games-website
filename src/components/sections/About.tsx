'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Film, Award, ExternalLink } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Style > Realism",
      description: "We believe artistic vision trumps photorealism every time."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Hollywood Quality",
      description: "Bringing blockbuster film VFX expertise to indie gaming."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Indie Grit",
      description: "Small team, big dreams. We do more with less and make it count."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Chaos & Beauty",
      description: "We believe even chaos can be beautiful when crafted with purpose."
    }
  ];

  const teamMembers = [
    {
      name: "Robert Alomar",
      role: "Founder & VFX Director",
      description: "Award-winning VFX artist with Hollywood blockbuster credits including Shang-Chi, Sonic the Hedgehog, and Cats.",
      image: "/placeholder-dev.jpg",
      links: [
        { name: "ArtStation", url: "https://robertalomar8.artstation.com/" },
        { name: "IMDB", url: "https://www.imdb.com/name/nm9475138/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/robert-alomar-vfx/" }
      ]
    },
    {
      name: "Development Team", 
      role: "Programming & Design",
      description: "Crafting the technical foundation that brings Robert's artistic vision to life.",
      image: "/placeholder-artist.jpg"
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
            THE DEVS & THE DRIVE
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Studio Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Origin Story</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Born from a passion for stylized horror and cutting-edge technology, 
                  Immortal Ragdoll Games emerged from the vision of Robert Alomar, an 
                  award-winning VFX artist with Hollywood blockbuster credits.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  After contributing his expertise to major films like Shang-Chi, Sonic the Hedgehog, 
                  and Cats, Robert founded our studio with one goal: bring that same level of 
                  professional excellence to indie gaming.
                </p>
                <blockquote className="border-l-4 border-red-500 pl-6 italic text-xl text-gray-200">
                  "We believe even chaos can be beautiful when crafted with Hollywood precision."
                </blockquote>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center">
                    <Film className="w-5 h-5 mr-2 text-yellow-400" />
                    Hollywood Film Credits
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-red-400" />
                      Shang-Chi and the Legend of the Ten Rings (2021)
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-400" />
                      Sonic the Hedgehog (2020)
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      Cats (2019)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center hover:border-green-400 transition-all duration-300"
              >
                <div className="text-green-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet the Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600">
                    {member.name === "Robert Alomar" ? (
                      <Award className="w-8 h-8 text-yellow-400" />
                    ) : (
                      <span className="text-gray-400 text-sm">Photo</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-green-400 font-mono text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{member.description}</p>
                
                {/* Professional Links for Robert */}
                {member.links && (
                  <div className="space-y-2">
                    {member.links.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
