// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../Auth/authForm';
import HomePage from '../Home/HomePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/AuthForm" element={<AuthForm />} />
      {/* Добавьте другие маршруты здесь */}
    </Routes>
  );
}

export default AppRoutes;
