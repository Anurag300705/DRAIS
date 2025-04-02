// EarthquakePredictionForm.jsx
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
      // Convert to numbers and create input array
      const inputArray = [
        parseFloat(formData.latitude),
        parseFloat(formData.longitude),
        parseFloat(formData.depth),
        parseInt(formData.stations)
      ];

      const response = await axios.post('http://localhost:3000/model/earthQuake', {
        input: inputArray
      });

      setPrediction(response.data.prediction);
    } catch (err) {
      setError(err.response?.data?.error );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediction-form">
      <h2>Earthquake Magnitude Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Latitude (deg)</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            step="0.0001"
            required
          />
        </div>

        <div className="form-group">
          <label>Longitude (deg)</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            step="0.0001"
            required
          />
        </div>

        <div className="form-group">
          <label>Depth (km)</label>
          <input
            type="number"
            name="depth"
            value={formData.depth}
            onChange={handleChange}
            step="0.1"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Stations</label>
          <input
            type="number"
            name="stations"
            value={formData.stations}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict Magnitude'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      
      {prediction !== null && (
        <div className="result">
          <h3>Predicted Magnitude: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

