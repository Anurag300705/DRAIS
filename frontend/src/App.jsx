import { useState } from 'react'
import './App.css'
// import {Login} from './pages/Login.jsx';
import {Dashboard} from './pages/Dashboard.jsx';
import CommandCenter from './pages/CommandCenter.jsx';
import DisasterMap from './pages/DisasterMap.jsx';
import Layout from './components/common/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/common/Home.jsx';
import {Alert} from './components/common/Alert.jsx';
import { EarthQuake } from './components/models/EarthQuake.jsx';
import { Flood } from './components/models/Flood.jsx';
import { Wildfire } from './components/models/WildFire.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/alerts" element={<Alert />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/map" element={<DisasterMap />} />
        <Route path="/EarthQuake" element={<EarthQuake />} />
        <Route path="/Flood" element={<Flood />} />
        <Route path="/wildfire" element={<Wildfire/>} />
        <Route path="/command-center" element={<CommandCenter/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/" element={<Home/>} >

        
          {/* <Route index element={<Dashboard />} />
          <Route path="map" element={<h1>Map</h1>} />
          <Route path="command-center" element={<CommandCenter />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
