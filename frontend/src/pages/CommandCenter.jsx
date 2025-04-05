import { useState } from 'react';
// import AlertForm from '../components/disaster/AlertForm';
import ResourceAllocation from '../components/disaster/ResourceAllocation';
import TeamManagement from '../components/disaster/TeamManagement';
import StatusOverview from '../components/disaster/StatusOverview';
import RecentActivities from '../components/disaster/RecentActivities';
import EmergencyContacts from '../components/disaster/EmergencyContacts';

const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { id: 'Crisis-command', label: 'Crisis-Command', icon: '📊' },
    // { id: 'alerts', label: 'Alerts', icon: '⚠️' },
    // { id: 'resources', label: 'Resources', icon: '🛠️' },
    // { id: 'teams', label: 'Teams', icon: '👥' },
    // { id: 'contacts', label: 'Contacts', icon: '📞' },
    // { id: 'reports', label: 'Reports', icon: '📑' }
  ];

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar */}
      {/* <div 
        className={`${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg flex flex-col`}
      >
        <div className={`p-4 flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {sidebarOpen && <h1 className="text-xl font-bold">Crisis Command</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className="flex-1 mt-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex items-center w-full px-4 py-3 text-left ${
                activeTab === tab.id
                  ? darkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-100 text-blue-700'
                  : darkMode 
                    ? 'hover:bg-gray-700' 
                    : 'hover:bg-gray-100'
              } ${sidebarOpen ? 'space-x-3' : 'justify-center'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-lg">{tab.icon}</span>
              {sidebarOpen && <span>{tab.label}</span>}
            </button>
          ))}
        </nav>
        
        <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} ${sidebarOpen ? 'text-sm' : 'text-xs text-center'}`}>
          {sidebarOpen ? (
            <>
              <p>Crisis Command v2.0</p>
              <p>Status: <span className="text-green-500">Operational</span></p>
            </>
          ) : (
            <p>v2.0</p>
          )}
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className={`flex items-center justify-between p-4 shadow-sm ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-b`}>
          <h2 className="text-xl font-semibold">
            {tabs.find(tab => tab.id === activeTab)?.label || 'Crisis-command'}
          </h2>
          
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-sm ${
              darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
            }`}>
              Live Mode
            </div>
            
            {/* <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button> */}
            
            {/* <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-blue-600' : 'bg-blue-100 text-blue-700'
            }`}>
              👤
            </div> */}
          </div>
        </header>

        <main className="p-6 space-y-6">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <StatusOverview darkMode={darkMode} />
                <RecentActivities darkMode={darkMode} />
              </div>
              <div className="space-y-6">
                <EmergencyContacts darkMode={darkMode} />
                <div className={`p-6 rounded-lg shadow ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className={`p-3 rounded-lg flex flex-col items-center ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}>
                      <span className="text-2xl mb-1">🚨</span>
                      <span>Emergency Alert</span>
                    </button>
                    <button className={`p-3 rounded-lg flex flex-col items-center ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}>
                      <span className="text-2xl mb-1">📢</span>
                      <span>Broadcast</span>
                    </button>
                    <button className={`p-3 rounded-lg flex flex-col items-center ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}>
                      <span className="text-2xl mb-1">🔄</span>
                      <span>Refresh Data</span>
                    </button>
                    <button className={`p-3 rounded-lg flex flex-col items-center ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}>
                      <span className="text-2xl mb-1">📊</span>
                      <span>Generate Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* {activeTab === 'alerts' && (
            <div className={`rounded-lg shadow overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <AlertForm darkMode={darkMode} />
            </div>
          )} */}
          
          {/* {activeTab === 'resources' && (
            <div className={`rounded-lg shadow overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <ResourceAllocation darkMode={darkMode} />
            </div>
          )}
          
          {activeTab === 'teams' && (
            <div className={`rounded-lg shadow overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <TeamManagement darkMode={darkMode} />
            </div>
          )}
          
          {activeTab === 'contacts' && (
            <div className={`rounded-lg shadow overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <EmergencyContacts expanded darkMode={darkMode} />
            </div>
          )}
          
          {activeTab === 'reports' && (
            <div className={`rounded-lg shadow p-6 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className="text-xl font-semibold mb-4">Report Generation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Incident Log', 'Resource Usage', 'Team Activity', 'Alert History', 'System Status', 'Custom Report'].map(report => (
                  <div key={report} className={`p-4 border rounded-lg ${
                    darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <h4 className="font-medium mb-2">{report}</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Generate detailed {report.toLowerCase()} report</p>
                    <button className={`mt-3 px-3 py-1 text-sm rounded ${
                      darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}>
                      Generate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </main>
      </div>
    </div>
  );
};

export default CommandCenter;