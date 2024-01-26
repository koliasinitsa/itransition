// controllers/collection.controller.ts
import { Request, Response } from 'express';
import CollectionServices from '../Services/Collection.service';


class CollectionController {
    async getCollectionsByUserId(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.userId, 10);
            const collections = await CollectionServices.getCollectionsByUserId(userId);
            res.status(200).json(collections);
        } catch (error) {
            res.status(500).json({ error: 'Error getting collections by user ID' });
        }
    }
}

export default new CollectionController;
