const express = require('express');
const app = express();

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimeNumbers(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// API endpoint to check if a number is prime
app.get('/api/prime/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number <= 0) {
        return res.status(400).json({ error: 'Number must be a positive integer' });
    }
    const result = isPrime(number) ? { prime: true } : { prime: false };
    res.json(result);
});

// API endpoint to get all prime numbers up to a given limit
app.get('/api/prime/numbers/:limit', (req, res) => {
    const limit = parseInt(req.params.limit);
    if (isNaN(limit) || limit <= 1) {
        return res.status(400).json({ error: 'Limit must be a positive integer greater than 1' });
    }
    const primes = generatePrimeNumbers(limit);
    res.json(primes);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
