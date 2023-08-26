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
// JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues
JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok

let storedImageString = "";
let opacityValue = defaultSliderValue;

// draw: draw the grid of blue, green, red, and yellow squares defined in storedImageString
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, storedImageString, opacityValue );
};

// DFlexViewSliderValuesAndImage: function component to display a jungian image
function DFlexViewSliderValuesAndImage( props:JungianLib.JungianSliderValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of DFlexViewSliderValuesAndImage() in View.tsx" );
  }

  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on resizable image at (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
  }

  // console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.opacityValue = " + props.opacityValue );
  // console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.blueVsYellowValue = " + props.blueVsYellowValue );
  // console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.greenVsRedValue = " + props.greenVsRedValue );
  // console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.bAndYVsGandRValue = " + props.bAndYVsGandRValue );

  opacityValue = props.opacityValue;

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexViewSliderValuesAndImage() in View.tsx" );
  }

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card jungian-canvas">
            <Canvas
              draw={draw}
              onClick={handleImageClick}
              width={width}
              height={height} />
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
    const storedSliderValues = JungianLSLib.getSliderValues();
    setCurrentSliderValues( storedSliderValues );
    // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[0] = " + storedSliderValues[0] );
    // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[1] = " + storedSliderValues[1] );
    // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[2] = " + storedSliderValues[2] );
    // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[3] = " + storedSliderValues[3] );
    storedImageString = JungianLSLib.getImageString();
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting useEffect in DFlexContainer() in View.tsx: storedImageString = '" + storedImageString + "'" );
    }
  }, []);

  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[0] = " + currentSliderValues[0] );
  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[1] = " + currentSliderValues[1] );
  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[2] = " + currentSliderValues[2] );
  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[3] = " + currentSliderValues[3] );

  let createOrRefineMessage = "";

  if ( storedImageString.length === 0 ) {
    createOrRefineMessage = "You must use the Create option to create an image before you can View it.";
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
        <DFlexViewSliderValuesAndImage
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
