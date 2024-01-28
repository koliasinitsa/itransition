// src/components/Items/ItemTable.tsx

import React from 'react';
import { Grid } from '@mui/material';
import ItemCard from './ItemCard';
import { Item } from '../../interfaces/item';



interface ItemTableProps {
  items: Item[];
}

const ItemTable: React.FC<ItemTableProps> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <ItemCard itemName={item.name} collection={`Collection: ${item.collection.name}`} fullPageLink={`/items/${item.id}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemTable;
