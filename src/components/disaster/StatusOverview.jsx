const StatusOverview = ({ darkMode }) => {
    const stats = [
      { name: 'Active Alerts', value: 3, trend: 'up' },
      { name: 'Resources Deployed', value: 42, trend: 'up' },
      { name: 'Teams Active', value: 5, trend: 'steady' },
      { name: 'Areas Affected', value: 3, trend: 'steady' },
    ];
  
    return (
      <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-lg font-semibold mb-4">Current Status Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <span className={`text-xl ${
                  stat.trend === 'up' ? 'text-red-500' : 'text-green-500'
                }`}>
                  {stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : '→'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StatusOverview;