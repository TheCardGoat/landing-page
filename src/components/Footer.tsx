
import { Card } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rotate-12 border-4 border-white"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-pink-400 -rotate-12 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-400 rotate-45 border-4 border-white"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-lime-400 -rotate-12 border-4 border-white"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
              <h3 className="text-3xl font-black text-white mb-4">THE CARD GOAT</h3>
              <p className="text-lg font-semibold text-white/90 mb-4">
                The ultimate trading card community where legends are born and goats roam free! 🐐
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center text-xl rotate-12">
                  🐐
                </div>
                <div className="w-12 h-12 bg-cyan-400 border-4 border-black rounded-full flex items-center justify-center text-xl -rotate-12">
                  🃏
                </div>
                <div className="w-12 h-12 bg-lime-400 border-4 border-black rounded-full flex items-center justify-center text-xl rotate-12">
                  ⚡
                </div>
              </div>
            </Card>
          </div>
          
          {/* Quick Links */}
          <div>
            <Card className="p-6 bg-cyan-400 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform rotate-1 h-full">
              <h4 className="text-xl font-black text-black mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-bold text-black hover:text-gray-700 transition-colors">🏠 Home</a></li>
                <li><a href="#" className="font-bold text-black hover:text-gray-700 transition-colors">🔧 Tools</a></li>
                <li><a href="#" className="font-bold text-black hover:text-gray-700 transition-colors">👥 Community</a></li>
                <li><a href="#" className="font-bold text-black hover:text-gray-700 transition-colors">📚 Guides</a></li>
                <li><a href="#" className="font-bold text-black hover:text-gray-700 transition-colors">🏆 Tournaments</a></li>
              </ul>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div>
            <Card className="p-6 bg-yellow-400 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform -rotate-1 h-full">
              <h4 className="text-xl font-black text-black mb-4">GET IN TOUCH</h4>
              <ul className="space-y-2">
                <li className="font-bold text-black">📧 hello@thecardgoat.com</li>
                <li className="font-bold text-black">💬 Discord Server</li>
                <li className="font-bold text-black">📱 @eduardomoroni</li>
                <li className="font-bold text-black">🐐 24/7</li>
              </ul>
            </Card>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t-4 border-white border-dashed pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">
                © 2024 The Card Goat - All rights reserved
              </p>
              <p className="text-gray-300 font-semibold">
                Made with 💖 by goats, for goats!
              </p>
            </div>
            
            <div className="flex gap-4">
              <Card className="p-3 bg-pink-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <span className="text-xl">🐐</span>
              </Card>
              <Card className="p-3 bg-lime-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <span className="text-xl">🃏</span>
              </Card>
              <Card className="p-3 bg-cyan-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <span className="text-xl">⚡</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
