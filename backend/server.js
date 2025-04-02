const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// routes
app.use('/model', require('./routes/modelRoute'));
// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});