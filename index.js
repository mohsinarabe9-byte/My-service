const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Salam! Server khdam mzyan f Render.com 🚀');
});

app.get('/api', (req, res) => {
  res.json({ status: 'khdam', message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server khdam f port ${PORT}`);
});
