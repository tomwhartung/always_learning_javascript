//
// main-jungian.tsx: main jsx module referenced in ../index-jungian.html
//
import React from 'react'
import ReactDOM from 'react-dom/client'

import JungianMenuAndPages from './JungianMenuAndPages.tsx'
import AppJungian from './AppJungian.tsx'

import './index.css'
import './customizations.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JungianMenuAndPages />
    <div className="container-fluid">
      <div className="row">
        <AppJungian />
      </div>
    </div>
  </React.StrictMode>,
)
