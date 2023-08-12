//
// JungianMenuAndPages.tsx: code for the Jungian App's menu and includes the Jungian App's pages
//
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';

import * as SliderLib from './lib/SliderLib.tsx';
import * as JungianLib from './lib/JungianLib.tsx';

import Create from './jungian/Create.tsx'
import View from './jungian/View.tsx'
import Refine from './jungian/Refine.tsx'
import Help from './jungian/Help.tsx'

import './index.css'
import './customizations.css'

// These are the values we save in localStorage:
let savedSliderValues: JungianLib.JungianImageProps = {
  opacityValue: SliderLib.defaultSliderValue,
  blueVsYellowValue: SliderLib.defaultSliderValue,
  greenVsRedValue: SliderLib.defaultSliderValue,
  bAndYVsGandRValue: SliderLib.defaultSliderValue,
};
let imageString: string[] = [];


// JungianMenuAndPages: Jungian App's menu and pages
function JungianMenuAndPages() {
  // If localStorage already has savedSliderValues and an imageString
  //   We want to use those values!
  useEffect(() => {
    const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
    if ( rawStoredSliderValues ) {
      savedSliderValues = JSON.parse( rawStoredSliderValues );
      console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.opacityValue = " + savedSliderValues.opacityValue );
      console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.blueVsYellowValue = " + savedSliderValues.blueVsYellowValue );
      console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.greenVsRedValue = " + savedSliderValues.greenVsRedValue );
      console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.bAndYVsGandRValue = " + savedSliderValues.bAndYVsGandRValue );
    } else {
       console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: sliderValues NOT FOUND in localStorage!!!" );
    }
    const rawStoredImageString = localStorage.getItem( 'imageString' );
    if ( rawStoredImageString ) {
      imageString = JSON.parse( rawStoredImageString );
      console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: imageString = '" + imageString + "'" );
    } else {
       console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: imageString NOT FOUND in localStorage!!!" );
    }
  }, []);


  return (
    <BrowserRouter>
      <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a className="nav-link link-secondary" href="index.html">
                <i className="fas fa-house"></i>&nbsp;Home
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
        <div className="row top-row">
          <Routes>
            <Route path="/Create" element={<Create  />} />
            <Route path="/View" element={<View />} />
            <Route path="/Refine" element={<Refine />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default JungianMenuAndPages
