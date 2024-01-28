//src/Home/HomePage.tsx
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Item } from '../../interfaces/item';
import { getAllItem } from '../../services/ItemServices';
import ItemTable from '../Items/ItemTable';

const HomePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getAllItem();
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '80%', width: '100%' }}>
          <h2>Items Table</h2>
          <ItemTable items={items} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;