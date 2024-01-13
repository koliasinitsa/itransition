//  Маршруты, связанные с аутентификацией (регистрация, вход).

// src/routes/authRoutes.ts
import express from 'express';
import { registerUser } from '../controllers/AuthController';

const router = express.Router();

router.post('/register', registerUser);

export default router;
