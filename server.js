//author priyanka

const express = require('express');
const app = express();
const db = require('./db');
const personRoutes = require('./routes/personRoutes')
const Person = require('./models/person');
const bodyParser = require('body-parser');
app.use(express.json());

app.use('/person',personRoutes);
// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
