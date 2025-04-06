import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './App.css';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import CommandCenter from './pages/CommandCenter.jsx';
import ResourceAllocation from './components/disaster/ResourceAllocation.jsx';
import TeamManagement from './components/disaster/TeamManagement.jsx';
import { DisasterMap } from './pages/DisasterMap.jsx';
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
import ProtectedRoute from './components/common/ProtectedRoute.jsx';

function App() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (isAuthenticated && user) {
          setChecking(false);
          return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
          setChecking(false);
          return;
        }

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

  if (checking) {
    return <div>Loading...</div>;
  }

  return (
  <>
    {checking ? (
      <div>Loading...</div>
    ) : (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              
              <Home />
            }
          />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Layout /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/alerts"
            element={
              isAuthenticated ? <Alert /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/map"
            element={
              isAuthenticated ? <DisasterMap /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/EarthQuake"
            element={
              isAuthenticated ? <EarthQuake /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/Flood"
            element={
              isAuthenticated ? <Flood /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/wildfire"
            element={
              isAuthenticated ? <Wildfire /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/command-center"
            element={
              isAuthenticated ? <CommandCenter /> : <Navigate to="/login" replace />
            }
          />

          {/* Catch all */}
          {/* <Route path="*" element={<Navigate to="/" replace />} />/ */}
        </Routes>
      </BrowserRouter>
    )}
  </>
);

}

export default App;
