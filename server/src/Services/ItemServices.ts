
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


class ItemServices {
    async getItemsByCollectionId(collectionsId: number) {
        try {
            const items = await prisma.items.findMany({
                where: {
                    collection_id: collectionsId,
                },
                // отправляем не все данные, а только эти
                select: {
                    id: true,
                    name: true,
                    collection_id: true,
                    collection: {
                        select: {
                            name: true
                        }
                    }
                },
            });
            return items;
        } catch (error) {
            throw new Error('Failed to fetch items by collections ID');
        }
    }

    async getAllItems() {
        try {
            const items = await prisma.items.findMany({
                // отправляем не все данные, а только эти
                select: {
                    id: true,
                    name: true,
                    collection_id: true,
                    collection: {
                        select: {
                            name: true
                        }
                    }
                },
            });
            return items;
        } catch (error) {
            throw new Error('Failed to fetch items by collections ID');
        }
    }
}
export default new ItemServices;