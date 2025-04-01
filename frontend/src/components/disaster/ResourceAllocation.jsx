import { useState } from 'react';

const ResourceAllocation = () => {
  const [resources, setResources] = useState([
    { id: 1, name: 'Ambulances', allocated: 5, available: 3 },
    { id: 2, name: 'Fire Trucks', allocated: 8, available: 2 },
    { id: 3, name: 'Rescue Teams', allocated: 12, available: 5 },
  ]);

  const handleAllocate = (id) => {
    setResources(resources.map(resource => 
      resource.id === id 
        ? { ...resource, allocated: resource.allocated + 1, available: resource.available - 1 }
        : resource
    ));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Resource Allocation</h3>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Resource</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Allocated</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Available</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{resource.name}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{resource.allocated}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{resource.available}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <button
                    onClick={() => handleAllocate(resource.id)}
                    disabled={resource.available <= 0}
                    className={`px-2 py-1 rounded text-xs ${
                      resource.available > 0
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Allocate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceAllocation;