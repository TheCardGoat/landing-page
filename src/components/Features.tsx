import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: '🃏',
      title: 'Deck Builder',
      description: 'Build, save, and share your decks with our intuitive deck builder. Import and export lists with ease!',
      color: 'bg-yellow-400',
      rotation: '-rotate-2'
    },
    {
      icon: '🎮',
      title: 'Play Simulator',
      description: 'Practice your strategies in our realistic game simulator with full rules enforcement.',
      color: 'bg-lime-400',
      rotation: 'rotate-1'
    },
    {
      icon: '📊',
      title: 'Meta Analysis',
      description: 'Stay ahead of the competition with our comprehensive meta analysis tools and reports.',
      color: 'bg-cyan-400',
      rotation: '-rotate-1'
    },
    {
      icon: '🧠',
      title: 'AI Training Partner',
      description: 'Improve your skills by playing against our advanced AI that learns and adapts to your playstyle.',
      color: 'bg-pink-400',
      rotation: 'rotate-2'
    },
    {
      icon: '🏆',
      title: 'Tournaments',
      description: 'Join our regular online tournaments and climb the leaderboard to earn special rewards!',
      color: 'bg-purple-400',
      rotation: '-rotate-3'
    },
    {
      icon: '📱',
      title: 'Mobile Compatible',
      description: 'Take your cards anywhere with our mobile-friendly platform - practice anytime, anywhere!',
      color: 'bg-orange-400',
      rotation: 'rotate-1'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations with animations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rotate-45 border-4 border-black opacity-20 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-500 -rotate-12 border-4 border-black opacity-20 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-purple-400 rotate-12 rounded-full border-4 border-black opacity-20 animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '3.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-pink-500 -rotate-45 rounded-lg border-4 border-black opacity-20 animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-2/3 left-2/3 w-28 h-28 bg-cyan-400 rotate-6 border-4 border-black opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '5s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-400 -rotate-12 rounded-full border-4 border-black opacity-20 animate-pulse" style={{ animationDelay: '2.3s' }}></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              GOAT-TIER FEATURES
            </h2>
            <p className="text-xl font-bold text-gray-700">
              Tools so good, they'll make you go "BAAAAAH!" 🐐
            </p>
          </Card>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`p-8 ${feature.color} border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform ${feature.rotation} hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105`}
            >
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-black text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
