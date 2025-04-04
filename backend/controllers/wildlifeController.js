const { predictWildfire } = require('../ml_model/wildfire_model');

const predictWildfireBurnArea = async (req, res) => {
    const requiredFeatures = [
        'Temperature',
        'Humidity',
        'Wind_Speed',
        'Precipitation',
        'Vegetation_Density',
        'Fire_Spread_Rate',
        'Air_Quality_Index',
        'Topography_Slope'
    ];

    try {
        // Validate input
        const missingFeatures = requiredFeatures.filter(f => !(f in req.body));
        if (missingFeatures.length > 0) {
            return res.status(400).json({
                error: `Missing required features: ${missingFeatures.join(', ')}`
            });
        }

        // Convert and validate numeric values
        const inputData = {};
        const validationErrors = [];
        
        requiredFeatures.forEach(f => {
            const value = parseFloat(req.body[f]);
            if (isNaN(value)) {
                validationErrors.push(`${f} must be a number`);
            }
            inputData[f] = value;
        });

        if (validationErrors.length > 0) {
            return res.status(400).json({
                error: `Invalid input values: ${validationErrors.join(', ')}`
            });
        }

        // Additional business logic validation
        if (inputData.Humidity < 0 || inputData.Humidity > 100) {
            return res.status(400).json({
                error: 'Humidity must be between 0-100%'
            });
        }

        if (inputData.Temperature < -50 || inputData.Temperature > 60) {
            return res.status(400).json({
                error: 'Temperature must be between -50°C and 60°C'
            });
        }

        console.log('Wildfire prediction input:', inputData);
        const burnArea = await predictWildfire(inputData);
        console.log('Predicted burn area:', burnArea);
        
        res.status(200).json({ 
            burn_area: burnArea,
            severity: classifyWildfireSeverity(burnArea)
        });

    } catch (error) {
        console.error('Wildfire prediction error:', error);
        res.status(500).json({ 
            error: error.message || 'Wildfire prediction failed' 
        });
    }
};

// Helper function to classify wildfire severity
function classifyWildfireSeverity(burnArea) {
    if (burnArea < 1) return 'Minor';
    if (burnArea < 10) return 'Moderate';
    if (burnArea < 100) return 'Significant';
    if (burnArea < 1000) return 'Severe';
    return 'Extreme';
}

module.exports = { predictWildfireBurnArea };