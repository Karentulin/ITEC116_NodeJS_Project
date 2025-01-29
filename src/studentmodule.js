const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simulated database
let students = [];
let idCounter = 1;

// Add a new student
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;
    if (!name || !age || !course) {
        return res.status(400).json({ error: "All fields (name, age, course) are required" });
    }
    const student = { id: idCounter++, name, age, course };
    students.push(student);
    res.status(201).json(student);
});

// Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// Get a student by ID
app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
});

// Update a student
app.put("/students/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    const { name, age, course } = req.body;
    if (name) student.name = name;
    if (age) student.age = age;
    if (course) student.course = course;
    
    res.json(student);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: "Student not found" });
    }
    const deletedStudent = students.splice(index, 1);
    res.json(deletedStudent[0]);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
