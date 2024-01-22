// src/components/Collections/CollectionPage.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Divider, Button, Container } from '@mui/material';
import ItemTable from '../Items/ItemTable';
import Header from '../Header/Header';


interface Item {
  id: string;
  name: string;
  description: string;
}

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Item 1', description: 'Description 1' },
    { id: '2', name: 'Item 2', description: 'Description 2' },
    { id: '3', name: 'Item 3', description: 'Description 3' },
  ]);

  const handleEditItem = (itemId: string) => {
    console.log(`Editing item with ID: ${itemId}`);
  };

  const handleDeleteItem = (itemId: string) => {
    console.log(`Deleting item with ID: ${itemId}`);
  };

  return (
    <div>
      <Header />
      <Container style={{ marginTop: 100 }}>
        <div>
          <Typography variant="h4">Collection  Page  ID: {id}</Typography>
          <Divider />
          <Typography variant="h5">Author:</Typography>
          <ItemTable items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
          <Divider />
          <Link to={`/collections/${id}/create`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Create New Item
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CollectionPage;
