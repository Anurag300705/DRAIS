const RecentActivities = ({ darkMode }) => {
    const activities = [
      { id: 1, action: 'New alert created', time: '2 minutes ago', user: 'Admin' },
      { id: 2, action: 'Resources allocated to Area 3', time: '15 minutes ago', user: 'Commander' },
      { id: 3, action: 'Medical team deployed', time: '1 hour ago', user: 'Team Lead' },
      { id: 4, action: 'System maintenance completed', time: '2 hours ago', user: 'Tech' },
    ];
  
    return (
      <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className={`p-3 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex justify-between">
                <p>{activity.action}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activity.time}
                </p>
              </div>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                By {activity.user}
              </p>
            </div>
          ))}
        </div>
        <button className={`mt-4 text-sm ${
          darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
        }`}>
          View all activities →
        </button>
      </div>
    );
  };
  
  export default RecentActivities;