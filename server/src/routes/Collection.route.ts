// routes/collection.route.ts
import express from 'express';
import CollectionController from '../controllers/Collection.controller';

const router = express.Router();

router.get('/collections/user/:userId', CollectionController.getCollectionsByUserId);

export default router;
