require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

const user = process.env.API_USER;
const pass = process.env.API_PASS;
const uri = process.env.API_URL;
const database = process.env.API_DATABASE;

mongoose.connect(`mongodb+srv://${user}:${pass}@${uri}/${database}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
