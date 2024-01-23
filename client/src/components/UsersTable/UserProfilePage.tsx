import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetailsById } from '../../services/UserServices';

const UserProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Проверяем, существует ли userId перед его использованием
        if (userId) {
          // Преобразуем userId из строки в число
          const userIdAsNumber = parseInt(userId, 10);
          // Вызываем новый метод для получения информации о пользователе по ID
          const userData = await getUserDetailsById(userIdAsNumber);
          setUserDetails(userData);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);


  return (
    <div>
      <h1>User Profile Page</h1>
      {userDetails && (
        <div>
          <h2>Name: {userDetails.username}</h2>
          <p>Email: {userDetails.email}</p>
          <p>Status: {userDetails.status}</p>
          <p>Role: {userDetails.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
