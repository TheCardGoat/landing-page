import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const navigateToDiscord = () => {
    window.open('https://discord.gg/NddrhpVZNP', '_blank');
  };
  
  const plans = [
    {
      name: "Free Goat",
      price: "$0",
      description: "Join the herd for free!",
      color: "bg-gray-100",
      borderColor: "border-gray-400",
      shadowColor: "shadow-[6px_6px_0px_0px_rgba(107,114,128,1)]",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
      perks: [
        "🐐 Access to basic community features",
        "📊 Basic card price tracking",
        "💬 Community chat access",
        "📰 Weekly newsletter"
      ]
    },
    {
      name: "Kid Goat",
      price: "$5",
      description: "Supporting the community!",
      color: "bg-green-200",
      borderColor: "border-green-600",
      shadowColor: "shadow-[6px_6px_0px_0px_rgba(22,163,74,1)]",
      buttonColor: "bg-green-500 hover:bg-green-600",
      badge: "Most Popular",
      perks: [
        "✨ All Free Goat perks",
        "🔍 Advanced card search filters",
        "📈 Detailed market analytics",
        "🎯 Price alerts for specific cards",
        "🏆 Priority community support"
      ]
    },
    {
      name: "Adult Goat",
      price: "$10",
      description: "Serious about the game!",
      color: "bg-blue-200",
      borderColor: "border-blue-600",
      shadowColor: "shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      perks: [
        "✨ All Kid Goat perks",
        "🤖 AI-powered deck suggestions",
        "📊 Portfolio tracking & analytics",
        "🎮 Early access to new tools",
        "🏅 Custom profile badges",
        "📱 Mobile app beta access"
      ]
    },
    {
      name: "Billy Goat",
      price: "$15",
      description: "TCG enthusiast level!",
      color: "bg-purple-200",
      borderColor: "border-purple-600",
      shadowColor: "shadow-[6px_6px_0px_0px_rgba(147,51,234,1)]",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      perks: [
        "✨ All Adult Goat perks",
        "🎯 Advanced trading tools",
        "📊 Market trend predictions",
        "🔮 Investment recommendations",
        "💎 Exclusive rare card alerts",
        "🎪 VIP tournament access",
        "🎨 Custom deck builder themes"
      ]
    },
    {
      name: "GOAT Supporter",
      price: "$30",
      description: "True community champion!",
      color: "bg-gradient-to-br from-yellow-200 to-orange-200",
      borderColor: "border-orange-600",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      badge: "Community Hero",
      special: true,
      perks: [
        "✨ All Billy Goat perks",
        "👑 Exclusive GOAT Supporter badge",
        "🎪 Direct access to dev team",
        "🚀 Feature request priority",
        "🎁 Monthly exclusive content",
        "🏆 Lifetime community recognition",
        "💝 Special thank you package",
        "🌟 Your name in our Hall of Fame"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rotate-12 border-4 border-black animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-pink-400 -rotate-12 border-4 border-black animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="bg-lime-300 border-4 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto mb-8">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
              SUPPORT THE HERD! 🐐
            </h2>
            <p className="text-lg md:text-xl text-gray-800 font-semibold">
              The Card Goat is FREE to use, but we need your support to keep growing!
            </p>
            <p className="text-base md:text-lg text-gray-700 mt-2">
              Every subscription helps us build better tools for the entire TCG community 💪
            </p>
          </div>
          
          <div className="bg-cyan-200 border-4 border-black p-4 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
            <p className="text-lg font-bold text-black">
              🎉 All prices + transaction fees • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`${plan.color} ${plan.borderColor} border-4 ${plan.shadowColor} transform hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-fade-in relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white border-2 border-black font-bold text-xs px-2 py-1 rotate-12 z-10">
                  {plan.badge}
                </Badge>
              )}
              
              <div className="p-6 h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-black mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-black mb-2">{plan.price}</div>
                  {plan.price !== "$0" && (
                    <div className="text-sm text-gray-600 font-semibold">+ transaction fees</div>
                  )}
                  <p className="text-sm font-bold text-gray-700 mt-2">{plan.description}</p>
                </div>
                
                <div className="flex-1 mb-6">
                  <ul className="space-y-2">
                    {plan.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="text-sm font-semibold text-black flex items-start">
                        <span className="mr-2 flex-shrink-0">{perk.split(' ')[0]}</span>
                        <span>{perk.split(' ').slice(1).join(' ')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${plan.buttonColor} text-white font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${plan.special ? 'animate-pulse' : ''}`}
                  onClick={navigateToDiscord}
                >
                  {plan.price === "$0" ? "JOIN FREE!" : "GET STARTED!"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Community Message */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-pink-200 border-4 border-pink-600 shadow-[8px_8px_0px_0px_rgba(219,39,119,1)] p-8 max-w-4xl mx-auto transform -rotate-1 hover:rotate-0 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
              🙏 Thank You for Supporting Our Community!
            </h3>
            <p className="text-lg text-gray-800 font-semibold mb-4">
              Every subscription, no matter the tier, helps us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-xl mr-2">🔧</span>
                  <span className="font-semibold text-black">Build better tools</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">🌍</span>
                  <span className="font-semibold text-black">Expand to new TCGs</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-xl mr-2">⚡</span>
                  <span className="font-semibold text-black">Keep servers running</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">❤️</span>
                  <span className="font-semibold text-black">Support our team</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
