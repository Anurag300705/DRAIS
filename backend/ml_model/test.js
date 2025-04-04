// // test_prediction.js
// const { predictFlood } = require('./flood_model');

// const testData = {
//   MonsoonIntensity: 7,
//   TopographyDrainage: 6,
//   RiverManagement: 5,
//   Deforestation: 8,
//   Urbanization: 6,
//   ClimateChange: 7,
//   DamsQuality: 4,
//   Siltation: 6,
//   AgriculturalPractices: 5,
//   Encroachments: 7,
//   IneffectiveDisasterPreparedness: 6,
//   DrainageSystems: 4,
//   CoastalVulnerability: 5,
//   Landslides: 6,
//   Watersheds: 5,
//   DeterioratingInfrastructure: 7,
//   PopulationScore: 8,
//   WetlandLoss: 6,
//   InadequatePlanning: 7,
//   PoliticalFactors: 6
// };

// (async () => {
//   try {
//     const result = await predictFlood(testData);
//     console.log(result);
//   } catch (error) {
//     console.error('Prediction failed:', error.message);
//   }
// })();

const { predictWildfire } = require('./wildfire_model');

const wildfireData = {
  Temperature: 32.5,
  Humidity: 45,
  Wind_Speed: 12,
  Precipitation: 0,
  Vegetation_Density: 7.8,
  Fire_Spread_Rate: 3.2,
  Air_Quality_Index: 156,
  Topography_Slope: 15
};

predictWildfire(wildfireData)
  .then(burnArea => console.log(`Predicted burn area: ${burnArea}`))
  .catch(err => console.error(`Error: ${err.message}`));