import { createI18n } from 'vue-i18n';
import pt_BR from './pt_BR.json';
import en from './en.json';

const messages = {
  en,
  pt_BR,
};

export const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'en',
  messages,
});
