import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Games from '@/components/sections/Games';
import Devlog from '@/components/sections/Devlog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Games />
      <Devlog />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-xl font-bold text-white font-mono">
                IMMORTAL RAGDOLL GAMES
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Immortal Ragdoll Games. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
