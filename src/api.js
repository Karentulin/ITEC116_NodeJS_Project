const express = require('express');
const fibonacci = require('./fibonacci');
const generatePrimeNumbers = require('./prime');
const factorial = require('./factorial');

const app = express();
const PORT = 3000;

app.get('/api/fibonacci/:limit', (req, res) => {
    const limit = parseInt(req.params.limit, 10);
    res.json(fibonacci(limit));
});

app.get('/api/prime/:limit', (req, res) => {
    const limit = parseInt(req.params.limit, 10);
    res.json(generatePrimeNumbers(limit));
});

app.get('/api/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    res.json({ factorial: factorial(number) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
