const express = require('express');
const app = express();

app.use(express.static('link'))

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
