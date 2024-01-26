// src/components/Profile/UserProfilePage.tsx
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Header from '../Header/Header';
import { Token } from '../../interfaces/token';
import { useTranslation } from 'react-i18next';
import { Button, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './MyProfile.module.css';
import CollectionList from '../Collections/CollectionList';
import { getDecodedToken } from '../../services/TokenServices';
import { Collection } from '../../interfaces/Collections';
import { getCollectionsByUserId } from '../../services/CollectionServices';


// const fakeCollections = [
//   { id: '1', name: 'Books Collection', itemsCount: 10, username: 'qwerty' },
//   { id: '2', name: 'Stamp Collection', itemsCount: 5, username: 'qwerty2' },
//   { id: '3', name: 'Whisky Collection', itemsCount: 8, username: 'qwerty3' },
// ];

const MyProfile: React.FC = () => {
  const { t } = useTranslation();
  const [userToken, setUserToken] = useState<Token | undefined>(undefined);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = Cookies.get('token');
      if (token) {
        const decodedToken = getDecodedToken();
        setUserToken(decodedToken);
        try {
          const collectionsData = await getCollectionsByUserId(decodedToken.userId);
          setCollections(collectionsData);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      } else {
        console.error('Token is undefined or not present.');
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <Header />
      <Container className={styles.container}>
        <div>
          <div className={styles.userInfo}>
            <Typography variant="h2">{t('userNameToken')} - {userToken?.username}</Typography>
            <Typography variant="body1">{t('userEmailToken')}: {userToken?.email}</Typography>
            <Typography variant="body1">{t('userRoleToken')}: {userToken?.role}</Typography>
          </div>
          <Link to="/collections/create" style={{ textDecoration: 'none' }}>
            <Button className={styles.createCollectionButton} variant="contained" color="primary">
              Создать коллекцию
            </Button>
          </Link>
        </div>
        <Divider />
        <div >
          <Typography variant="h4">{t('myCollections')}</Typography>
          <CollectionList collections={collections} />
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
