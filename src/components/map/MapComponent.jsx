import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const MapComponent = () => {
  const disasters = useSelector(state => state.disasters.list);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setMapReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      {mapReady ? (
        <div className="relative w-full h-full">
          {/* Map rendering would go here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg font-medium">Map View (Simulated)</p>
          </div>
          {disasters.map(disaster => (
            <div 
              key={disaster.id}
              className="absolute"
              style={{ left: `${disaster.x}%`, top: `${disaster.y}%` }}
            >
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;