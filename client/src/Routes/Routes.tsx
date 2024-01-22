// src/Routes/Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthForm from '../components/Auth/AuthForm';
import HomePage from '../components/Home/HomePage';
import UsersTable from '../components/UsersTable/UsersTable';
import UserProfilePage from '../components/Profile/UserProfilePage';
import ItemRoutes from './ItemRoutes';
import CollectionRoutes from './CollectionRoutes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AuthForm" element={<AuthForm />} />
      <Route path="/UsersTable" element={<UsersTable />} />
      <Route path="/UserProfile" element={<UserProfilePage />} />
      <Route path="/Items/*" element={<ItemRoutes />} />
      <Route path="/Collections/*" element={<CollectionRoutes />} /> 
    </Routes>
  );
};

export default AppRoutes;
