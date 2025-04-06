import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './App.css';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import CommandCenter from './pages/CommandCenter.jsx';
import ResourceAllocation from './components/disaster/ResourceAllocation.jsx';
import TeamManagement from './components/disaster/TeamManagement.jsx';
import {DisasterMap} from './pages/DisasterMap.jsx';
import Layout from './components/common/Layout.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/common/Home.jsx';
import { Alert } from './components/common/Alert.jsx';
import { EarthQuake } from './components/models/EarthQuake.jsx';
import { Flood } from './components/models/Flood.jsx';
import { Wildfire } from './components/models/WildFire.jsx';
import { SignUp } from './pages/SignUp.jsx';
import { loginSuccess } from './redux/slices/authSlice';
import { validateToken } from './services/api';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  
  // Access the user from Redux store
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  // Check for existing authentication on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // If we already have a user in Redux state, no need to validate
        if (isAuthenticated && user) {
          setChecking(false);
          return;
        }
        
        // Check if we have a token
        const token = localStorage.getItem('token');
        if (!token) {
          setChecking(false);
          return;
        }
        
        // Validate the token
        const userData = await validateToken();
        if (userData) {
          dispatch(loginSuccess(userData));
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setChecking(false);
      }
    };
    
    checkAuth();
  }, [dispatch]);

  // Show loading state while checking authentication
  if (checking) {
    return <div>Loading...</div>;
  }

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
              <Route path="/login" element={<Navigate to="/Layout" />} />
              <Route path="/signup" element={<Navigate to="/Layout" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
