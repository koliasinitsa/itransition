// src/components/Items/ItemCard.tsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

interface ItemCardProps {
  itemId?: string;
  itemName?: string;
  itemDescription?: string;
}

const ItemCard: React.FC<ItemCardProps> = () => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);
  const { itemId } = useParams<{ itemId: string }>();

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Comment submitted for item ${itemId}: ${comment}`);
    setComment('');
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Item ID: {itemId}
        </Typography>
        <Typography variant="h6">{/*itemName*/}</Typography>
        <Typography variant="body2" color="text.secondary">
          {/*itemDescription*/}
        </Typography>

        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button variant="contained" color="primary" style={{ marginBottom: '10px' }} onClick={handleLikeClick}>
            Like ({likes})
          </Button>
        </div>

        <form onSubmit={handleCommentSubmit} style={{ width: '100%' }}>
          <TextField
            label="Leave a comment"
            variant="outlined"
            fullWidth
            margin="normal"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Comment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
