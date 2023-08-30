//
// View.tsx: code for the View option for the Jungian quiz type
//
import '../App.css'
import { useEffect, useState } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok
JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

let storedImageString = "";
let opacityValue = defaultSliderValue;

// draw: draw the grid of blue, green, red, and yellow squares defined in storedImageString
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, storedImageString, opacityValue );
};

// DFlexImageAndSliderValues: function component to display a jungian image
function DFlexImageAndSliderValues( props:JungianLib.JungianSliderValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of DFlexImageAndSliderValues() in View.tsx" );
  }

  const width = JungianLib.getCanvasWidth();
  const height = JungianLib.getCanvasHeight();

  opacityValue = props.opacityValue;

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexImageAndSliderValues() in View.tsx" );
  }

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card jungian-canvas">
            <Canvas
              draw={draw}
              width={width}
              height={height}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-3 card align-items-center">
          {JungianLib.imagePropNames[0]}: {props.opacityValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.imagePropNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.imagePropNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.imagePropNames[3]}: {props.bAndYVsGandRValue}
        </div>
      </div>
    </>
  );
}

// DFlexContainer: function component containing a "d-flex" MDB container
function DFlexContainer() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of DFlexContainer() in View.tsx" );
  }

  const [currentSliderValues, setCurrentSliderValues] = useState([defaultSliderValue]);

  useEffect(() => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of useEffect in DFlexContainer() in View.tsx" );
    }
    setCurrentSliderValues( JungianLSLib.getSliderValues() );
    storedImageString = JungianLSLib.getImageString();
    if ( JungianLib.logLogicFlow ) {
      // console.log( "useEffect in DFlexContainer: currentSliderValues[0] = " + currentSliderValues[0] );
      // console.log( "useEffect in DFlexContainer: currentSliderValues[1] = " + currentSliderValues[1] );
      // console.log( "useEffect in DFlexContainer: currentSliderValues[2] = " + currentSliderValues[2] );
      // console.log( "useEffect in DFlexContainer: currentSliderValues[3] = " + currentSliderValues[3] );
      console.log( "Exiting useEffect in DFlexContainer() in View.tsx" );
    }
  }, []);

  let createOrRefineMessage = "";

  if ( storedImageString.length === 0 ) {
    createOrRefineMessage = "Please use the Create option to create an image before you can View it.";
  } else {
    createOrRefineMessage = "You can now use the Refine option to refine your image.";
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexContainer() in View.tsx" );
  }

  return (
    <div className="container">
      <div className="row mt-2 d-flex justify-content-center">
        <h5>{createOrRefineMessage}</h5>
        <DFlexImageAndSliderValues
          opacityValue={currentSliderValues[0] ?? defaultSliderValue}
          blueVsYellowValue={currentSliderValues[1] ?? defaultSliderValue}
          greenVsRedValue={currentSliderValues[2] ?? defaultSliderValue}
          bAndYVsGandRValue={currentSliderValues[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// View: default "mainline" component for this menu option
function View() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of View() in View.tsx: return()ing from View()" );
  }

  return (
    <div id="view">
      <h2>View</h2>
      <DFlexContainer />
    </div>
  )
}

export default View
