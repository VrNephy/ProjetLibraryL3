const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const router = require('./routes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
