import { useState } from 'react';
import StatusOverview from '../components/disaster/StatusOverview';
import RecentActivities from '../components/disaster/RecentActivities';
import EmergencyContacts from '../components/disaster/EmergencyContacts';

const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'Crisis-command', label: 'Crisis-Command', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="flex items-center justify-between p-4 shadow-sm bg-white/10 backdrop-blur-md border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">
            {tabs.find(tab => tab.id === activeTab)?.label || 'Crisis-command'}
          </h2>
          
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300 border border-green-500/30">
              Live Mode
            </div>
          </div>
        </header>
        
        <main className="p-6 space-y-6">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <StatusOverview />
                <RecentActivities />
              </div>
              <div className="space-y-6">
                <EmergencyContacts />
                <div className="rounded-xl shadow-sm p-6 border bg-white/10 backdrop-blur-md border-white/10">
                  <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-3 rounded-lg flex flex-col items-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200">
                      <span className="text-2xl mb-1">🚨</span>
                      <span className="text-white">Emergency Alert</span>
                    </button>
                    <button className="p-3 rounded-lg flex flex-col items-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200">
                      <span className="text-2xl mb-1">📢</span>
                      <span className="text-white">Broadcast</span>
                    </button>
                    <button className="p-3 rounded-lg flex flex-col items-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200">
                      <span className="text-2xl mb-1">🔄</span>
                      <span className="text-white">Refresh Data</span>
                    </button>
                    <button className="p-3 rounded-lg flex flex-col items-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200">
                      <span className="text-2xl mb-1">📊</span>
                      <span className="text-white">Generate Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CommandCenter;
