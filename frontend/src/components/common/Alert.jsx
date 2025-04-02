import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaBell, 
  FaUserCircle, 
  FaMapMarkedAlt, 
  FaDesktop, 
  FaExclamationTriangle, 
  FaBoxes, 
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaHistory,
  FaCog
} from 'react-icons/fa';
// import { WiEarthquake, FaFire, MdFlood, WiStormWarning] } from 'react-icons/gi';
import { IoMdAlert } from 'react-icons/io';
import { FaFire } from "react-icons/fa";
import { WiEarthquake } from "react-icons/wi";
import { MdFlood } from "react-icons/md";
import { WiStormWarning } from "react-icons/wi";

export const Alert = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'earthquake', location: 'Northern Region', severity: 'High', time: '2 min ago', status: 'active' },
    { id: 2, type: 'flood', location: 'River Valley', severity: 'Medium', time: '15 min ago', status: 'active' },
    { id: 3, type: 'fire', location: 'Western Forest', severity: 'Critical', time: '32 min ago', status: 'active' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getDisasterIcon = (type) => {
    switch(type) {
      case 'earthquake': return <WiEarthquake className="text-orange-500" />;
      case 'fire': return <FaFire className="text-red-500" />;
      case 'flood': return <MdFlood className="text-blue-500" />;
      case 'hurricane': return <WiStormWarning className="text-purple-500" />;
      default: return <IoMdAlert className="text-yellow-500" />;
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-900 text-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-2xl text-indigo-300" />
            <h1 className="text-xl font-bold">DRAIS</h1>
          </div>
          <p className="text-xs text-indigo-300 mt-1">Disaster Response AI System</p>
        </div>

        <div className="px-4 py-6 border-t border-indigo-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Search incidents, locations..."
              className="w-full bg-indigo-800 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10"
            />
            <FaSearch className="absolute left-3 top-2.5 text-indigo-400" />
          </div>
        </div>

        <nav className="mt-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg mx-2 ${activeTab === 'dashboard' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800'}`}
          >
            <FaChartLine className="mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg mx-2 ${activeTab === 'map' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800'}`}
          >
            <FaMapMarkedAlt className="mr-3" />
            Disaster Map
          </button>
          <button
            onClick={() => setActiveTab('command')}
            className={`flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg mx-2 ${activeTab === 'command' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800'}`}
          >
            <FaDesktop className="mr-3" />
            Command Center
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg mx-2 ${activeTab === 'alerts' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800'}`}
          >
            <FaExclamationTriangle className="mr-3" />
            Alerts
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg mx-2 ${activeTab === 'resources' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800'}`}
          >
            <FaBoxes className="mr-3" />
            Resources
          </button>
          <button
            onClick={() => setActiveTab('teams')}
            className={`flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg mx-2 ${activeTab === 'teams' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800'}`}
          >
            <FaUsers className="mr-3" />
            Teams
          </button>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-indigo-800">
          <div className="flex items-center">
            <FaUserCircle className="text-2xl text-indigo-300 mr-3" />
            <div>
              <p className="text-sm font-medium text-white">System Admin</p>
              <p className="text-xs text-indigo-300">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Disaster Monitoring Dashboard</h2>
              <p className="text-sm text-gray-500">
                Last Updated: {formatDate(currentTime)}, {formatTime(currentTime)}
                <span className="mx-4">•</span>
                <span className="text-green-600 font-medium">System Status: Operational</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Active Incidents</p>
                  <p className="text-xl font-bold text-indigo-600">3</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Responders</p>
                  <p className="text-xl font-bold text-indigo-600">24</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Critical Alerts</p>
                  <p className="text-xl font-bold text-red-600">1</p>
                </div>
              </div>
              
              <button className="relative p-2 text-gray-500 hover:text-gray-700">
                <FaBell className="text-xl" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Emergency Protocols */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Emergency Protocols</h3>
                <FaHistory className="text-gray-400" />
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-indigo-800 mb-2">Emancipated Protocol</h4>
                <p className="text-sm text-gray-600">Activated for all critical incidents with automated response systems</p>
              </div>
              <button className="w-full py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-200 transition">
                View All Protocols
              </button>
            </div>

            {/* System Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">System Overview</h3>
                <FaCog className="text-gray-400" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Sensor Coverage</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">AI Accuracy</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-medium">3.2s avg</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2 px-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition flex items-center justify-center">
                  <FaExclamationTriangle className="mr-2" /> Alert All
                </button>
                <button className="py-2 px-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition flex items-center justify-center">
                  <FaUsers className="mr-2" /> Deploy Team
                </button>
                <button className="py-2 px-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition flex items-center justify-center">
                  <FaMapMarkedAlt className="mr-2" /> Map View
                </button>
                <button className="py-2 px-3 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition flex items-center justify-center">
                  <FaDesktop className="mr-2" /> Command
                </button>
              </div>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Active Disaster Alerts</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {alerts.map(alert => (
                <div key={alert.id} className="p-4 hover:bg-gray-50 transition flex items-center">
                  <div className="mr-4 text-2xl">
                    {getDisasterIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-800 capitalize">{alert.type} Alert</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        alert.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                        alert.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{alert.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{alert.time}</p>
                    <button className="mt-1 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 text-center">
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                View All Alerts
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

