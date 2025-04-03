const { predictFlood } = require('../ml_model/flood_model');

const predictFloodProbability = async (req, res) => {
    // console.log(req.body);
    const requiredFeatures = [
        'MonsoonIntensity', 'TopographyDrainage', 'RiverManagement',
        'Deforestation', 'Urbanization', 'ClimateChange', 'DamsQuality',
        'Siltation', 'AgriculturalPractices', 'Encroachments',
        'IneffectiveDisasterPreparedness', 'DrainageSystems',
        'CoastalVulnerability', 'Landslides', 'Watersheds',
        'DeterioratingInfrastructure', 'PopulationScore', 'WetlandLoss',
        'InadequatePlanning', 'PoliticalFactors'
    ];

    try {
        // Validate input
        const missingFeatures = requiredFeatures.filter(f => !(f in req.body));
        if (missingFeatures.length > 0) {
            return res.status(400).json({
                error: `Missing required features: ${missingFeatures.join(', ')}`
            });
        }

        // Convert to ordered array
        const inputData = {};
        requiredFeatures.forEach(f => {
            // console.log(`Feature: ${f}, Value: ${req.body[f]}`);
            inputData[f] = parseFloat(req.body[f]);
        });
        console.log('Input data:', inputData);
        const probability = await predictFlood(inputData);
        res.status(200).json({ probability });

    } catch (error) {
        console.error('Flood prediction error:', error);
        res.status(500).json({ 
            error: error.message || 'Flood prediction failed' 
        });
    }
};

module.exports = { predictFloodProbability };