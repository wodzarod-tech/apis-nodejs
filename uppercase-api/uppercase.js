const express = require('express');
const app = express();

app.use(express.json());

// POST /uppercase
app.post('/uppercase', (req, res) => {
  const text = req.body.text || req.query.text || '';
  res.json({ result: text.toUpperCase() });
});

// GET /uppercase?text=hello
app.get('/uppercase', (req, res) => {
  const text = req.query.text || '';
  res.json({ result: text.toUpperCase() });
});

app.listen(4000, () => {
  console.log('Uppercase API running on http://localhost:4000');
});
