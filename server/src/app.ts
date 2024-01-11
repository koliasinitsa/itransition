import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';


dotenv.config(); // Загрузка переменных окружения из файла .env


const prisma = new PrismaClient();
const app = express();
const PORT = 3000;



app.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
  res.send('Hello, TypeScript with  Express!');
});



app.listen(PORT, () => {
  console.log(`Server is running  on http://localhost:${PORT}`);
});
