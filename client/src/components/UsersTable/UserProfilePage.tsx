import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetailsById } from '../../services/UserServices';
import { Container, Typography } from '@mui/material';
import { t } from 'i18next';
import CollectionList from '../Collections/CollectionList';
import Header from '../Header/Header';
import styles from '../Profile/MyProfile.module.css';
import { getCollectionsByUserId } from '../../services/CollectionServices';
import { Collection } from '../../interfaces/Collections';
import { User } from '../../interfaces/user';


const UserProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (userId) {
          const userIdAsNumber = parseInt(userId, 10);
          const userData = await getUserDetailsById(userIdAsNumber);
          setUserDetails(userData);
          const collectionsData = await getCollectionsByUserId(parseInt(userId, 10));
          setCollections(collectionsData);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      <Header />
      <Container className={styles.container}>
        <h1>User Profile Page</h1>
        {userDetails && (
          <div>
            <h2>Name: {userDetails.username}</h2>
            <p>Email: {userDetails.email}</p>
            <p>Status: {userDetails.status}</p>
            <p>Role: {userDetails.role}</p>
          </div>
        )}
        <div >
          <Typography variant="h4">{t('Collections')}</Typography>
          <CollectionList collections={collections} />
        </div>
      </Container>

    </div>
  );
};

export default UserProfilePage;
