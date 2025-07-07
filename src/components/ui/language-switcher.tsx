import { useTranslation } from 'react-i18next';
import { Button } from './button';
import { GlobeIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common');
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Find the current language
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-9 px-3 rounded-full border-2 border-black bg-white hover:bg-gray-100 flex items-center gap-2"
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden sm:inline-block">{currentLanguage.name}</span>
          <GlobeIcon className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-2 border-black min-w-32">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`cursor-pointer font-medium flex items-center gap-2 ${
              i18n.language === language.code ? 'bg-lime-300' : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 