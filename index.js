const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

// Listar tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Adicionar tarefa
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: 'Tarefa adicionada com sucesso!' });
});

// Atualizar tarefa
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks[taskId] = updatedTask;
  res.json({ message: 'Tarefa atualizada com sucesso!' });
});

// Excluir tarefa
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.json({ message: 'Tarefa excluída com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
