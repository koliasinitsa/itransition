// src/Routes/CollectionRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateCollectionForm from '../components/Collections/CreateCollectionForm';
import CollectionList from '../components/Collections/CollectionList';
import CollectionPage from '../components/Collections/CollectionPage';
import EditCollectionForm from '../components/Collections/EditCollectionForm';

const CollectionRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateCollectionForm />} />
      <Route path="/collectionsList" element={<CollectionList />} />
      <Route path="/:id" element={<CollectionPage />} />
      <Route path="/edit/:id" element={<EditCollectionForm />} />
    </Routes>
  );
}

export default CollectionRoutes;
