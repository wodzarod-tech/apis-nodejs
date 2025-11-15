const express = require('express');

//To avoid this error: Access to XMLHttpRequest at 'http://localhost:4000/uppercase' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS for ALL ORIGINS
app.use(cors(corsOptions));

// Needed to read JSON body
app.use(express.json());

// POST /uppercase
app.post('/uppercase', (req, res) => {
  const text = req.body.text || '';
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
