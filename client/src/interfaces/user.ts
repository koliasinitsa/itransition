// src/interfaces/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    role: 'user' | 'admin';
  }