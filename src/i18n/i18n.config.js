import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import resources from './resources';

i18n
  .use(reactI18nextModule)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
