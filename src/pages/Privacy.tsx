import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const Privacy = () => {
  const { t } = useTranslation(['common', 'privacy']);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300">
      {/* Language Switcher positioned absolute */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Card className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl font-black mb-8 text-center">{t('privacy:title')}</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:introduction.title')}</h2>
            <p className="mb-4">{t('privacy:introduction.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:information.title')}</h2>
            <p className="mb-4">{t('privacy:information.content')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy:information.item1')}</li>
              <li>{t('privacy:information.item2')}</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:cookies.title')}</h2>
            <p className="mb-4">{t('privacy:cookies.content')}</p>
            <p className="mb-4">{t('privacy:cookies.policy')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:dataUse.title')}</h2>
            <p className="mb-4">{t('privacy:dataUse.content')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(t('privacy:dataUse.purposes', { returnObjects: true }) as string[]).map((purpose, index) => (
                <li key={index}>{purpose}</li>
              ))}
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:dataSharing.title')}</h2>
            <p className="mb-4">{t('privacy:dataSharing.content')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(t('privacy:dataSharing.reasons', { returnObjects: true }) as string[]).map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:dataRetention.title')}</h2>
            <p className="mb-4">{t('privacy:dataRetention.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:dataTransfer.title')}</h2>
            <p className="mb-4">{t('privacy:dataTransfer.content')}</p>
            <p className="mb-4">{t('privacy:dataTransfer.consent')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:security.title')}</h2>
            <p className="mb-4">{t('privacy:security.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:yourRights.title')}</h2>
            <p className="mb-4">{t('privacy:yourRights.content')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(t('privacy:yourRights.rights', { returnObjects: true }) as string[]).map((right, index) => (
                <li key={index}>{right}</li>
              ))}
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:childrenPrivacy.title')}</h2>
            <p className="mb-4">{t('privacy:childrenPrivacy.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:changes.title')}</h2>
            <p className="mb-4">{t('privacy:changes.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('privacy:contact.title')}</h2>
            <p>{t('privacy:contact.content')}</p>
            <p className="mt-2 font-medium">Email: hello@thecardgoat.com</p>
          </section>
          
          <div className="mt-12 text-sm text-center text-gray-500">
            <p>{t('privacy:lastUpdated')} {t('privacy:lastUpdatedDate')}</p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy; 