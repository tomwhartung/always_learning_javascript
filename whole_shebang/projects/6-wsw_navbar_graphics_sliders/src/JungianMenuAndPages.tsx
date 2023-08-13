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

let imageString: string[] = [];

// JungianMenuAndPages: Jungian App's menu and pages
function JungianMenuAndPages() {
  let useEffectSliderValues: JungianLib.JungianImageProps = {
    opacityValue: SliderLib.defaultSliderValue,
    blueVsYellowValue: SliderLib.defaultSliderValue,
    greenVsRedValue: SliderLib.defaultSliderValue,
    bAndYVsGandRValue: SliderLib.defaultSliderValue,
  };
  // If localStorage already has savedSliderValues and an imageString
  //   We want to use those values!
  useEffect(() => {
    const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
    if ( rawStoredSliderValues ) {
      const storedSliderValues = JSON.parse( rawStoredSliderValues );
      useEffectSliderValues.opacityValue = storedSliderValues[0];
      useEffectSliderValues.blueVsYellowValue = storedSliderValues[1];
      useEffectSliderValues.greenVsRedValue = storedSliderValues[2];
      useEffectSliderValues.bAndYVsGandRValue = storedSliderValues[3];
      console.log( "JungianMenuAndPages().useEffect: useEffectSliderValues.opacityValue = " + useEffectSliderValues.opacityValue );
      console.log( "JungianMenuAndPages().useEffect: useEffectSliderValues.blueVsYellowValue = " + useEffectSliderValues.blueVsYellowValue );
      console.log( "JungianMenuAndPages().useEffect: useEffectSliderValues.greenVsRedValue = " + useEffectSliderValues.greenVsRedValue );
      console.log( "JungianMenuAndPages().useEffect: useEffectSliderValues.bAndYVsGandRValue = " + useEffectSliderValues.bAndYVsGandRValue );
    } else {
       console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: sliderValues NOT FOUND in localStorage!!!" );
    }
  //const rawStoredImageString = localStorage.getItem( 'imageString' );
  //if ( rawStoredImageString ) {
  //  imageString = JSON.parse( rawStoredImageString );
  //  console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: rawStoredImageString = '" + rawStoredImageString + "'" );
  //  imageString = rawStoredImageString;
  //  console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: imageString = '" + imageString + "'" );
  //} else {
  //   console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: imageString NOT FOUND in localStorage!!!" );
  //}
  }, []);
  // These are the values we save in localStorage:
  let savedSliderValues: JungianLib.JungianImageProps = {
    opacityValue: useEffectSliderValues.blueVsYellowValue,
    blueVsYellowValue: useEffectSliderValues.blueVsYellowValue,
    greenVsRedValue: useEffectSliderValues.greenVsRedValue,
    bAndYVsGandRValue: useEffectSliderValues.bAndYVsGandRValue,
  };

  console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.opacityValue = " + savedSliderValues.opacityValue );
  console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.blueVsYellowValue = " + savedSliderValues.blueVsYellowValue );
  console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.greenVsRedValue = " + savedSliderValues.greenVsRedValue );
  console.log( "JungianMenuAndPages() in JungianMenuAndPages.tsx: savedSliderValues.bAndYVsGandRValue = " + savedSliderValues.bAndYVsGandRValue );

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
          <p>useEffectSliderValues.opacityValue = {useEffectSliderValues.opacityValue} and
             savedSliderValues.opacityValue = {savedSliderValues.opacityValue}</p>
          <p>useEffectSliderValues.blueVsYellowValue = {useEffectSliderValues.blueVsYellowValue} and
             savedSliderValues.blueVsYellowValue = {savedSliderValues.blueVsYellowValue}</p>
          <p>useEffectSliderValues.greenVsRedValue = {useEffectSliderValues.greenVsRedValue} and
             savedSliderValues.greenVsRedValue = {savedSliderValues.greenVsRedValue}</p>
          <p>useEffectSliderValues.bAndYVsGandRValue = {useEffectSliderValues.bAndYVsGandRValue} and
             savedSliderValues.bAndYVsGandRValue = {savedSliderValues.bAndYVsGandRValue}</p>
        </div>
        <div className="row top-row">
          <Routes>
            <Route path="/Create" element=
              {<Create
                opacityValue={savedSliderValues.opacityValue}
                blueVsYellowValue={savedSliderValues.blueVsYellowValue}
                greenVsRedValue={savedSliderValues.greenVsRedValue}
                bAndYVsGandRValue={savedSliderValues.bAndYVsGandRValue}
              />}
            />
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
