// ваш компонент AuthForm.tsx
import React, { useState, FormEvent, ChangeEvent } from 'react';

import {
  Button,
  TextField,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material';
import { registerUser } from '../../services/apiClient';


interface FormData {
  username?: string;
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const resetForm = () => {
    return {
      username: '',
      email: '',
      password: '',
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log('Регистрация успешна');

      // Очистить форму
      setFormData(resetForm);

    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      // Обработка ошибок при регистрации
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {isRegister ? 'Регистрация' : 'Вход'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {isRegister && (
            <TextField
              margin="normal"
              required
              fullWidth
              label="Имя"
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
            />
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email адрес"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Пароль"
            name="password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isRegister ? 'Зарегистрироваться' : 'Войти'}
          </Button>
          <Link
            component="button"
            variant="body2"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister
              ? 'Уже есть аккаунт? Войти'
              : 'Нет аккаунта? Зарегистрироваться'}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthForm;
