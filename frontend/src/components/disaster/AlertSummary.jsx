// AlertSummary.jsx
import { useSelector } from 'react-redux';

export const AlertSummary = () => {
  const alerts = useSelector(state => state.disasters.alerts);

  return (
    <div className="rounded-xl shadow-sm p-6 border bg-white/10 backdrop-blur-md border-white/10">
      <h2 className="text-lg font-semibold mb-4 text-white">Active Alerts</h2>
      <div className="space-y-4">
        {alerts.length > 0 ? (
          alerts.map(alert => (
            <div key={alert.id} className="flex items-start p-3 border border-white/10 rounded-lg bg-white/5">
              <div className={`w-3 h-3 rounded-full mt-1 mr-3 ${
                alert.severity === 'high' ? 'bg-red-500' : 
                alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}></div>
              <div>
                <h3 className="font-medium text-white">{alert.title}</h3>
                <p className="text-sm text-white/60">{alert.location} • {alert.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white/60">No active alerts</p>
        )}
      </div>
    </div>
  );
};
