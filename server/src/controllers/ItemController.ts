// controllers/collection.controller.ts
import { Request, Response } from 'express';
import ItemServices from '../Services/ItemServices';

class ItemsController {
    async getItemsByCollectionId(req: Request, res: Response) {
        try {
            const collectionsId = parseInt(req.params.collectionsId, 10);
            const items = await ItemServices.getItemsByCollectionId(collectionsId);
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: 'Error getting items by collectionsId' });
        }
    }

    async getAllItems(req: Request, res: Response) {
        try {
            const items = await ItemServices.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: 'Error getting items by collectionsId' });
        }
    }
}

export default new ItemsController;
