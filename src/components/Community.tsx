import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Community = () => {
  const navigateToDiscord = () => {
    window.open('https://discord.gg/NddrhpVZNP', '_blank');
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rotate-12 border-8 border-black"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white -rotate-12 rounded-full border-8 border-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rotate-45 border-8 border-black"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Community info */}
          <div className="space-y-8">
            <Card className="p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                JOIN THE GOAT HERD! 🐐
              </h2>
              <p className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
                We're not just any community - we're the GOAT community! 
                Whether you're a card-slinging veteran or a fresh-faced kid, 
                there's a place for you in our herd!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-lime-400 border-2 border-black transform rotate-45"></div>
                  <span className="font-bold text-lg">Online practice sessions and matches</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-pink-400 border-2 border-black transform rotate-45"></div>
                  <span className="font-bold text-lg">Expert strategy guides</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-cyan-400 border-2 border-black transform rotate-45"></div>
                  <span className="font-bold text-lg">Friendly trading environment</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-yellow-400 border-2 border-black transform rotate-45"></div>
                  <span className="font-bold text-lg">24/7 support from goat experts</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right side - Testimonials */}
          <div className="space-y-6">
            <Card className="p-6 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-pink-500 border-4 border-black rounded-full flex items-center justify-center text-2xl">
                  🐐
                </div>
                <div>
                  <p className="font-bold text-lg text-black mb-2">
                    "This community is absolutely GOATED! I went from noob to tournament champion in 3 months!"
                  </p>
                  <p className="font-semibold text-gray-700">- CardMaster2000</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-cyan-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-500 border-4 border-black rounded-full flex items-center justify-center text-2xl">
                  🃏
                </div>
                <div>
                  <p className="font-bold text-lg text-black mb-2">
                    "The tools here are insane! My deck building game has never been stronger. BAAAAAH!"
                  </p>
                  <p className="font-semibold text-gray-700">- DeckBuilderPro</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-lime-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-500 border-4 border-black rounded-full flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <p className="font-bold text-lg text-black mb-2">
                    "Found my trading soulmate here! The community is so welcoming and fun!"
                  </p>
                  <p className="font-semibold text-gray-700">- TradeQueen</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black font-black text-2xl px-12 py-6 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            onClick={navigateToDiscord}
          >
            BECOME A CARD GOAT TODAY! 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
