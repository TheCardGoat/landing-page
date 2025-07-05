
import { Card } from '@/components/ui/card';

const TCGGames = () => {
  const supportedGames = [
    {
      name: "Pokemon TCG",
      status: "LIVE",
      description: "Catch 'em all with our deck builder!",
      icon: "⚡",
      color: "bg-yellow-400",
      delay: "0s"
    },
    {
      name: "Magic: The Gathering",
      status: "LIVE", 
      description: "Planeswalker-approved tools!",
      icon: "🔮",
      color: "bg-purple-400",
      delay: "0.1s"
    },
    {
      name: "Yu-Gi-Oh!",
      status: "LIVE",
      description: "It's time to d-d-d-duel!",
      icon: "👁️",
      color: "bg-blue-400",
      delay: "0.2s"
    }
  ];

  const plannedGames = [
    {
      name: "Digimon Card Game",
      status: "COMING SOON",
      description: "Digital monsters, digital tools!",
      icon: "🦾",
      color: "bg-orange-400",
      delay: "0.3s"
    },
    {
      name: "One Piece TCG",
      status: "COMING SOON",
      description: "Set sail for the Grand Line!",
      icon: "🏴‍☠️",
      color: "bg-red-400",
      delay: "0.4s"
    },
    {
      name: "Flesh and Blood",
      status: "COMING SOON",
      description: "Epic battles await!",
      icon: "⚔️",
      color: "bg-green-400",
      delay: "0.5s"
    },
    {
      name: "Dragon Ball Super",
      status: "PLANNED",
      description: "Power up your deck game!",
      icon: "🐉",
      color: "bg-cyan-400",
      delay: "0.6s"
    },
    {
      name: "Lorcana",
      status: "PLANNED",
      description: "Disney magic meets strategy!",
      icon: "✨",
      color: "bg-pink-400",
      delay: "0.7s"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-white rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              TCG UNIVERSE 🌟
            </h2>
            <p className="text-xl font-bold text-gray-700">
              Every card game you love, all in one GOAT-tier platform!
            </p>
          </Card>
        </div>

        {/* Currently Supported Games */}
        <div className="mb-16">
          <Card className="p-6 bg-lime-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-8 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-3xl font-black text-black text-center">
              🚀 LIVE & READY TO GOAT! 🚀
            </h3>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportedGames.map((game, index) => (
              <Card 
                key={index}
                className={`p-8 ${game.color} border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ 
                  animationDelay: game.delay,
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'
                }}
              >
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: game.delay }}>
                    {game.icon}
                  </div>
                  <div className="bg-green-500 border-4 border-black px-4 py-2 inline-block transform -rotate-1">
                    <span className="text-sm font-black text-white">{game.status}</span>
                  </div>
                  <h4 className="text-2xl font-black text-black mb-3">
                    {game.name}
                  </h4>
                  <p className="text-lg font-semibold text-gray-800">
                    {game.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon & Planned Games */}
        <div>
          <Card className="p-6 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-8 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-3xl font-black text-black text-center">
              🔮 MORE GOAT-NESS INCOMING! 🔮
            </h3>
          </Card>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedGames.map((game, index) => (
              <Card 
                key={index}
                className={`p-6 ${game.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-0 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 animate-fade-in opacity-80 hover:opacity-100`}
                style={{ 
                  animationDelay: game.delay,
                  transform: index % 3 === 0 ? 'rotate(-1deg)' : index % 3 === 1 ? 'rotate(1deg)' : 'rotate(-0.5deg)'
                }}
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl mb-3 animate-pulse" style={{ animationDelay: game.delay }}>
                    {game.icon}
                  </div>
                  <div className={`${game.status === 'COMING SOON' ? 'bg-orange-500' : 'bg-gray-500'} border-3 border-black px-3 py-1 inline-block transform -rotate-1`}>
                    <span className="text-xs font-black text-white">{game.status}</span>
                  </div>
                  <h4 className="text-xl font-black text-black mb-2">
                    {game.name}
                  </h4>
                  <p className="text-md font-semibold text-gray-800">
                    {game.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
            <p className="text-2xl font-black text-black mb-4">
              Don't see your favorite TCG? 🤔
            </p>
            <p className="text-lg font-bold text-gray-700">
              Let us know and we'll add it to the herd! Every goat's voice matters! 📢
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TCGGames;
