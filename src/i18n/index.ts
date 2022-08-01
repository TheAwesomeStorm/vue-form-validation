import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    validations: {
      required: 'The field {property} is required.',
      minLength:
        "The {property} field has a value of '{model}', but it must have a min length of {min}.",
    },
  },
  ptBr: {
    validations: {
      required: 'O campo {property} é obrigatório.',
      minLength:
        "O campo {property} tem um valor de '{model}', mas o número mínimo de caracteres é {min}.",
    },
  },
};

export const i18n = createI18n({
  locale: 'ptBr',
  fallbackLocale: 'en',
  messages,
});
