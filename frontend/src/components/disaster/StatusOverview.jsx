const StatusOverview = () => {
  const stats = [
    { name: 'Active Alerts', value: 3, trend: 'up' },
    { name: 'Resources Deployed', value: 42, trend: 'up' },
    { name: 'Teams Active', value: 5, trend: 'steady' },
    { name: 'Areas Affected', value: 3, trend: 'steady' },
  ];

  return (
    <div className="rounded-xl shadow-sm p-6 border bg-white/10 backdrop-blur-md border-white/10">
      <h3 className="text-lg font-semibold mb-4 text-white">Current Status Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/60">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold mt-1 text-white">{stat.value}</p>
              </div>
              <span className={`text-xl ${
                stat.trend === 'up' ? 'text-red-400' : 
                stat.trend === 'down' ? 'text-green-400' : 'text-blue-400'
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
