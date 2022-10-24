const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

const publicPath = path.join(process.cwd(), 'public');

app.use(express.json());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
