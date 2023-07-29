import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import AppJungian from './AppJungian.tsx'
import Create from './jungian/Create.tsx'
import View from './jungian/View.tsx'
import Refine from './jungian/Refine.tsx'
import Help from './jungian/Help.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a className="nav-link link-secondary" href="index.html">
                <i className="fas fa-house"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Create">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="View">View</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Refine">Refine</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Help">Help</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <Routes>
            <Route path="/Create" element={<Create />} />
            <Route path="/View" element={<View />} />
            <Route path="/Refine" element={<Refine />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <AppJungian />
      </div>
    </div>
  </React.StrictMode>,
)
