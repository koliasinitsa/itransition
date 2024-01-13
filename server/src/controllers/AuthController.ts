//Обработка запросов для регистрации и авторизации пользователей.

// src/controllers/authController.ts
import { Request, Response } from 'express';
import { registerUserService } from '../Services/AuthService';

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  try {
    const user = await registerUserService(username, email, password);

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
