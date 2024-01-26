// services/collection.service.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


class CollectionServices {
    async getCollectionsByUserId(userId: number) {
        try {
            const collections = await prisma.collections.findMany({
                where: {
                    user_id: userId,
                },
                // отправляем не все данные, а только эти
                select: {
                    id: true,
                    name: true,
                    description: true,
                    image_url: true,
                    user_id: true,
                    category_id: true,
                  },
            });
            return collections;
        } catch (error) {
            throw new Error('Failed to fetch collections by user ID');
        }
    }
}
export default new CollectionServices;