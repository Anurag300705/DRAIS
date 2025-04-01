const TeamManagement = ({ darkMode }) => {
    const teams = [
      { id: 1, name: 'Medical Team', members: 8, status: 'Active' },
      { id: 2, name: 'Search & Rescue', members: 12, status: 'Deployed' },
      { id: 3, name: 'Logistics', members: 5, status: 'Standby' },
      { id: 4, name: 'Communication', members: 4, status: 'Active' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Team Management</h2>
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search teams..."
            className={`px-4 py-2 rounded-lg border ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
            }`}
          />
          <button className={`px-4 py-2 rounded-lg ${
            darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}>
            + Add New Team
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <tr>
                <th className="px-4 py-2 text-left">Team Name</th>
                <th className="px-4 py-2 text-left">Members</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="px-4 py-3">{team.name}</td>
                  <td className="px-4 py-3">{team.members}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      team.status === 'Active' || team.status === 'Deployed'
                        ? darkMode 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-green-100 text-green-800'
                        : darkMode 
                          ? 'bg-yellow-900 text-yellow-300' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {team.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className={`mr-2 px-3 py-1 rounded text-sm ${
                      darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                    }`}>
                      Edit
                    </button>
                    <button className={`px-3 py-1 rounded text-sm ${
                      darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}>
                      Disband
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
  
  export default TeamManagement;