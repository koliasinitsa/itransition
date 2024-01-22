// src/Routes/Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import HomePage from '../components/Home/HomePage';
import UsersTable from '../components/UsersTable/UsersTable';
import UserProfilePage from '../components/Profile/UserProfilePage';
import CreateCollectionForm from '../components/Collections/CreateCollectionForm';
import CollectionList from '../components/Collections/CollectionList';
import CollectionPage from '../components/Collections/CollectionPage';
import EditCollectionForm from '../components/Collections/EditCollectionForm';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AuthForm" element={<AuthForm />} />
      <Route path="/UsersTable" element={<UsersTable />} />
      <Route path="/UserProfile" element={<UserProfilePage />} /> 
      <Route path="/CreateCollections" element={<CreateCollectionForm />} />
      <Route path="/CollectionList" element={<CollectionList />} />
      <Route path="/CollectionPage/:id" element={<CollectionPage />} />
      <Route path="/EditCollection/:id" element={<EditCollectionForm />} />
    </Routes>
  );
};

export default AppRoutes;
