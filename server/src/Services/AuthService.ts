//Логика для регистрации и авторизации пользователя.

// src/services/authService.ts
import { PrismaClient, user_status, user_role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 10;

export const registerUserService = async (username: string, email: string, password: string) => {
  try {
    // Генерация рандомной соли для каждого пользователя
    const salt = bcrypt.genSaltSync(saltRounds);

    // Хеширование пароля с использованием рандомной соли
    const hashedPassword = await bcrypt.hash(password, salt);
    //способ без соли const hashedPassword = await bcrypt.hash(password, 10);

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

export const authenticateUserService = async (email: string, password: string) => {
  try {
    // Получение пользователя из базы данных по электронной почте
    const user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    // Использование bcrypt.compare для сравнения паролей
    const authenticated = await bcrypt.compare(password, user.password);

    if (authenticated) {
      // Здесь вы можете вернуть данные пользователя или токен (если используете JWT)
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    console.error('Error in authenticateUserService:', error);
    throw new Error('Authentication failed');
  }
};
