const express = require('express');
const cors = require("cors");
const userRoutes = require('./routes/users.routes');
const taskRoutes = require('./routes/tasks.routes');
const categoryRoutes = require('./routes/categories.routes');
require('dotenv').config();

const db = require('./utils/database');
const initModels = require('./models/initModels');

initModels();

db.sync().then(() => console.log("Database Syncroniozed"));

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(cors());

app.use(userRoutes);

app.use(taskRoutes);

app.use(categoryRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.listen(PORT, () => {
  console.log(`Server listing to port ${PORT}`);
});