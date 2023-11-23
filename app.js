const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tareas = [];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/tareas', (req, res) => {
  const nuevaTarea = req.body;
  tareas.push(nuevaTarea);
  res.json(nuevaTarea);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});