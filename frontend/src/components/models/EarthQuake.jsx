import React, { useState } from 'react';
import axios from 'axios';

export const EarthQuake = () => {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    depth: '',
    stations: ''
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
      const inputArray = [
        parseFloat(formData.latitude),
        parseFloat(formData.longitude),
        parseFloat(formData.depth),
        parseInt(formData.stations)
      ];

      const response = await axios.post('http://localhost:3000/model/earthQuake', {
        input: inputArray
      });
      // console.log(response.data);
      setPrediction(response.data.prediction);
    } catch (err) {
      setError(err.response?.data?.error || 'Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  const getMagnitudeLevel = (mag) => {
    if (mag < 4.0) return 'Minor';
    if (mag < 6.0) return 'Light';
    if (mag < 7.0) return 'Moderate';
    if (mag < 8.0) return 'Strong';
    return 'Great';
  };

  const getMagnitudeColor = (mag) => {
    if (mag < 4.0) return 'bg-green-500';
    if (mag < 6.0) return 'bg-yellow-500';
    if (mag < 7.0) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Earthquake Magnitude Prediction</h1>
          <p className="mt-2 text-gray-600">
            Estimate earthquake magnitude based on geographical parameters
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Latitude (degrees)
              </label>
              <input
                type="number"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                step="0.0001"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. 33.89"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Longitude (degrees)
              </label>
              <input
                type="number"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                step="0.0001"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. -118.40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Depth (km)
              </label>
              <input
                type="number"
                name="depth"
                value={formData.depth}
                onChange={handleChange}
                step="0.1"
                min="0"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. 16.17"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Stations
              </label>
              <input
                type="number"
                name="stations"
                value={formData.stations}
                onChange={handleChange}
                min="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. 11"
              />
            </div>
          </div>

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
                  Predicting...
                </>
              ) : 'Predict Magnitude'}
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
            <h3 className="text-lg font-medium text-center text-gray-900 mb-4">Predicted Magnitude</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className={`text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center text-white ${getMagnitudeColor(prediction)}`}>
                { Math.round(prediction * 10) / 10}
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Magnitude Level</p>
                <p className="text-xl font-semibold">{getMagnitudeLevel(prediction)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {prediction < 4.0 ? 'Little to no damage' :
                   prediction < 6.0 ? 'Minor damage' :
                   prediction < 7.0 ? 'Moderate damage' :
                   'Serious damage'}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-1 text-center text-xs text-gray-600">
              <div className={`p-1 rounded ${prediction < 2.0 ? 'bg-green-100 font-medium' : ''}`}>Micro</div>
              <div className={`p-1 rounded ${prediction >= 2.0 && prediction < 4.0 ? 'bg-green-100 font-medium' : ''}`}>Minor</div>
              <div className={`p-1 rounded ${prediction >= 4.0 && prediction < 6.0 ? 'bg-yellow-100 font-medium' : ''}`}>Light</div>
              <div className={`p-1 rounded ${prediction >= 6.0 && prediction < 7.0 ? 'bg-orange-100 font-medium' : ''}`}>Moderate</div>
              <div className={`p-1 rounded ${prediction >= 7.0 ? 'bg-red-100 font-medium' : ''}`}>Strong+</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};