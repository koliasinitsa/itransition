// src/components/Collections/CollectionPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface CollectionPageParams {
  id: string;
}

const CollectionPage: React.FC = () => {
  const { id } = useParams<CollectionPageParams>();

  return <div>Collection Detail Page for Collection ID: {id}</div>;
};

export default CollectionPage;
