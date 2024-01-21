// src/components/Profile/UserProfilePage.tsx
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


import { Token } from '../../interfaces/token';
import { useTranslation } from 'react-i18next';


const UserProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const [userToken, setUserToken] = useState<Token | undefined>(undefined);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserToken(decodedToken);
    } else {
      console.error('Token is undefined or not present.');
    }
  }, []);

  //console.log(decodedToken)
  return (
    <div>
      <Header />
      <div style={{ marginTop: '100px' }}>
      <h2>{t('addToAdmin')} {userToken?.username}</h2>
        <p>{t('addToAdmin')} {userToken?.email}</p>
        <p>{t('addToAdmin')} {userToken?.role}</p>
      </div>
    </div>
  );
};

export default UserProfilePage;
