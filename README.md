# ITEC 116 - System Integration and Architecture II

## Description
This project implements a Fibonacci sequence generator, prime number checker, and factorial calculator. It also provides a RESTful API to interact with these functionalities.

## Features
- Generate Fibonacci sequences.
- List prime numbers.
- Calculate factorials.
- RESTful API endpoints for all features.

## Tools and Technologies
- Node.js
- Express.js

## API Documentation

### Fibonacci Sequence
**Endpoint**: `/api/fibonacci/:limit`  
**Method**: GET  
**Description**: Returns Fibonacci numbers up to the specified limit.  
**Example**:
GET /api/fibonacci/10 Response: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

### Prime Numbers
**Endpoint**: `/api/prime/:limit`  
**Method**: GET  
**Description**: Returns all prime numbers up to the specified limit.  
**Example**:
GET /api/prime/20 Response: [2, 3, 5, 7, 11, 13, 17, 19]

### Factorial
**Endpoint**: `/api/factorial/:number`  
**Method**: GET  
**Description**: Returns the factorial of the specified number.  
**Example**:
GET /api/factorial/5 Response: { "factorial": 120 }
