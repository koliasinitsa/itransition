// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import HomePage from '../Home/HomePage';
import UsersTable from '../UsersTable/UsersTable';
import Profile from '../Profile/Profile';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/AuthForm" element={<AuthForm />} />
      <Route path="/Users" element={<UsersTable />} />
      <Route path="/Profile" element={<Profile />} />
      {/* Добавьте другие маршруты здесь */}
    </Routes>
  );
}
export default AppRoutes;
