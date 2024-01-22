// src/components/collections/CollectionList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardActionArea } from '@mui/material';

interface CollectionListProps {
  collections?: any[];
}

const CollectionList: React.FC<CollectionListProps> = ({ collections }) => {
  return (
    <div>
      {collections && collections.length > 0 ? (
        collections.map(collection => (
          <Link to={`/CollectionPage/${collection.id}`} key={collection.id} style={{ textDecoration: 'none' }}>
            <Card variant="outlined" style={{ marginBottom: '10px' }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">{collection.name}</Typography>
                  <Typography variant="body2">Items: {collection.itemsCount}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))
      ) : (
        <Typography variant="body1">No collections available.</Typography>
      )}
    </div>
  );
};

export default CollectionList;
