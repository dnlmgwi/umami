import { enUS, enGB, fr, zhCN, zhTW } from 'date-fns/locale';

export const languages = {

  'en-GB': { label: 'English (UK)', dateLocale: enGB },
  'en-US': { label: 'English (US)', dateLocale: enUS },
  'fr-FR': { label: 'Français', dateLocale: fr },
  'zh-CN': { label: '中文', dateLocale: zhCN },
  'zh-TW': { label: '中文(繁體)', dateLocale: zhTW },
};

export function getDateLocale(locale) {
  return languages[locale]?.dateLocale || enGB;
}

export function getTextDirection(locale) {
  return languages[locale]?.dir || 'ltr';
}
