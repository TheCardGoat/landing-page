import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const TCGGames = () => {
  const { t } = useTranslation('tcggames');

  const supportedGames = [
    {
      name: "Disney Lorcana",
      icon: "✨",
      color: "bg-purple-400",
      delay: "0s"
    },
    {
      name: "Gundam CW",
      icon: "🤖",
      color: "bg-cyan-400",
      delay: "0.2s"
    },
    {
      name: "Riftbound",
      icon: "⚡",
      color: "bg-lime-400",
      delay: "0.4s"
    }
  ];

  const comingSoonGames = [
    {
      name: "Grand Archive",
      icon: "📚",
      color: "bg-yellow-400",
      delay: "0.6s"
    },
    {
      name: "One Piece",
      icon: "⛵",
      color: "bg-pink-400",
      delay: "0.8s"
    },
    {
      name: "Alpha Clash",
      icon: "🎭",
      color: "bg-orange-400",
      delay: "1s"
    }
  ];

  const plannedGames = [
    {
      name: "Flesh and Blood",
      icon: "⚔️",
      color: "bg-red-400",
      delay: "1.2s"
    },
    {
      name: "Your Suggestion",
      icon: "💡",
      color: "bg-indigo-400",
      delay: "1.4s"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-white rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white -rotate-6 rounded-lg animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-14 h-14 bg-white rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white -rotate-12 rounded-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-10 h-10 bg-white rotate-12 animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              {t('sectionTitle')}
            </h2>
            <p className="text-xl font-bold text-gray-700">
              {t('sectionSubtitle')}
            </p>
          </Card>
        </div>

        {/* Currently Supported Games */}
        <div className="mb-16">
          <Card className="p-6 bg-lime-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-8 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-3xl font-black text-black text-center">
              {t('liveGamesTitle')}
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
                    <span className="text-sm font-black text-white">{t(`supportedGames.${index}.status`)}</span>
                  </div>
                  <h4 className="text-2xl font-black text-black mb-3">
                    {game.name}
                  </h4>
                  <p className="text-lg font-semibold text-gray-800">
                    {t(`supportedGames.${index}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon & Planned Games */}
        <div>
          <Card className="p-6 bg-pink-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-8 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-3xl font-black text-black text-center">
              {t('futureGamesTitle')}
            </h3>
          </Card>
          
          {/* Coming Soon Games */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {comingSoonGames.map((game, index) => (
              <Card 
                key={index}
                className={`p-8 ${game.color} border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ 
                  animationDelay: game.delay,
                  transform: index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'
                }}
              >
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4 animate-pulse" style={{ animationDelay: game.delay }}>
                    {game.icon}
                  </div>
                  <div className="bg-blue-500 border-4 border-black px-4 py-2 inline-block transform rotate-1">
                    <span className="text-sm font-black text-white">{t(`comingSoonGames.${index}.status`)}</span>
                  </div>
                  <h4 className="text-2xl font-black text-black mb-3">
                    {game.name}
                  </h4>
                  <p className="text-lg font-semibold text-gray-800">
                    {t(`comingSoonGames.${index}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Planned Games */}
          <div className="grid md:grid-cols-2 gap-8">
            {plannedGames.map((game, index) => (
              <Card 
                key={index}
                className={`p-8 ${game.color} border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ 
                  animationDelay: game.delay,
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'
                }}
              >
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4 animate-pulse" style={{ animationDelay: game.delay }}>
                    {game.icon}
                  </div>
                  <div className="bg-purple-500 border-4 border-black px-4 py-2 inline-block transform -rotate-1">
                    <span className="text-sm font-black text-white">{t(`plannedGames.${index}.status`)}</span>
                  </div>
                  <h4 className="text-2xl font-black text-black mb-3">
                    {game.name}
                  </h4>
                  <p className="text-lg font-semibold text-gray-800">
                    {t(`plannedGames.${index}.description`)}
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
              {t('noFavoriteGameTitle')}
            </p>
            <p className="text-lg font-bold text-gray-700">
              {t('noFavoriteGameDescription')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TCGGames;
