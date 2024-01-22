// src/Routes/ItemRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateItemForm from '../components/Items/CreateItemForm';
import EditItemForm from '../components/Items/EditItemForm';
import CommentsAndLikes from '../components/Items/CommentsAndLikes';
import TagCloud from '../components/Items/TagCloud';
import ItemCard from '../components/Items/ItemCard';

const ItemRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateItemForm />} />
      <Route path="/edit/:itemId" element={<EditItemForm />} />
      <Route path="/comments-likes/:itemId" element={<CommentsAndLikes />} />
      <Route path="/tag-cloud" element={<TagCloud />} />
      <Route path="/:itemId" element={<ItemCard />} />
    </Routes>
  );
}

export default ItemRoutes;
