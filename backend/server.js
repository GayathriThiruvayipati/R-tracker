const express = require('express');
var mongo = require('mongodb');
//const cors = require('cors');
const app = express();
const saltRounds = 10;

require('dotenv').config();
//app.use(cors());
app.use(express.json());


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter);

app.listen(3001, () => {
  console.log('server is listening on port 3001');
});