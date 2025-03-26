import { useState } from 'react';
import AlertForm from '../components/disaster/AlertForm';
import ResourceAllocation from '../components/disaster/ResourceAllocation';

const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Command Center</h1>
      
      <div className="flex border-b border-gray-200">
        {['alerts', 'resources', 'teams'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === 'alerts' && <AlertForm />}
        {activeTab === 'resources' && <ResourceAllocation />}
        {activeTab === 'teams' && <div>Teams Management</div>}
      </div>
    </div>
  );
};

export default CommandCenter;