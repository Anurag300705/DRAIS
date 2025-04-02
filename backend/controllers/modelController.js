const { predict } = require('../ml_model/model.js');

const predictEarth = async (req, res) => {
    console.log('Received request for prediction:', req.body);
  const input = req.body.input;  // Expects { input: [33.89, -118.40, 16.17, 11] }
//   printf('Received input:', input);
  if (!input || !Array.isArray(input)) {
    return res.status(400).json({ error: 'Invalid input format. Expected an array.' });
  }

  try {
    const prediction = await predict(input);  // Wait for Python's prediction
    console.log('Prediction successful:', prediction);
    res.status(200).json({ prediction });    // Send to frontend
  } catch (error) {
    console.error('Prediction failed:', error.message);
    res.status(500).json({ error: error.message || 'Prediction failed' });
  }
};

module.exports = { predictEarth };