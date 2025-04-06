import React, { useState } from 'react';
import axios from 'axios';

export const Wildfire = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    windSpeed: '',
    precipitation: '',
    vegetationDensity: '',
    fireSpreadRate: '',
    airQualityIndex: '',
    topographySlope: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const inputData = {
        Temperature: parseFloat(formData.temperature),
        Humidity: parseFloat(formData.humidity),
        Wind_Speed: parseFloat(formData.windSpeed),
        Precipitation: parseFloat(formData.precipitation),
        Vegetation_Density: parseFloat(formData.vegetationDensity),
        Fire_Spread_Rate: parseFloat(formData.fireSpreadRate),
        Air_Quality_Index: parseFloat(formData.airQualityIndex),
        Topography_Slope: parseFloat(formData.topographySlope)
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/model/wildfire`, inputData);
      setPrediction(response.data.burn_area);
    } catch (err) {
      setError(err.response?.data?.error || 'Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityLevel = (area) => {
    if (area < 1) return 'Minor';
    if (area < 10) return 'Moderate';
    if (area < 100) return 'Significant';
    if (area < 1000) return 'Severe';
    return 'Extreme';
  };

  const getSeverityColor = (area) => {
    if (area < 1) return 'bg-green-500';
    if (area < 10) return 'bg-yellow-500';
    if (area < 100) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getSeverityDescription = (area) => {
    if (area < 1) return 'Minimal impact';
    if (area < 10) return 'Localized impact';
    if (area < 100) return 'Regional impact';
    if (area < 1000) return 'Widespread damage';
    return 'Catastrophic damage';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Wildfire Burn Area Prediction</h1>
          <p className="mt-2 text-gray-600">
            Estimate wildfire burn area based on environmental conditions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Temperature (°C)
              </label>
              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                step="0.1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 32.5"
                min="-50"
                max="60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Humidity (%)
              </label>
              <input
                type="number"
                name="humidity"
                value={formData.humidity}
                onChange={handleChange}
                step="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 45"
                min="0"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wind Speed (km/h)
              </label>
              <input
                type="number"
                name="windSpeed"
                value={formData.windSpeed}
                onChange={handleChange}
                step="0.1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 12"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Precipitation (mm)
              </label>
              <input
                type="number"
                name="precipitation"
                value={formData.precipitation}
                onChange={handleChange}
                step="0.1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 0"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vegetation Density (index)
              </label>
              <input
                type="number"
                name="vegetationDensity"
                value={formData.vegetationDensity}
                onChange={handleChange}
                step="0.1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 7.8"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fire Spread Rate (km²/h)
              </label>
              <input
                type="number"
                name="fireSpreadRate"
                value={formData.fireSpreadRate}
                onChange={handleChange}
                step="0.1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 3.2"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Air Quality Index
              </label>
              <input
                type="number"
                name="airQualityIndex"
                value={formData.airQualityIndex}
                onChange={handleChange}
                step="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 156"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Topography Slope (degrees)
              </label>
              <input
                type="number"
                name="topographySlope"
                value={formData.topographySlope}
                onChange={handleChange}
                step="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g. 15"
                min="0"
                max="90"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Predicting...
                </>
              ) : 'Predict Burn Area'}
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
          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
            <h3 className="text-lg font-medium text-center text-gray-900 mb-4">Predicted Burn Area</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className={`text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center text-white ${getSeverityColor(prediction)}`}>
                {Math.round(prediction * 10) / 10}
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Severity Level</p>
                <p className="text-xl font-semibold">{getSeverityLevel(prediction)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {getSeverityDescription(prediction)}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-center text-gray-600 mb-2">Square Kilometers</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
                  <div
                    style={{ width: `${Math.min(100, prediction / 10)}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getSeverityColor(prediction)}`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>0 km²</span>
                  <span>1000+ km²</span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-1 text-center text-xs text-gray-600">
              <div className={`p-1 rounded ${prediction < 1 ? 'bg-green-100 font-medium' : ''}`}>Minor</div>
              <div className={`p-1 rounded ${prediction >= 1 && prediction < 10 ? 'bg-yellow-100 font-medium' : ''}`}>Moderate</div>
              <div className={`p-1 rounded ${prediction >= 10 && prediction < 100 ? 'bg-orange-100 font-medium' : ''}`}>Significant</div>
              <div className={`p-1 rounded ${prediction >= 100 && prediction < 1000 ? 'bg-red-100 font-medium' : ''}`}>Severe</div>
              <div className={`p-1 rounded ${prediction >= 1000 ? 'bg-red-200 font-medium' : ''}`}>Extreme</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};