const TeamManagement = () => {
  const teams = [
    { id: 1, name: 'Medical Team', members: 8, status: 'Active' },
    { id: 2, name: 'Search & Rescue', members: 12, status: 'Deployed' },
    { id: 3, name: 'Logistics', members: 5, status: 'Standby' },
    { id: 4, name: 'Communication', members: 4, status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Team Management</h1>
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search teams..."
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="w-full md:w-auto flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200">
              + Add New Team
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-medium text-white">Team Name</th>
                  <th className="px-6 py-4 text-left text-lg font-medium text-white">Members</th>
                  <th className="px-6 py-4 text-left text-lg font-medium text-white">Status</th>
                  <th className="px-6 py-4 text-left text-lg font-medium text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teams.map(team => (
                  <tr key={team.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="px-6 py-4 text-white">{team.name}</td>
                    <td className="px-6 py-4 text-white">{team.members}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        team.status === 'Active' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : team.status === 'Deployed'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {team.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button className="px-4 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                        Edit
                      </button>
                      <button className="px-4 py-2 rounded-lg text-white bg-red-500/30 hover:bg-red-500/50 transition-colors duration-200 border border-red-500/30">
                        Disband
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <p className="text-white/60">Showing {teams.length} teams</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">Previous</button>
              <button className="px-4 py-2 rounded-lg bg-purple-500/30 text-white border border-purple-500/30">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
