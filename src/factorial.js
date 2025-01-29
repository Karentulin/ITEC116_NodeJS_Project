const express = require('express');
const app = express();

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1);  // Recursively calculate the factorial
}

// API endpoint to calculate the factorial of a number
app.get('/api/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: 'Number must be a positive integer' });
    }

    const result = factorial(number);
    res.json({ factorial: result });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
