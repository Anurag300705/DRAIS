import { useState } from 'react'
import './App.css'
import {Login} from './pages/Login.jsx';
// import {Dashboard} from './pages/Dashboard.jsx';
import CommandCenter from './pages/CommandCenter.jsx';
import ResourceAllocation from './components/disaster/ResourceAllocation.jsx';
import TeamManagement from './components/disaster/TeamManagement.jsx';
import DisasterMap from './pages/DisasterMap.jsx';
import Layout from './components/common/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/common/Home.jsx';
import {Alert} from './components/common/Alert.jsx';
import { EarthQuake } from './components/models/EarthQuake.jsx';
import { Flood } from './components/models/Flood.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/resources" element={<ResourceAllocation />} />
        <Route path="/teams" element={<TeamManagement />} />
        <Route path="/alerts" element={<Alert />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<DisasterMap />} />
        <Route path="/EarthQuake" element={<EarthQuake />} />
        <Route path="/Flood" element={<Flood />} />
        <Route path="/command-center" element={<CommandCenter/>} />
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
