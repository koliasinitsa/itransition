// ваш компонент AuthForm.tsx
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

import {
  Button,
  TextField,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material';
import { registerUser } from '../../services/apiClient';
import CustomAlert from '../Alert/Alert';

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

  const [alertData, setAlertData] = useState({
    open: false,
    severity: 'success' as 'success' | 'error',
    message: '',
  });

  const handleCloseAlert = () => {
    setAlertData((prevData) => ({ ...prevData, open: false }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      await registerUser(formData);
  
      setAlertData({
        open: true,
        severity: 'success',
        message: 'User registered successfully',
      });
  
      // Очистить форму
      setFormData(resetForm);
    } catch (error: any) {
      setAlertData({
        open: true,
        severity: 'error',
        message: 'Error during registration. Please form again.',
      });
    }
  };

  useEffect(() => {
    setAlertData({
      open: false,
      severity: 'success',
      message: '',
    });
  }, [isRegister]);

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

          {/* Добавляем компонент для вывода alert'ов */}
          <CustomAlert
            open={alertData.open}
            severity={alertData.severity}
            message={alertData.message}
            onClose={handleCloseAlert}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AuthForm;
