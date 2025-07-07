import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation('whoWeAre');
  
  const navigateToLorcanito = () => {
    window.open('https://lorcanito.com/', '_blank');
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations with animations */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-purple-400 rotate-12 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-20 animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-pink-500 -rotate-12 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-400 rotate-45 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-20 animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-cyan-400 -rotate-6 rounded-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-10 w-12 h-12 bg-lime-400 rotate-12 rounded-full border-4 border-black opacity-20 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all duration-300">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              {t('title')}
            </h2>
            <p className="text-xl font-bold text-gray-700 max-w-3xl mx-auto">
              <Trans
                i18nKey="description"
                t={t}
                components={{
                  lorcanito: <span className="text-blue-600 underline cursor-pointer hover:text-blue-800" onClick={navigateToLorcanito} />
                }}
              />
            </p>
            <Button 
              onClick={navigateToLorcanito}
              className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              {t('visitButton')}
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 bg-lime-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-6">{t('sections.howWeStarted.icon')}</div>
              <h3 className="text-2xl font-black text-black mb-4">{t('sections.howWeStarted.title')}</h3>
              <p className="text-lg font-semibold text-gray-800">
                {t('sections.howWeStarted.description')}
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-cyan-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-6">{t('sections.whyJoin.icon')}</div>
              <h3 className="text-2xl font-black text-black mb-4">{t('sections.whyJoin.title')}</h3>
              <p className="text-lg font-semibold text-gray-800">
                {t('sections.whyJoin.description')}
                <span className="block mt-4 bg-white border-4 border-black p-3 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black">{t('sections.whyJoin.successStory.highlight')}</span> {t('sections.whyJoin.successStory.content')}
                </span>
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-yellow-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-6xl mb-6">{t('sections.roadmap.icon')}</div>
              <h3 className="text-2xl font-black text-black mb-4">{t('sections.roadmap.title')}</h3>
              <div className="text-lg font-semibold text-gray-800">
                <p className="mb-4">
                  {t('sections.roadmap.description')}
                </p>
                <div className="bg-white border-4 border-black p-3 mb-4 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-bold">{t('sections.roadmap.milestone.date')}</p>
                  <p>{t('sections.roadmap.milestone.content')}</p>
                </div>
                <p className="mb-2">{t('sections.roadmap.future')}</p>
                <p className="mb-4">{t('sections.roadmap.futureGames')}</p>
                <p className="italic font-bold text-black mt-4">{t('sections.roadmap.joinEarly')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 