import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import Am from './Am.tsx'
import Noon from './Noon.tsx'
import Pm from './Pm.tsx'
import Midnight from './Midnight.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Am">AM</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Noon">Noon</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Pm">PM</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Midnight">Midnight</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container d-flex justify-content-center">
        <Routes>
          <Route path="/Am" element={<Am />} />
          <Route path="/Noon" element={<Noon />} />
          <Route path="/Pm" element={<Pm />} />
          <Route path="/Midnight" element={<Midnight />} />
        </Routes>
      </div>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
