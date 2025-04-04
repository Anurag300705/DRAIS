import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlert } from '../../redux/slices/disasterSlice';
import { 
  FaSearch,
  FaExclamationTriangle,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { WiEarthquake, WiStormWarning } from "react-icons/wi";
import { MdFlood } from "react-icons/md";
import { FaFire } from "react-icons/fa";

export const Alert = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'medium',
    location: '',
    type: 'general'
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      id: Date.now(),
      ...formData,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
    dispatch(addAlert(newAlert));
    setFormData({
      title: '',
      description: '',
      severity: 'medium',
      location: '',
      type: 'general'
    });
  };

  const disasterIcons = {
    earthquake: <WiEarthquake className="text-orange-500 text-xl" />,
    fire: <FaFire className="text-red-500 text-xl" />,
    flood: <MdFlood className="text-blue-500 text-xl" />,
    storm: <WiStormWarning className="text-purple-500 text-xl" />,
    general: <FaExclamationTriangle className="text-gray-500 text-xl" />
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg border border-gray-700 shadow-xl">
      <div className="flex items-center mb-6">
        <FaExclamationTriangle className="text-yellow-500 text-2xl mr-3" />
        <h2 className="text-2xl font-bold">Create New Alert</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Alert Title</label>
            <div className="relative">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter alert title"
                required
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Provide detailed description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Alert Type</label>
            <div className="relative">
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="general">General</option>
                <option value="earthquake">Earthquake</option>
                <option value="fire">Fire</option>
                <option value="flood">Flood</option>
                <option value="storm">Storm</option>
              </select>
              <div className="absolute right-3 top-3 text-gray-400">
                {disasterIcons[formData.type]}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Severity Level</label>
            <select
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
              className= "w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <FaMapMarkerAlt />
              </div>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter location coordinates or address"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg transition duration-200 flex items-center"
          >
            <FaExclamationTriangle className="mr-2" />
            Issue Alert
          </button>
        </div>
      </form>
    </div>
  );
};