# Используйте образ с Node.js
FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /client

# Копируем зависимости и файлы проекта
COPY ./package.json ./package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .
# Expose the port the app runs on
EXPOSE 5173

# Запускаем приложение
CMD ["npm", "start"]
