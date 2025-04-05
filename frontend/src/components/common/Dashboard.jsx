import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AlertSummary } from '../disaster/AlertSummary';
import { RecentEvents } from '../disaster/RecentEvents';
import { StatsOverview } from '../disaster/StatsOverview.jsx';
import { QuickActions } from '../disaster/QuickActions';
import { WeatherWidget } from '../disaster/WeatherWidget';
import { MapPreview } from '../disaster/MapPreview';

export const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="p-6 space-y-6 min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Admin'}</h1>
          <p className="text-white/60">Here's what's happening in your area</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white' : 'bg-white/20 text-white'}`}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <QuickActions />
        </div>
      </div>
      
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Stats Overview */}
          <StatsOverview darkMode={darkMode} />
          
          {/* Upcoming Tasks */}
          <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10">
            <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                <div>
                  <p className="font-medium">Team meeting</p>
                  <p className="text-sm text-white/60">Today, 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                <div>
                  <p className="font-medium">Report deadline</p>
                  <p className="text-sm text-white/60">Tomorrow, 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                <div>
                  <p className="font-medium">System maintenance</p>
                  <p className="text-sm text-white/60">Friday, 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Contacts */}
          <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10">
            <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
            <div className="space-y-3">
              <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div className="bg-red-500/30 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Local Emergency</p>
                  <p className="text-sm text-white/60">911</p>
                </div>
              </div>
              <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div className="bg-blue-500/30 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Fire Department</p>
                  <p className="text-sm text-white/60">555-1234</p>
                </div>
              </div>
              <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div className="bg-green-500/30 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Medical Emergency</p>
                  <p className="text-sm text-white/60">555-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="lg:col-span-3 space-y-6">
          {/* Alert Summary with Weather */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <AlertSummary darkMode={darkMode} />
            </div>
            <div className="md:col-span-1">
              <WeatherWidget darkMode={darkMode} />
            </div>
          </div>
          
          {/* Map Preview */}
          <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10">
            <h2 className="text-xl font-semibold mb-4">Regional Overview</h2>
            <MapPreview darkMode={darkMode} />
          </div>
          
          {/* Recent Events */}
          <RecentEvents darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
