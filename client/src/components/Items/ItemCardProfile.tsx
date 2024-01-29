import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import {  useParams } from 'react-router-dom';
// import { getItemById } from '../../services/ItemServices';
// import { Item } from '../../interfaces/item';

const ItemCardProfile: React.FC = () => {
  // const [item, setItem] = useState<Item | null>(null);
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
    <Card
      style={{
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '400px',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <CardContent style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography variant="h5" component="div">
              Item ID: {itemId}
            </Typography>
          <Button variant="contained" color="primary" onClick={handleLikeClick}>
            Like ({likes})
          </Button>
        </div>
        <form onSubmit={handleCommentSubmit} style={{ width: '100%', marginTop: '10px' }}>
          <TextField
            label="Leave a comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '10px' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit Comment
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ItemCardProfile;
