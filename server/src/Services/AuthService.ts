//Логика для регистрации и авторизации пользователя.

// src/services/authService.ts
import { PrismaClient, UserStatus, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const registerUserService = async (username: string, email: string, password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        status: UserStatus.active,
        role: UserRole.user,
      },
    });

    return user;
  } catch (error) {
    console.error('Error in registerUserService:', error);
    throw new Error('Failed to register user.');
  }
};
