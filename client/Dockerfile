# Используйте образ с Node.js
FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app/client

# Копируем зависимости и файлы проекта
COPY ./package.json ./package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Запускаем приложение
CMD ["npm", "start"]
