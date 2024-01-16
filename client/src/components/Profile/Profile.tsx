// src/components/Profile.tsx
// Ваши компоненты
import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../Header/Header';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div style={{ marginTop: '100px' }}></div>
      <p>{t('hello')}</p>
      <p>{t('world')}</p>
      <p>{t('greeting')}</p>
      <p>прпарапр</p>
    </div>
  );
};

export default Profile;