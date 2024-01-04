const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript 1111 with Express!');
});



app.listen(PORT, () => {
  console.log(`Server is running  on http://localhost:${PORT}`);
});
