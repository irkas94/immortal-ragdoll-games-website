'use client';

import { motion } from 'framer-motion';
import { Calendar, Image, Code, Zap } from 'lucide-react';

const Devlog = () => {
  const devlogPosts = [
    {
      title: "AI-Powered VFX Pipeline",
      date: "December 2024",
      category: "Tech",
      icon: <Zap className="w-6 h-6" />,
      preview: "How we're combining Hollywood VFX expertise with cutting-edge AI workflows to create stunning visual effects faster than ever.",
      image: "/images/deadlight-manor/concept-art/BoomRat_Concept_01.png",
      tags: ["AI", "VFX", "Unreal Engine"]
    },
    {
      title: "Deadlight Manor: Visual Style Evolution",
      date: "November 2024", 
      category: "Art",
      icon: <Image className="w-6 h-6" />,
      preview: "From concept to reality - see how our stylized horror aesthetic came to life through iterative design and Hollywood-grade attention to detail.",
      image: "/images/deadlight-manor/concept-art/TheBoundEmerges.png",
      tags: ["Art Direction", "Horror", "Stylized"]
    },
    {
      title: "Behind the Code: Survival Mechanics",
      date: "October 2024",
      category: "Development", 
      icon: <Code className="w-6 h-6" />,
      preview: "Deep dive into the systems that make survival feel visceral and meaningful in our horror experience.",
      image: "/images/screenshots/2025-06-17 15-31-12.mp4.00_00_01_58.Still001.jpg",
      tags: ["Gameplay", "Systems", "Horror"]
    }
  ];

  return (
    <section id="devlog" className="py-20 bg-black/20">
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
            BEHIND THE SCENES
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparency in development - see how we craft games that hit like a bat full of nails
          </p>
        </motion.div>

        {/* Devlog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devlogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-red-400 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><div class="text-gray-500">Coming Soon</div></div>';
                    }
                  }}
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-red-400">
                      {post.icon}
                    </div>
                    <span className="text-sm text-gray-400 font-mono">{post.category}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{post.preview}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-600/20 hover:bg-red-600/40 text-red-400 font-semibold py-2 px-4 rounded-lg border border-red-600/30 hover:border-red-500 transition-all duration-200"
                >
                  Read Full Post
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">More Dev Insights Coming Soon</h3>
          <p className="text-gray-300 mb-6">
            We're building in public - follow our journey as we craft stylized horror experiences with Hollywood precision.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-2 px-6 rounded-lg transition-all duration-200"
          >
            Subscribe for Updates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Devlog;