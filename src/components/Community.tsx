import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Community = () => {
  const { t } = useTranslation('community');
  
  const navigateToDiscord = () => {
    window.open('https://discord.gg/NddrhpVZNP', '_blank');
  };
  
  // Get features from translations
  const features = t('features', { returnObjects: true }) as string[];
  
  // Get testimonials from translations
  const testimonials = t('testimonials', { returnObjects: true }) as Array<{
    icon: string;
    quote: string;
    author: string;
  }>;
  
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Background shapes with animations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rotate-12 border-8 border-black animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white -rotate-12 rounded-full border-8 border-black animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rotate-45 border-8 border-black animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-white rounded-lg border-8 border-black animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-white -rotate-6 rounded-full border-8 border-black animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/4 right-1/5 w-20 h-20 bg-white rotate-12 border-8 border-black animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Community info */}
          <div className="space-y-8">
            <Card className="p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                {t('title')}
              </h2>
              <p className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
                {t('description')}
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-4 h-4 ${index === 0 ? 'bg-lime-400' : index === 1 ? 'bg-pink-400' : index === 2 ? 'bg-cyan-400' : 'bg-yellow-400'} border-2 border-black transform rotate-45`}></div>
                    <span className="font-bold text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Right side - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`p-6 ${
                  index === 0 
                    ? 'bg-yellow-300 transform rotate-1' 
                    : index === 1 
                      ? 'bg-cyan-300 transform -rotate-2' 
                      : 'bg-lime-300 transform rotate-1'
                } border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 ${
                    index === 0 
                      ? 'bg-pink-500' 
                      : index === 1 
                        ? 'bg-purple-500' 
                        : 'bg-red-500'
                  } border-4 border-black rounded-full flex items-center justify-center text-2xl`}>
                    {testimonial.icon}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black mb-2">
                      {testimonial.quote}
                    </p>
                    <p className="font-semibold text-gray-700">{testimonial.author}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black font-black text-2xl px-12 py-6 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            onClick={navigateToDiscord}
          >
            {t('ctaButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
