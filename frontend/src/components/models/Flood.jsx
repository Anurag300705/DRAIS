import React, { useState } from 'react';
import axios from 'axios';

export const Flood = () => {
  const [formData, setFormData] = useState({
    MonsoonIntensity: 5,
    TopographyDrainage: 5,
    RiverManagement: 5,
    Deforestation: 5,
    Urbanization: 5,
    ClimateChange: 5,
    DamsQuality: 5,
    Siltation: 5,
    AgriculturalPractices: 5,
    Encroachments: 5,
    IneffectiveDisasterPreparedness: 5,
    DrainageSystems: 5,
    CoastalVulnerability: 5,
    Landslides: 5,
    Watersheds: 5,
    DeterioratingInfrastructure: 5,
    PopulationScore: 5,
    WetlandLoss: 5,
    InadequatePlanning: 5,
    PoliticalFactors: 5
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Math.min(10, Math.max(1, parseInt(value) || 1))
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:3000/model/flood', formData);
      setPrediction(response.data.probability);
    } catch (err) {
      setError(err.response?.data?.message || 'Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  const featureGroups = [
    {
      title: "Environmental Factors",
      features: ['MonsoonIntensity', 'Deforestation', 'ClimateChange', 'WetlandLoss']
    },
    {
      title: "Infrastructure",
      features: ['DamsQuality', 'DrainageSystems', 'DeterioratingInfrastructure']
    },
    {
      title: "Human Factors",
      features: ['Urbanization', 'AgriculturalPractices', 'Encroachments', 'PopulationScore']
    },
    {
      title: "Management",
      features: ['RiverManagement', 'IneffectiveDisasterPreparedness', 'InadequatePlanning', 'PoliticalFactors']
    },
    {
      title: "Geographical",
      features: ['TopographyDrainage', 'CoastalVulnerability', 'Landslides', 'Watersheds', 'Siltation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Flood Risk Assessment</h1>
          <p className="mt-2 text-gray-600">
            Evaluate potential flood probability based on environmental and infrastructure factors
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.features.map((feature) => (
                  <div key={feature} className="space-y-2">
                    <label className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {feature.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        {formData[feature]}/10
                      </span>
                    </label>
                    <input
                      type="range"
                      name={feature}
                      min="1"
                      max="10"
                      value={formData[feature]}
                      onChange={handleChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 px-1">
                      <span>1</span>
                      <span>5</span>
                      <span>10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </>
              ) : 'Predict Flood Probability'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        {prediction !== null && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
            <h3 className="text-lg font-medium text-center text-gray-900 mb-4">Flood Probability</h3>
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    {prediction < 0.3 ? 'Low' : prediction < 0.6 ? 'Moderate' : prediction < 0.8 ? 'High' : 'Severe'} Risk
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {(prediction * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${prediction * 100}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                    prediction < 0.3 ? 'bg-green-500' :
                    prediction < 0.6 ? 'bg-yellow-500' :
                    prediction < 0.8 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                ></div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-gray-600">
              <div className={`p-1 rounded ${prediction < 0.3 ? 'bg-green-100 font-medium' : ''}`}>Low (0-30%)</div>
              <div className={`p-1 rounded ${prediction >= 0.3 && prediction < 0.6 ? 'bg-yellow-100 font-medium' : ''}`}>Moderate (30-60%)</div>
              <div className={`p-1 rounded ${prediction >= 0.6 && prediction < 0.8 ? 'bg-orange-100 font-medium' : ''}`}>High (60-80%)</div>
              <div className={`p-1 rounded ${prediction >= 0.8 ? 'bg-red-100 font-medium' : ''}`}>Severe (80-100%)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

