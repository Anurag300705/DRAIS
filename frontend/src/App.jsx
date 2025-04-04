import { useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import CommandCenter from './pages/CommandCenter.jsx';
import ResourceAllocation from './components/disaster/ResourceAllocation.jsx';
import TeamManagement from './components/disaster/TeamManagement.jsx';
import DisasterMap from './pages/DisasterMap.jsx';
import Layout from './components/common/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/common/Home.jsx';
import { Alert } from './components/common/Alert.jsx';
import { EarthQuake } from './components/models/EarthQuake.jsx';
import { Flood } from './components/models/Flood.jsx';
import { Wildfire } from './components/models/WildFire.jsx';

function App() {
  const [count, setCount] = useState(0);
  // Access the user from Redux store
  const user = useSelector((state) => state.auth.user);
  
  // Optional: Access other auth state if needed
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  // For debugging - remove in production
  console.log('Current user:', user);
  console.log('Is authenticated:', isAuthenticated);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Protected routes example */}
          {isAuthenticated ? (
            <>
              <Route path="/alerts" element={<Alert />} />
              <Route path="/map" element={<DisasterMap />} />
              <Route path="/EarthQuake" element={<EarthQuake />} />
              <Route path="/Flood" element={<Flood />} />
              <Route path="/wildfire" element={<Wildfire />} />
              <Route path="/command-center" element={<CommandCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/layout" element={<Layout />} />
              <Route path="/" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      {/* Example of displaying user info */}
      {user && (
        <div className="user-info">
          <h2>Welcome, {user.name}</h2>
          {/* Add other user details as needed */}
        </div>
      )}
      <h1>Arunanshu</h1>
    </>
  );
}

export default App;