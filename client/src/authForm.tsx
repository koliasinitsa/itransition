import React, { useState, FormEvent } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material';

const AuthForm: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных на сервер
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
              name="name"
              autoComplete="name"
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Пароль"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          {isRegister && (
            <TextField
              margin="normal"
              required
              fullWidth
              label="Подтвердите пароль"
              name="confirmPassword"
              type="password"
            />
          )}
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
