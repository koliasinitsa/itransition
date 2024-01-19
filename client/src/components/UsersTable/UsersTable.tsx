import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';

import Header from '../Header/Header';

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  role: 'user' | 'admin';
}


const users: User[] = [
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', status: 'Активен', role: 'user' },
  { id: 2, name: 'Петр Петров', email: 'petr@example.com', status: 'Активен', role: 'admin' },
  { id: 3, name: 'Анна Сидорова', email: 'anna@example.com', status: 'Неактивен', role: 'user' },
  { id: 4, name: 'Мария Иванова', email: 'maria@example.com', status: 'Активен', role: 'admin' },
  { id: 5, name: 'Алексей Петров', email: 'alex@example.com', status: 'Неактивен', role: 'user' },
];


const UsersTable: React.FC = () => {
  const { t } = useTranslation();
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allUserIds = users.map((user) => user.id);
      setSelectedUsers(allUserIds);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: number) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleAddToAdmin = () => {
    // Логика для добавления выделенных пользователей в админы
    console.log('Добавить в админы', selectedUsers);
  };

  const handleDeleteFromAdmin = () => {
    // Логика для удаления выделенных пользователей из админов
    console.log('Удалить из админов', selectedUsers);
  };

  const handleBlock = () => {
    // Логика для блокировки выделенных пользователей
    console.log('Блокировать', selectedUsers);
  };

  const handleUnblock = () => {
    // Логика для разблокировки выделенных пользователей
    console.log('Разблокировать', selectedUsers);
  };

  const handleDelete = () => {
    // Логика для удаления выделенных пользователей
    console.log('Удалить', selectedUsers);
  };

  return (
    <div >
      <Header />
      <div style={{ marginTop: '100px' }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: '10px' }}
        onClick={handleAddToAdmin}
      >
        {t('addToAdmin')}
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{ marginRight: '10px' }}
        onClick={handleDeleteFromAdmin}
      >
        {t('deleteFromAdmin')}
      </Button>

      <Button
        variant="contained"
        color="warning"
        sx={{ marginRight: '10px' }}
        onClick={handleBlock}
      >
        {t('Blocked')}
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: '10px' }}
        onClick={handleUnblock}
      >
        {t('UnBlocked')}
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{ marginRight: '10px' }}
        onClick={handleDelete}
      >
        {t('Deleted')}
      </Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
                checked={selectedUsers.length === users.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>{t('Name')}</TableCell>
            <TableCell>{t('Email')}</TableCell>
            <TableCell>{t('Status')}</TableCell>
            <TableCell>{t('Role')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={selectedUsers.includes(user.id) ? { backgroundColor: '#e0e0e0' } : {}}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UsersTable;