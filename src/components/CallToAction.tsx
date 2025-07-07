import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const CallToAction = () => {
  const { t } = useTranslation('callToAction');
  const benefits = t('benefits', { returnObjects: true }) as string[];
  
  const navigateToDiscord = () => {
    window.open('https://discord.gg/NddrhpVZNP', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-lime-400 via-cyan-400 to-blue-500 relative overflow-hidden">
      {/* Background decorative elements with animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rotate-12 border-4 border-black animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white -rotate-12 rounded-full border-4 border-black animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rotate-45 border-4 border-black animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white -rotate-12 border-4 border-black animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white rotate-45 border-4 border-black animate-pulse" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-18 h-18 bg-white -rotate-12 rounded-full border-4 border-black animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white rotate-12 rounded-lg border-4 border-black animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-3/4 right-1/5 w-24 h-24 bg-white -rotate-6 border-4 border-black animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Card */}
          <div className="relative">
            <Card className="p-10 bg-pink-400 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative">
                <div className="text-9xl text-center mb-8">🐐</div>
                <div className="bg-yellow-400 border-4 border-black p-4 transform -rotate-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-2xl font-black text-center">{t('joinCount')}</p>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-400 rotate-12 rounded-full border-4 border-black animate-spin" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-lime-400 -rotate-12 border-4 border-black animate-bounce"></div>
              </div>
            </Card>
          </div>
          
          {/* Right side - Text content */}
          <div>
            <Card className="p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                {t('title')}
              </h2>
              <p className="text-xl font-bold text-gray-800 mb-8">
                {t('subtitle')}
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className={`w-6 h-6 ${
                      index === 0 ? 'bg-pink-400' : 
                      index === 1 ? 'bg-lime-400' : 
                      index === 2 ? 'bg-cyan-400' : 
                      'bg-yellow-400'
                    } border-2 border-black rounded-full flex items-center justify-center font-bold`}>✓</div>
                    <span className="font-bold text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={navigateToDiscord}
                className="w-full bg-black hover:bg-gray-800 text-white font-black text-xl py-4 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] transform -rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                {t('ctaButton')}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
