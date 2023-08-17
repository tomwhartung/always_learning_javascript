//
// View.tsx: code for the View option
//
import '../App.css'
import { useEffect, useState } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

let savedImageString = "";

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;
  const innerSquareWidth = JungianLib.canvasWidth - ( 2 * JungianLib.gridTopX );
  const innerSquareHeight = JungianLib.canvasHeight - ( 2 * JungianLib.gridTopY );
  const imageCharArray: string[] = [];

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Paint the inner square white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(JungianLib.gridTopY, JungianLib.gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = JungianLib.gridTopX;
  let squareTopY = JungianLib.gridTopY;
  let colorLetter = "B";
  let imgStrIdx = 0;
  const opacityPercent = JungianLib.globalProps.opacityPercent;
// console.log( "draw: JungianLib.globalProps.opacityPercent = " + JungianLib.globalProps.opacityPercent.toString() );
// console.log( "draw: opacityPercent = " + opacityPercent.toString() );
  console.log( "draw() in View.tsx: savedImageString = '" + savedImageString + "'" );
  console.log( "draw() in View.tsx: savedImageString.length = '" + savedImageString.length + "'" );

  if ( savedImageString.length > 0 ) {
    for ( let row=0; row < JungianLib.gridSize; row++ ) {
      squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
      for ( let col=0; col < JungianLib.gridSize; col++ ){
        colorLetter = imageCharArray[imgStrIdx++];
      //console.log( "colorLetter = " + colorLetter );
        squareTopX = JungianLib.gridTopX + (col * JungianLib.squareSize);
        if ( colorLetter == "B" ) {
          context.fillStyle = "rgba(0, 0, 255, " + opacityPercent.toString() + ")";
        } else if ( colorLetter == "G" ) {
          context.fillStyle = "rgba(0, 255, 0, " + opacityPercent.toString() + ")";
        } else if ( colorLetter == "R" ) {
          context.fillStyle = "rgba(255, 0, 0, " + opacityPercent.toString() + ")";
        } else if ( colorLetter == "Y" ) {
          context.fillStyle = "rgba(255, 255, 0, " + opacityPercent.toString() + ")";
        } else {
          context.fillStyle = "rgb(255, 255, 255, " + opacityPercent.toString() + ")";
        }
        context.fillRect( squareTopX, squareTopY, JungianLib.squareSize, JungianLib.squareSize );
      }
    }
  }
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
      savedImageString = JSON.parse( rawStoredImageString );
      console.log( "DFlexContainer() in View.tsx: savedImageString = '" + savedImageString + "'" );
    } else {
       console.log( "DFlexContainer() in View.tsx: imageString NOT FOUND in localStorage!!!" );
    }
  }, []);

  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[0] = " + currentSliderValues[0] );
  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[1] = " + currentSliderValues[1] );
  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[2] = " + currentSliderValues[2] );
  // console.log( "DFlexContainer() in View.tsx: currentSliderValues[3] = " + currentSliderValues[3] );

  let createOrRefineMessage = "";

  if ( savedImageString.length === 0 ) {
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
