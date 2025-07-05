
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced animated background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-lime-400 rotate-12 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-pink-500 -rotate-12 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-400 rotate-45 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-yellow-400 -rotate-12 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400 rotate-45 border-4 border-black animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Hero Card with enhanced animations */}
        <Card className="p-12 bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:scale-105 animate-fade-in">
          <div className="space-y-8">
            {/* Logo/Title with staggered animation */}
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black text-black mb-4 transform -rotate-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                THE CARD
              </h1>
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transform rotate-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                GOAR
              </h1>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rotate-12 border-4 border-black animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
            
            {/* Subtitle with animation */}
            <div className="bg-lime-300 border-4 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-2xl md:text-3xl font-bold text-black">
                🐐 The GOAT-est Trading Card Community! 🐐
              </p>
              <p className="text-lg md:text-xl text-gray-800 mt-2 font-semibold">
                Tools, Knowledge, and Epic Card Battles - All in One Herd!
              </p>
            </div>
            
            {/* CTA Buttons with staggered hover animations */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-black text-xl px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110"
              >
                JOIN THE HERD! 🚀
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-cyan-300 hover:bg-cyan-400 text-black font-black text-xl px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110"
              >
                EXPLORE TOOLS 🔧
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Floating stats with enhanced animations */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          <div className="bg-purple-400 border-4 border-black p-4 transform -rotate-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-black text-black">1000+</div>
            <div className="text-sm font-bold text-black">Card Goats</div>
          </div>
          <div className="bg-yellow-400 border-4 border-black p-4 transform rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-3xl font-black text-black">50K+</div>
            <div className="text-sm font-bold text-black">Cards Traded</div>
          </div>
          <div className="bg-green-400 border-4 border-black p-4 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="text-3xl font-black text-black">24/7</div>
            <div className="text-sm font-bold text-black">Community</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
