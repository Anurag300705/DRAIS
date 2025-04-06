import { useSelector } from 'react-redux';
import { BellIcon, MagnifyingGlassIcon as SearchIcon, Cog6ToothIcon as CogIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section - Search */}
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-white/60" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search incidents, locations..."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Quick Actions */}
          <div className="flex space-x-4">
            <button className="text-white/70 hover:text-white transition-colors relative">
              <QuestionMarkCircleIcon className="h-6 w-6" />
              <span className="sr-only">Help</span>
            </button>
            <button className="text-white/70 hover:text-white transition-colors relative">
              <CogIcon className="h-6 w-6" />
              <span className="sr-only">Settings</span>
            </button>
            <button className="text-white/70 hover:text-white transition-colors relative">
              <div className="relative">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </div>
              <span className="sr-only">Notifications</span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-white">{user?.name || 'User Name'}</p>
              <p className="text-xs text-white/60">{user?.email || 'Email ID'}</p>
            </div>
            <div className="relative group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium cursor-pointer">
                {user?.name?.charAt(0).toUpperCase() || 'A'}
              </div>
              
              {/* Dropdown Menu
              <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-lg border border-white/10 rounded-md shadow-lg py-1 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/20">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/20">Settings</a>
              </div> */}
            </div>
          </div>

          {/* System Status Badge */}
          <div className="hidden lg:flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30">
            <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-xs font-medium text-green-400">SYSTEM NOMINAL</span>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="px-6 py-2 border-t border-white/10 bg-black/10">
        <div className="flex space-x-6">
          <span className="text-xs font-medium text-white/80">Last Updated: {new Date().toLocaleString()}</span>
          <span className="text-xs font-medium text-white/80">Active Incidents: 3</span>
          <span className="text-xs font-medium text-white/80">Responders: 24</span>
          <span className="text-xs font-medium text-white/80">Critical Alerts: 1</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;