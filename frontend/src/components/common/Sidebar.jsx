import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Disaster Map', path: '/map', icon: '🗺️' },
    { name: 'Command Center', path: '/command-center', icon: '🚨' },
    { name: 'Alerts', path: '/alerts', icon: '🔔' },
    { name: 'Resources', path: '/resources', icon: '🛠️' },
    { name: 'Teams', path: '/teams', icon: '👥' },
  ];

  return (
    <aside className="w-72 bg-white/10 backdrop-blur-md border-r border-white/10 shadow-xl">
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            DRAIS
          </span>
          <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">
            LIVE
          </span>
        </h2>
        <p className="text-sm text-white/60 mt-1">Disaster Response AI System</p>
      </div>

      {/* Status Indicator */}
      <div className="px-6 py-3 bg-black/20 m-4 rounded-lg border border-white/10">
        <div className="flex justify-between items-center text-sm">
          <span className="text-white/80">System Status</span>
          <span className="flex items-center">
            <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-green-400">Operational</span>
          </span>
        </div>
      </div>

      <nav className="mt-2 px-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-md'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Emergency Quick Action */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200">
          <span className="text-xl">🚨</span>
          <span>Emergency Protocol</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-20 left-0 right-0 px-4">
        <div className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
            AI
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-white/50">System Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;