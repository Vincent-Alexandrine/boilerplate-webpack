import React from 'react';
import { useTranslation } from 'react-i18next';

import Styled from './Welcome.styled.js';

function Welcome() {
  const [t] = useTranslation();
  return (
    <Styled>
      <h1>{t('welcome.h1')}</h1>
      <h2>{t('welcome.h2')}</h2>
      <h3>{t('welcome.h3')}</h3>
      <h4>{t('welcome.h4')}</h4>
      <h5>{t('welcome.h5')}</h5>
      <h6>{t('welcome.h6')}</h6>
      <br />
      <div>
        {t('welcome.div')}
        <span>
        <i>
          {t('welcome.i')}
          <a href="http://khaledipsum.com/">{t('welcome.a')}</a>
        </i>
        </span>
      </div>
    </Styled>
  );
}

export default Welcome;
