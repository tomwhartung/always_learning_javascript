//
// View.tsx: code for the View option
//
import '../App.css'
import { useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// These are the values we save in localStorage:
let sliderValues = [
  defaultSliderValue,
  defaultSliderValue,
  defaultSliderValue,
  defaultSliderValue,
];
let imageString: string[] = [];

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;
  const innerSquareWidth = JungianLib.canvasWidth - ( 2 * JungianLib.gridTopX );
  const innerSquareHeight = JungianLib.canvasHeight - ( 2 * JungianLib.gridTopY );

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

  for ( let row=0; row < JungianLib.gridSize; row++ ) {
    squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
    for ( let col=0; col < JungianLib.gridSize; col++ ){
      colorLetter = imageString[imgStrIdx++];
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
};

// DFlexImageCards: function component to display a jungian image
function DFlexImageCards( props:JungianLib.JungianImageProps ) {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  // **TEMPORARILY** Save the raw opacityPercent slider value as a percentage in a **GLOBAL OBJECT**
  JungianLib.globalProps.opacityPercent = JungianLib.valueToPct( props.opacityValue );

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on resizable image at (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
  }

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-4 align-items-center">
          <div className="card jungian-canvas">
            <p>{JungianLib.jungianImagePropLabels[0]}: {sliderValues[0]}</p>
            <p>{JungianLib.jungianImagePropLabels[1]}: {sliderValues[1]}</p>
            <p>{JungianLib.jungianImagePropLabels[2]}: {sliderValues[2]}</p>
            <p>{JungianLib.jungianImagePropLabels[3]}: {sliderValues[3]}</p>
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
  
  return (
    <div className="container">
      <h4>DFlexContainer:</h4>
      <div className="row mt-4 d-flex justify-content-center">
        <DFlexImageCards
          opacityValue={sliderValues[0] ?? defaultSliderValue}
          blueVsYellowValue={sliderValues[1] ?? defaultSliderValue}
          greenVsRedValue={sliderValues[2] ?? defaultSliderValue}
          bAndYVsGandRValue={sliderValues[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// View: default "mainline" component for this menu option
function View() {
  useEffect(() => {
    const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
    if ( rawStoredSliderValues ) {
      sliderValues = JSON.parse( rawStoredSliderValues );
      console.log( "View: sliderValues[0] = " + sliderValues[0] );
      console.log( "View: sliderValues[1] = " + sliderValues[1] );
      console.log( "View: sliderValues[2] = " + sliderValues[2] );
      console.log( "View: sliderValues[3] = " + sliderValues[3] );
    }
    const rawStoredImageString = localStorage.getItem( 'imageString' );
    if ( rawStoredImageString ) {
      imageString = JSON.parse( rawStoredImageString );
      console.log( "View: imageString = '" + imageString + "'" );
    }
  }, []);

  return (
    <div id="view">
      <h2>View</h2>
      <DFlexContainer />
    </div>
  )
}

export default View
