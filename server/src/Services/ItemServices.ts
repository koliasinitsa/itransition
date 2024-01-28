
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
                  },
            });
            return items;
        } catch (error) {
            throw new Error('Failed to fetch collections by user ID');
        }
    }
}
export default new ItemServices;