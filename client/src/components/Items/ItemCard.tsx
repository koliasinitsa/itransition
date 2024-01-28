import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import ItemServices from '../../services/ItemServices'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface ItemCardProps {
  itemName: string;
  collection: string;
  fullPageLink: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ itemName, collection, fullPageLink }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {collection}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={fullPageLink}>View Full Page</Button>
      </CardActions>
    </Card>
  );
};



export default ItemCard;
