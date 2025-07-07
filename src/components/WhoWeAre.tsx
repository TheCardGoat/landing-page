import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  const navigateToLorcanito = () => {
    window.open('https://lorcanito.com/', '_blank');
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-purple-400 rotate-12 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-pink-500 -rotate-12 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all duration-300">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              WHO WE ARE
            </h2>
            <p className="text-xl font-bold text-gray-700 max-w-3xl mx-auto">
              We are the team behind <span className="text-blue-600 underline cursor-pointer hover:text-blue-800" onClick={navigateToLorcanito}>Lorcanito.com</span>, a community driven table top simulator for Disney Lorcana. 
              We're taking our learning and creating an open-source project that can be applied to many card games.
            </p>
            <Button 
              onClick={navigateToLorcanito}
              className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              Visit Lorcanito.com 🧙‍♂️
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 bg-lime-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-2xl font-black text-black mb-4">How We Started</h3>
              <p className="text-lg font-semibold text-gray-800">
                This community was founded to solve a simple problem: not everyone has access to a local TCG scene. 
                We believe that your location or life circumstances shouldn't be a barrier to enjoying and mastering 
                the games you love. The Card Goat was created to be the online home for every TCG player looking 
                for a place to practice, learn, and connect.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-cyan-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-6">💪</div>
              <h3 className="text-2xl font-black text-black mb-4">Why You Should Join</h3>
              <p className="text-lg font-semibold text-gray-800">
                We are a non-profit, fan-based community dedicated to helping you get better. 
                We provide the tools, resources, and a supportive space for players of all skill 
                levels to improve their game.
                <span className="block mt-4 bg-white border-4 border-black p-3 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black">🏆 Success Story:</span> We've helped busy parents, working professionals, and players without local gaming communities transform into regional tournament champions!
                </span>
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-yellow-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-black text-black mb-4">Our Roadmap</h3>
              <div className="text-lg font-semibold text-gray-800">
                <p className="mb-4">
                  We're just getting started! Our community is building momentum as we develop tools for popular trading card games.
                </p>
                <div className="bg-white border-4 border-black p-3 mb-4 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-bold">Target: Early 2026</p>
                  <p>Fully functional tools for Disney Lorcana, Gundam, and Riftbound</p>
                </div>
                <p className="mb-2">Future considerations include:</p>
                <p className="mb-4">Grand Archive, One Piece, Alpha Clash, Flesh and Blood</p>
                <p className="italic font-bold text-black mt-4">Join us early and help shape our community! 🐐</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 