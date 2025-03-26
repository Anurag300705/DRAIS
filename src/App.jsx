import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Login} from './pages/Login.jsx';
import {Dashboard} from './pages/Dashboard.jsx';
import CommandCenter from './pages/CommandCenter.jsx';
import DisasterMap from './pages/DisasterMap.jsx';
import Layout from './components/common/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/common/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<DisasterMap />} />
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
