import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation('features');
  
  const getFeatures = () => {
    const colors = [
      'bg-yellow-400',
      'bg-lime-400',
      'bg-cyan-400',
      'bg-pink-400',
      'bg-purple-400',
      'bg-orange-400'
    ];
    
    const rotations = [
      '-rotate-2',
      'rotate-1',
      '-rotate-1',
      'rotate-2',
      '-rotate-3',
      'rotate-1'
    ];
    
    const featureCount = 6;
    const features = [];
    
    for (let i = 0; i < featureCount; i++) {
      features.push({
        icon: t(`features.${i}.icon`),
        title: t(`features.${i}.title`),
        description: t(`features.${i}.description`),
        color: colors[i],
        rotation: rotations[i]
      });
    }
    
    return features;
  };

  const features = getFeatures();

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
              {t('title')}
            </h2>
            <p className="text-xl font-bold text-gray-700">
              {t('subtitle')}
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
