import { de, enUS, enGB, es, fr, it, ja, pt, ptBR, zhCN, zhTW } from 'date-fns/locale';

export const languages = {
  'de-DE': { label: 'Deutsch', dateLocale: de },
  'en-GB': { label: 'English (UK)', dateLocale: enGB },
  'en-US': { label: 'English (US)', dateLocale: enUS },
  'fr-FR': { label: 'Français', dateLocale: fr },
  'ga-ES': { label: 'Galacian (Spain)', dateLocale: es },
  'it-IT': { label: 'Italiano', dateLocale: it },
  'ja-JP': { label: '日本語', dateLocale: ja },
  'pt-BR': { label: 'Português do Brasil', dateLocale: ptBR },
  'pt-PT': { label: 'Português', dateLocale: pt },
  'nya-MW': { label: 'Chichewa', dateLocale: enGB },
  'zh-CN': { label: '中文', dateLocale: zhCN },
  'zh-TW': { label: '中文(繁體)', dateLocale: zhTW },
};

export function getDateLocale(locale) {
  return languages[locale]?.dateLocale || enGB;
}

export function getTextDirection(locale) {
  return languages[locale]?.dir || 'ltr';
}
