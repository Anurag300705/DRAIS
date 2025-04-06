const RecentActivities = () => {
  const activities = [
    { id: 1, action: 'New alert created', time: '2 minutes ago', user: 'Admin' },
    { id: 2, action: 'Resources allocated to Area 3', time: '15 minutes ago', user: 'Commander' },
    { id: 3, action: 'Medical team deployed', time: '1 hour ago', user: 'Team Lead' },
    { id: 4, action: 'System maintenance completed', time: '2 hours ago', user: 'Tech' },
  ];

  return (
    <div className="rounded-xl shadow-sm p-6 border bg-white/10 backdrop-blur-md border-white/10">
      <h3 className="text-lg font-semibold mb-4 text-white">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex justify-between">
              <p className="text-white">{activity.action}</p>
              <p className="text-sm text-white/60">
                {activity.time}
              </p>
            </div>
            <p className="text-sm mt-1 text-white/60">
              By {activity.user}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-purple-300 hover:text-purple-200 transition-colors duration-200">
        View all activities →
      </button>
    </div>
  );
};

export default RecentActivities;
