import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const TermsOfService = () => {
  const { t } = useTranslation(['common', 'terms']);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300">
      {/* Language Switcher positioned absolute */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Card className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl font-black mb-8 text-center">{t('terms:title')}</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:introduction.title')}</h2>
            <p className="mb-4">{t('terms:introduction.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:usage.title')}</h2>
            <p className="mb-4">{t('terms:usage.content')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('terms:usage.item1')}</li>
              <li>{t('terms:usage.item2')}</li>
              <li>{t('terms:usage.item3')}</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:account.title')}</h2>
            <p className="mb-4">{t('terms:account.content')}</p>
            <p className="mb-4">{t('terms:account.responsibilities')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:intellectual.title')}</h2>
            <p className="mb-4">{t('terms:intellectual.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:limitation.title')}</h2>
            <p className="mb-4">{t('terms:limitation.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:termination.title')}</h2>
            <p className="mb-4">{t('terms:termination.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:changes.title')}</h2>
            <p className="mb-4">{t('terms:changes.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms:contact.title')}</h2>
            <p>{t('terms:contact.content')}</p>
            <p className="mt-2 font-medium">Email: hello@thecardgoat.com</p>
          </section>
          
          <div className="mt-12 text-sm text-center text-gray-500">
            <p>{t('terms:lastUpdated')} {t('terms:lastUpdatedDate')}</p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService; 