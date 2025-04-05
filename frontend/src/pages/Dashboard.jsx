// frontend/src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AlertSummary } from '../components/disaster/AlertSummary';
import { RecentEvents } from '../components/disaster/RecentEvents';
import { StatsOverview } from '../components/disaster/StatsOverview.jsx';
import { QuickActions } from '../components/disaster/QuickActions';
import { WeatherWidget } from '../components/disaster/WeatherWidget';
import { MapPreview } from '../components/disaster/MapPreview';

export const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div className="p-6 space-y-6 min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Admin'}</h1>
          <p className="text-white/60">Here's what's happening in your area</p>
        </div>
        <div className="flex items-center space-x-4">
          <QuickActions />
        </div>
      </div>
      
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Stats Overview */}
          <StatsOverview />
          
          {/* Upcoming Tasks */}
          <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Upcoming Tasks</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                <div>
                  <p className="font-medium text-white">Team meeting</p>
                  <p className="text-sm text-white/60">Today, 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                <div>
                  <p className="font-medium text-white">Report deadline</p>
                  <p className="text-sm text-white/60">Tomorrow, 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                <div>
                  <p className="font-medium text-white">System maintenance</p>
                  <p className="text-sm text-white/60">Friday, 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Contacts */}
          <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Emergency Contacts</h2>
            <div className="space-y-3">
              <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div className="bg-red-500/30 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Local Emergency</p>
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
                  <p className="font-medium text-white">Fire Department</p>
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
                  <p className="font-medium text-white">Medical Emergency</p>
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
              <AlertSummary />
            </div>
            <div className="md:col-span-1">
              <WeatherWidget />
            </div>
          </div>
          
          {/* Map Preview */}
          <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Regional Overview</h2>
            <MapPreview />
          </div>
          
          {/* Recent Events */}
          <RecentEvents />
        </div>
      </div>
    </div>
  );
}
