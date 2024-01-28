import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Divider, Button, Container, CircularProgress } from '@mui/material';
import Header from '../Header/Header';
import { getItemByCollectionId } from '../../services/ItemServices'; // Импортируем функцию для получения данных из сервиса
import ItemCard from '../Items/ItemCard';

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Функция для загрузки данных из сервиса при монтировании компонента
    async function fetchItems() {
      try {
        const data = await getItemByCollectionId(parseInt(id));
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch items:', error);
        setLoading(false);
      }
    }

    fetchItems(); // Вызываем функцию загрузки данных
  }, [id]); // Передаем id в зависимости, чтобы запрос выполнялся при изменении id

  return (
    <div>
      <Header />
      <Container style={{ marginTop: 100 }}>
        <div>
          <Typography variant="h4">Collection  Page  ID: {id}</Typography>
          <Divider />
          <Divider />
          <div>
            {/* Вывод айтемов */}
            {loading ? ( // Показываем индикатор загрузки, пока данные загружаются
              <CircularProgress />
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {items.map((item: any) => (
                  <ItemCard
                    key={item.id}
                    itemName={item.name}
                    collection={`Collection: ${item.collection.name}`}
                    fullPageLink={`/items/${item.id}`}
                  />
                ))}
              </div>
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
