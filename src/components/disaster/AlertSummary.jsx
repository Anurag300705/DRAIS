import { useSelector } from 'react-redux';

const AlertSummary = () => {
  const alerts = useSelector(state => state.disasters.alerts);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Active Alerts</h2>
      <div className="space-y-4">
        {alerts.length > 0 ? (
          alerts.map(alert => (
            <div key={alert.id} className="flex items-start p-3 border border-gray-200 rounded-lg">
              <div className={`w-3 h-3 rounded-full mt-1 mr-3 ${
                alert.severity === 'high' ? 'bg-red-500' : 
                alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}></div>
              <div>
                <h3 className="font-medium">{alert.title}</h3>
                <p className="text-sm text-gray-600">{alert.location} • {alert.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No active alerts</p>
        )}
      </div>
    </div>
  );
};

export default AlertSummary;