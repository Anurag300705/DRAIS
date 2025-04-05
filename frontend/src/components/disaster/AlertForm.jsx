import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlert } from '../../redux/slices/disasterSlice';

const AlertForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'medium',
    location: '',
    affectedArea: '',
    estimatedImpact: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      id: Date.now(),
      ...formData,
      time: new Date().toLocaleTimeString()
    };
    dispatch(addAlert(newAlert));
    setFormData({
      title: '',
      description: '',
      severity: 'medium',
      location: '',
      affectedArea: '',
      estimatedImpact: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Create Alert</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
          <div>
            <label className="block text-lg font-medium text-white mb-2">Alert Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
              placeholder="Enter alert title"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-white mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={4}
              placeholder="Describe the alert in detail"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-white mb-2">Severity</label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({...formData, severity: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="low" className="text-black">Low</option>
                <option value="medium" className="text-black">Medium</option>
                <option value="high" className="text-black">High</option>
                <option value="critical" className="text-black">Critical</option>
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-medium text-white mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                placeholder="Enter location"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <div>
              <label className="block text-lg font-medium text-white mb-2">Affected Area (km²)</label>
              <input
                type="number"
                value={formData.affectedArea}
                onChange={(e) => setFormData({...formData, affectedArea: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Estimated affected area"
              />
            </div> */}
            
            {/* <div>
              <label className="block text-lg font-medium text-white mb-2">Estimated Impact</label>
              <select
                value={formData.estimatedImpact}
                onChange={(e) => setFormData({...formData, estimatedImpact: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="" disabled className="text-black">Select impact level</option>
                <option value="minimal" className="text-black">Minimal</option>
                <option value="moderate" className="text-black">Moderate</option>
                <option value="severe" className="text-black">Severe</option>
                <option value="catastrophic" className="text-black">Catastrophic</option>
              </select>
            </div> */}
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
          >
            Issue Alert
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlertForm;
