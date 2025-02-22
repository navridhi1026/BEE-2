const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files like CSS
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy array to store tasks
let tasks = [];

// Home Route - Show Tasks List
app.get('/', (req, res) => {
    res.render('tasks', { tasks });
});

// Route to Show Tasks
app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks });
});

// Route to Show Add Task Form
app.get('/add', (req, res) => {
    res.render('addTask'); // Ensure this file exists in "views"
});

// Handle Task Submission (POST Request)
app.post('/add', (req, res) => {
    const { title, description } = req.body;
    if (title && description) {
        tasks.push({ title, description });
    }
    res.redirect('/tasks'); // Redirect to the tasks list
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
