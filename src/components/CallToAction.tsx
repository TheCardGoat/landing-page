import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const navigateToDiscord = () => {
    window.open('https://discord.gg/NddrhpVZNP', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-lime-400 via-cyan-400 to-blue-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rotate-12 border-4 border-black"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white -rotate-12 rounded-full border-4 border-black"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rotate-45 border-4 border-black"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white -rotate-12 border-4 border-black"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white rotate-45 border-4 border-black"></div>
        <div className="absolute top-1/3 right-1/4 w-18 h-18 bg-white -rotate-12 rounded-full border-4 border-black"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Card className="p-12 bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="space-y-8">
            {/* Main CTA Header */}
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
                READY TO BE THE
              </h2>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 border-6 border-black p-4 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
                <h2 className="text-5xl md:text-7xl font-black text-white">
                  GOAT? 🐐
                </h2>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-yellow-300 border-4 border-black p-6 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl md:text-2xl font-bold text-black">
                Join thousands of card enthusiasts who've already discovered 
                the most epic trading card community on the internet!
              </p>
            </div>
            
            {/* Features list */}
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-pink-300 border-4 border-black p-4 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="font-bold text-lg text-black">Instant access to all tools</span>
                </div>
              </div>
              <div className="bg-cyan-300 border-4 border-black p-4 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💎</span>
                  <span className="font-bold text-lg text-black">Premium features included</span>
                </div>
              </div>
              <div className="bg-lime-300 border-4 border-black p-4 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="font-bold text-lg text-black">Expert strategies & guides</span>
                </div>
              </div>
              <div className="bg-purple-300 border-4 border-black p-4 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span className="font-bold text-lg text-black">Exclusive tournaments</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-6">
              <div className="bg-purple-400 border-4 border-black p-4 transform rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
                <p className="text-2xl font-black text-black">BECOME A CARD GOAT TODAY! 🃏</p>
              </div>
            
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white font-black text-3xl px-16 py-8 border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105"
                onClick={navigateToDiscord}
              >
                JOIN THE HERD NOW! 🐐🚀
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-100 text-black font-bold text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-all duration-200"
                  onClick={navigateToDiscord}
                >
                  Free Forever 🆓
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-100 text-black font-bold text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all duration-200"
                  onClick={navigateToDiscord}
                >
                  Learn More 📚
                </Button>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 border-t-4 border-black border-dashed">
              <p className="text-lg font-bold text-gray-700 mb-4">
                🔒 Trusted by 41,000+ Card Goats worldwide
              </p>
              <div className="flex justify-center gap-8 text-4xl">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
