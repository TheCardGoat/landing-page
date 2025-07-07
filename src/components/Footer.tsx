import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');
  const quickLinks = t('quickLinks.items', { returnObjects: true }) as Array<{ text: string; url: string }>;
  const contactItems = t('contactInfo.items', { returnObjects: true }) as string[];
  
  return (
    <footer className="py-16 px-4 bg-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rotate-12 border-4 border-white"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-pink-400 -rotate-12 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-400 rotate-45 border-4 border-white"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-lime-400 -rotate-12 border-4 border-white"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
              <h3 className="text-3xl font-black text-white mb-4">{t('brandTitle')}</h3>
              <p className="text-lg font-semibold text-white/90 mb-4">
                {t('brandDescription')}
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center text-xl rotate-12">
                  🐐
                </div>
                <div className="w-12 h-12 bg-cyan-400 border-4 border-black rounded-full flex items-center justify-center text-xl -rotate-12">
                  🃏
                </div>
                <div className="w-12 h-12 bg-lime-400 border-4 border-black rounded-full flex items-center justify-center text-xl rotate-12">
                  ⚡
                </div>
              </div>
            </Card>
          </div>
          
          {/* Quick Links */}
          <div>
            <Card className="p-6 bg-cyan-400 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform rotate-1 h-full">
              <h4 className="text-xl font-black text-black mb-4">{t('quickLinks.title')}</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="font-bold text-black hover:text-gray-700 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div>
            <Card className="p-6 bg-yellow-400 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform -rotate-1 h-full">
              <h4 className="text-xl font-black text-black mb-4">{t('contactInfo.title')}</h4>
              <ul className="space-y-2">
                {contactItems.map((item, index) => (
                  <li key={index} className="font-bold text-black">{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t-4 border-white border-dashed pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">
                {t('copyright')}
              </p>
              <p className="text-gray-300 font-semibold">
                {t('tagline')}
              </p>
              <div className="mt-2">
                <a 
                  href="/terms" 
                  className="text-sm text-white hover:underline"
                >
                  {t('termsLink')}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Card className="p-3 bg-pink-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <span className="text-xl">🐐</span>
              </Card>
              <Card className="p-3 bg-lime-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <span className="text-xl">🃏</span>
              </Card>
              <Card className="p-3 bg-cyan-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                <span className="text-xl">⚡</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
