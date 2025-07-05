
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      title: "Deck Builder Pro",
      description: "Build the most BAA-dass decks with our advanced tools!",
      icon: "🃏",
      color: "bg-pink-400",
      rotation: "-rotate-2"
    },
    {
      title: "Card Database",
      description: "Every card known to goat-kind in one massive database!",
      icon: "📚",
      color: "bg-cyan-400",
      rotation: "rotate-1"
    },
    {
      title: "Trading Hub",
      description: "Trade cards like a true GOAT! Safe and secure!",
      icon: "🔄",
      color: "bg-lime-400",
      rotation: "-rotate-1"
    },
    {
      title: "Battle Tracker",
      description: "Track your wins and losses - become the ultimate Card Goat!",
      icon: "⚔️",
      color: "bg-purple-400",
      rotation: "rotate-2"
    },
    {
      title: "Knowledge Base",
      description: "Learn from the wisest goats in the community!",
      icon: "🧠",
      color: "bg-yellow-400",
      rotation: "-rotate-3"
    },
    {
      title: "Community Events",
      description: "Tournaments, challenges, and goat-themed fun!",
      icon: "🎉",
      color: "bg-red-400",
      rotation: "rotate-1"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rotate-45 border-4 border-black opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-500 -rotate-12 border-4 border-black opacity-20"></div>
      
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
