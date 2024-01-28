
import express from 'express';
import ItemsController from '../controllers/ItemController'
const router = express.Router();

router.get('/items/:collectionsId', ItemsController.getItemsByCollectionId);

export default router;
