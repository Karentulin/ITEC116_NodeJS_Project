const express = require('express');
const app = express();

// Function to generate Fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
    const sequence = [0, 1];  // Initialize with the first two Fibonacci numbers
    for (let i = 2; i <= limit; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);  // Calculate next Fibonacci number
    }
    return sequence.slice(0, limit + 1);  // Slice to get the exact number of Fibonacci numbers
}

// API Endpoint to fetch Fibonacci sequence
app.get('/api/fibonacci/:limit', (req, res) => {
    const limit = parseInt(req.params.limit);
    
    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ error: 'Limit must be a positive number' });
    }
    
    const fibonacciSequence = generateFibonacciSequence(limit);
    res.json(fibonacciSequence);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
