import { useState } from 'react';

const ResourceAllocation = () => {
  const [resources, setResources] = useState([
    { id: 1, name: 'Ambulances', allocated: 5, available: 3, icon: '🚑' },
    { id: 2, name: 'Fire Trucks', allocated: 8, available: 2, icon: '🚒' },
    { id: 3, name: 'Rescue Teams', allocated: 12, available: 5, icon: '🛟' },
  ]);

  const handleAllocate = (id) => {
    setResources(resources.map(resource => 
      resource.id === id 
        ? { ...resource, allocated: resource.allocated + 1, available: resource.available - 1 }
        : resource
    ));
  };

  const handleRelease = (id) => {
    setResources(resources.map(resource => 
      resource.id === id && resource.allocated > 0
        ? { ...resource, allocated: resource.allocated - 1, available: resource.available + 1 }
        : resource
    ));
  };

  return (
    <div className="space-y-4 p-6 bg-gradient-to-br from-purple-900/80 via-violet-900/80 to-gray-900 rounded-xl border border-violet-700/30 shadow-xl backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white/90 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
        Resource Allocation
      </h3>
      
      <div className="overflow-hidden shadow-lg ring-1 ring-violet-500/20 rounded-lg">
        <table className="min-w-full divide-y divide-violet-800/50">
          <thead className="bg-violet-900/40">
            <tr>
              <th className="px-5 py-3.5 text-left text-sm font-medium text-violet-200/90">Resource</th>
              <th className="px-5 py-3.5 text-left text-sm font-medium text-violet-200/90">Status</th>
              <th className="px-5 py-3.5 text-left text-sm font-medium text-violet-200/90">Allocated</th>
              <th className="px-5 py-3.5 text-left text-sm font-medium text-violet-200/90">Available</th>
              <th className="px-5 py-3.5 text-left text-sm font-medium text-violet-200/90">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-800/30 bg-violet-900/20 backdrop-blur-sm">
            {resources.map((resource) => {
              const utilization = Math.round((resource.allocated / (resource.allocated + resource.available)) * 100);
              
              return (
                <tr key={resource.id} className="hover:bg-violet-900/30 transition-all duration-200">
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3 text-violet-300">{resource.icon}</span>
                      <span className="text-sm font-medium text-white/90">{resource.name}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="w-full bg-violet-900/40 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${
                          utilization > 80 ? 'from-red-400 to-pink-500' : 
                          utilization > 50 ? 'from-amber-400 to-orange-500' : 'from-emerald-400 to-teal-500'
                        } shadow-[0_0_6px_rgba(167,139,250,0.6)]`}
                        style={{ width: `${utilization}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm font-medium text-white/90">{resource.allocated}</span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className={`text-sm font-medium ${
                      resource.available > 2 ? 'text-emerald-300' : 
                      resource.available > 0 ? 'text-amber-300' : 'text-pink-300'
                    }`}>
                      {resource.available}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 space-x-2">
                    <button
                      onClick={() => handleAllocate(resource.id)}
                      disabled={resource.available <= 0}
                      className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        resource.available > 0
                          ? 'bg-gradient-to-br from-purple-600 to-violet-600 text-white shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 hover:from-purple-500 hover:to-violet-500'
                          : 'bg-violet-900/50 text-violet-400/70 cursor-not-allowed'
                      }`}
                    >
                      Allocate
                    </button>
                    <button
                      onClick={() => handleRelease(resource.id)}
                      disabled={resource.allocated <= 0}
                      className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        resource.allocated > 0
                          ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-blue-500'
                          : 'bg-violet-900/50 text-violet-400/70 cursor-not-allowed'
                      }`}
                    >
                      Release
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        {resources.map(resource => {
          const utilization = Math.round((resource.allocated / (resource.allocated + resource.available)) * 100);
          
          return (
            <div key={resource.id} className="bg-violet-900/30 p-4 rounded-xl border border-violet-700/20 backdrop-blur-sm hover:bg-violet-900/40 transition-all">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3 text-violet-300/90">{resource.icon}</span>
                <h4 className="text-sm font-medium text-white/90">{resource.name}</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-violet-200/80 mb-1">
                    <span>Allocated</span>
                    <span className="text-white/90">{resource.allocated}</span>
                  </div>
                  <div className="w-full bg-violet-900/40 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-violet-300" 
                      style={{ width: `${utilization}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-violet-200/80">
                  <span>Available</span>
                  <span className={
                    resource.available > 2 ? 'text-emerald-300' : 
                    resource.available > 0 ? 'text-amber-300' : 'text-pink-300'
                  }>
                    {resource.available}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceAllocation;