import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-black text-white relative overflow-hidden">
      {/* Background decorations with animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rotate-12 border-4 border-white animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-pink-400 -rotate-12 rounded-full border-4 border-white animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-400 rotate-45 border-4 border-white animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-lime-400 -rotate-12 border-4 border-white animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-purple-400 rotate-12 rounded-lg border-4 border-white animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-orange-400 -rotate-6 rounded-full border-4 border-white animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">The Card Goat</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Games</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Disney Lorcana</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Gundam CW</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Riftbound</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Future Titles</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/NddrhpVZNP" target="_blank" className="hover:text-yellow-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Twitch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} The Card Goat. All rights reserved.</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-2xl hover:text-pink-400 transition-colors">🐐</a>
            <a href="#" className="text-2xl hover:text-lime-400 transition-colors">🃏</a>
            <a href="#" className="text-2xl hover:text-cyan-400 transition-colors">🎮</a>
            <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">🎲</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
