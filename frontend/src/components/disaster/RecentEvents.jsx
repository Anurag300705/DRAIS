import { useSelector } from 'react-redux';

export const RecentEvents = () => {
  const events = useSelector(state => state.disasters.recentEvents);

  return (
    <div className="rounded-xl shadow-sm p-6 border bg-white/10 backdrop-blur-md border-white/10">
      <h2 className="text-lg font-semibold mb-4 text-white">Recent Events</h2>
      <div className="space-y-3">
        {events.map(event => (
          <div key={event.id} className="flex justify-between items-center p-3 border-b border-white/10">
            <div>
              <h3 className="font-medium text-white">{event.type}</h3>
              <p className="text-sm text-white/60">{event.location}</p>
            </div>
            <span className="text-sm text-white/40">{event.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
