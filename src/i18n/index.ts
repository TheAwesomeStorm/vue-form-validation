import { createI18n } from 'vue-i18n';
import pt_BR from './pt_BR.json';
import en from './en.json';

const messages = {
  en,
  pt_BR,
};

const localStorageLocale = localStorage.getItem('lang') || '';

export const i18n = createI18n({
  locale: localStorageLocale,
  fallbackLocale: 'en',
  messages,
});
