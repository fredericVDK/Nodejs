const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(viewsPath, 'users.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Practice app listening on http://localhost:${PORT}`);
});
