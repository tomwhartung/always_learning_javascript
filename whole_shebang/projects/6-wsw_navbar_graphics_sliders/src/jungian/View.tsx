//
// View.tsx: code for the View option
//
import '../App.css'
import { useEffect, useState } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

let storedImageString = "";

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, storedImageString );
};

// DFlexViewSliderValuesAndImage: function component to display a jungian image
function DFlexViewSliderValuesAndImage( props:JungianLib.JungianImageProps ) {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on resizable image at (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
  }

  console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.opacityValue = " + props.opacityValue );
  console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.blueVsYellowValue = " + props.blueVsYellowValue );
  console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.greenVsRedValue = " + props.greenVsRedValue );
  console.log( "DFlexViewSliderValuesAndImage() in View.tsx: props.bAndYVsGandRValue = " + props.bAndYVsGandRValue );

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-4 align-items-center">
          <div className="card jungian-canvas">
            <p>{JungianLib.jungianImagePropLabels[0]}: {props.opacityValue}</p>
            <p>{JungianLib.jungianImagePropLabels[1]}: {props.blueVsYellowValue}</p>
            <p>{JungianLib.jungianImagePropLabels[2]}: {props.greenVsRedValue}</p>
            <p>{JungianLib.jungianImagePropLabels[3]}: {props.bAndYVsGandRValue}</p>
          </div>
        </div>
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
    </>
  );
}

// DFlexContainer: function component containing a "d-flex" MDB container
function DFlexContainer() {
  const [currentSliderValues, setCurrentSliderValues] = useState([defaultSliderValue]);

  useEffect(() => {
    const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
    if ( rawStoredSliderValues ) {
      console.log( "useEffect() in DFlexContainer() in View.tsx: found rawStoredSliderValues.toString()  = " + rawStoredSliderValues.toString() );
      const storedSliderValues = JSON.parse( rawStoredSliderValues );
      // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[0] = " + storedSliderValues[0] );
      // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[1] = " + storedSliderValues[1] );
      // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[2] = " + storedSliderValues[2] );
      // console.log( "useEffect in DFlexContainer() in View.tsx: storedSliderValues[3] = " + storedSliderValues[3] );
      setCurrentSliderValues( storedSliderValues );
    } else {
       console.log( "useEffect() in DFlexContainer() in View.tsx: sliderValues NOT FOUND in localStorage!!!" );
    }
    const rawStoredImageString = localStorage.getItem( 'imageString' );
    if ( rawStoredImageString ) {
      storedImageString = JSON.parse( rawStoredImageString );
      //   console.log( "DFlexContainer() in View.tsx: storedImageString = '" + storedImageString + "'" );
      // } else {
      //    console.log( "DFlexContainer() in View.tsx: imageString NOT FOUND in localStorage!!!" );
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
  return (
    <div id="view">
      <h2>View</h2>
      <DFlexContainer />
    </div>
  )
}

export default View
