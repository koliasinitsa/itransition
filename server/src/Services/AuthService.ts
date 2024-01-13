//Логика для регистрации и авторизации пользователя.

// src/services/authService.ts
import { PrismaClient, user_status, user_role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 10;

export const registerUserService = async (username: string, email: string, password: string) => {
  try {
    // Генерация уникальной соли для каждого пользователя
    //const salt = bcrypt.genSaltSync(saltRounds);

    // Хеширование пароля с использованием уникальной соли
    //const hashedPassword = await bcrypt.hash(password + salt, salt);
    //способ без соли const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
        status: user_status.active,
        role: user_role.user,
      },
    });

    return user;
  } catch (error) {
    console.error('Error in registerUserService:', error);
    throw new Error('Failed to register user.');
  }
};
