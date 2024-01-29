
import express from 'express';
import ItemsController from '../controllers/ItemController'
const router = express.Router();

router.get('/items/:collectionsId', ItemsController.getItemsByCollectionId);
router.get('/items', ItemsController.getAllItems);
router.get('/item/:itemId', ItemsController.getItemById);

export default router;
