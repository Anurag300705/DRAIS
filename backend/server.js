const express = require('express');

const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});