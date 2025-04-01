import { useState } from 'react';

export const MapControls = () => {
  const [activeLayer, setActiveLayer] = useState('satellite');

  return (
    <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md z-10">
      <div className="space-y-3">
        <h3 className="font-medium">Map Layers</h3>
        <div className="flex flex-col space-y-2">
          {['satellite', 'terrain', 'roadmap'].map(layer => (
            <label key={layer} className="flex items-center space-x-2">
              <input
                type="radio"
                checked={activeLayer === layer}
                onChange={() => setActiveLayer(layer)}
                className="text-blue-500"
              />
              <span className="capitalize">{layer}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default MapControls;