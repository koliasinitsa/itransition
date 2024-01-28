// src/Routes/ItemRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateItemForm from '../components/Items/CreateItemForm';
import EditItemForm from '../components/Items/EditItemForm';
import ItemCardProfile from '../components/Items/ItemCardProfile';

const ItemRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/:id/create" element={<CreateItemForm  />} />
      <Route path="/edit-item/:id" element={<EditItemForm />} />
      <Route path="/:itemId" element={<ItemCardProfile />} />
    </Routes>
  );
}

export default ItemRoutes;
