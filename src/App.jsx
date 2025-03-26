import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Login} from './pages/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Eta amader jhater project</h1>}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="/map" element={<h1>Map</h1>} />
          {/* <Route path="command-center" element={<CommandCenter />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
