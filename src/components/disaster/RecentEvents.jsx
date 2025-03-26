import { useSelector } from 'react-redux';

export const RecentEvents = () => {
  const events = useSelector(state => state.disasters.recentEvents);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Events</h2>
      <div className="space-y-3">
        {events.map(event => (
          <div key={event.id} className="flex justify-between items-center p-3 border-b border-gray-100">
            <div>
              <h3 className="font-medium">{event.type}</h3>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
            <span className="text-sm text-gray-400">{event.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

