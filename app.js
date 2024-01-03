// // const express = require('express');
// import express from "express";
// // const bodyParser = require('body-parser');
// import bodyParser from "body-parser";
// const app = express();
// const port = 3000;

// app.set('view engine', 'ejs');
// app.use(express.static('public'));
// app.use(bodyParser.json());

// const tasks = [];

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/tasks', (req, res) => {
//   res.json(tasks);
// });

// app.post('/tasks', (req, res) => {
//   const newTask = req.body.task;
//   tasks.push(newTask);
//   res.json(tasks);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

const tasks = [];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json(tasks);
});

app.delete('/tasks', (req, res) => {
  const index = req.body.index;
  if (index !== undefined && index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  }
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  