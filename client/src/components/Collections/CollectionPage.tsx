import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Divider, Button, Container, CircularProgress } from '@mui/material';
import Header from '../Header/Header';
import { getItemByCollectionId } from '../../services/ItemServices';
import ItemTable from '../Items/ItemTable';
import { Item } from '../../interfaces/item';

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await getItemByCollectionId(parseInt(id!));
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch items:', error);
        setLoading(false);
      }
    }

    fetchItems();
  }, [id]);

  return (
    <div>
      <Header />
      <Container style={{ marginTop: 100 }}>
        <div>
          <Typography variant="h4">Collection Page ID: {id}</Typography>
          <Divider />
          <div>
            {loading ? (
              <CircularProgress />
            ) : (
              <ItemTable items={items} />
            )}
          </div>
          <div>
            <Link to={`/Items/${id}/create`} style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Create New Item
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollectionPage;
