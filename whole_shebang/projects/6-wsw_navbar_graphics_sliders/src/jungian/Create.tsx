//
// Create.tsx: code for the Create option
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import SliderCard from './SliderCard.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// These are the values we save in localStorage:
let sliderValues = [
  defaultSliderValue,
  defaultSliderValue,
  defaultSliderValue,
  defaultSliderValue,
];
let imageString: string[];

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
  let randomColorLetter = "B";
  const opacityPercent = JungianLib.globalProps.opacityPercent;
// console.log( "draw: JungianLib.globalProps.opacityPercent = " + JungianLib.globalProps.opacityPercent.toString() );
// console.log( "draw: opacityPercent = " + opacityPercent.toString() );

  imageString = [];
  for ( let row=0; row < JungianLib.gridSize; row++ ) {
    squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
    for ( let col=0; col < JungianLib.gridSize; col++ ){
      randomColorLetter = JungianLib.getRandomPrimaryColor();
    // console.log( "randomColorLetter = " + randomColorLetter );
      squareTopX = JungianLib.gridTopX + (col * JungianLib.squareSize);
      if ( randomColorLetter == "B" ) {
        context.fillStyle = "rgba(0, 0, 255, " + opacityPercent.toString() + ")";
      } else if ( randomColorLetter == "G" ) {
        context.fillStyle = "rgba(0, 255, 0, " + opacityPercent.toString() + ")";
      } else if ( randomColorLetter == "R" ) {
        context.fillStyle = "rgba(255, 0, 0, " + opacityPercent.toString() + ")";
      } else if ( randomColorLetter == "Y" ) {
        context.fillStyle = "rgba(255, 255, 0, " + opacityPercent.toString() + ")";
      } else {
        context.fillStyle = "rgb(255, 255, 255, " + opacityPercent.toString() + ")";
      }
      context.fillRect( squareTopX, squareTopY, JungianLib.squareSize, JungianLib.squareSize );
      imageString.push( randomColorLetter );
    }
  }
  console.log( "Create: imageString: " + imageString )
};

// FixedSizeImageCards: function component to display a jungian image
function FixedSizeImageCards( props:JungianLib.JungianImageProps ) {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  // **TEMPORARILY** Save the raw opacityPercent slider value as a percentage in a **GLOBAL OBJECT**
  JungianLib.globalProps.opacityPercent = JungianLib.valueToPct( props.opacityValue );

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on the FixedSizeImage at pixel coords (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
    logSquareCoords( pixelX, pixelY );
  }
  function logSquareCoords( pixelX: number, pixelY: number ) {
    let squareX = 0;
    let squareY = 0;
    squareX = Math.floor( ( pixelX - JungianLib.gridTopX ) / JungianLib.squareSize );
    squareY = Math.floor( ( pixelY - JungianLib.gridTopY ) / JungianLib.squareSize );
    if ( squareX < 0 && squareY < 0 ) {
      console.log( "You clicked on the upper-left corner, not on a square" );
    } else if ( squareX < 0 && squareY >= JungianLib.gridSize) {
      console.log( "You clicked on the lower-left corner, not on a square" );
    } else if ( squareX >= JungianLib.gridSize && squareY < 0 ) {
      console.log( "You clicked on the upper-right corner, not on a square" );
    } else if ( squareX >= JungianLib.gridSize && squareY >= JungianLib.gridSize) {
      console.log( "You clicked on the lower-right corner, not on a square" );
    } else if ( squareX < 0 ) {
      console.log( "You clicked on the left-side border, not on a square" );
    } else if ( squareY < 0 ) {
      console.log( "You clicked on the upper border, not on a square" );
    } else if ( squareX >= JungianLib.gridSize ) {
      console.log( "You clicked on the right-side border, not on a square" );
    } else if ( squareY >= JungianLib.gridSize ) {
      console.log( "You clicked on the lower border, not on a square" );
    } else {
      console.log( "Pixel coords correspond to squareCoords (" + squareX.toString() + ", " + squareY.toString() + ")" );
    }
  }

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-4 align-items-center">
          <p>{JungianLib.jungianImagePropLabels[0]}: {props.opacityValue}</p>
          <p>{JungianLib.jungianImagePropLabels[1]}: {props.blueVsYellowValue}</p>
          <p>{JungianLib.jungianImagePropLabels[2]}: {props.greenVsRedValue}</p>
          <p>{JungianLib.jungianImagePropLabels[3]}: {props.bAndYVsGandRValue}</p>
        </div>
        <div className="col-md-8">
          <Canvas
            draw={draw}
            onClick={handleImageClick}
            width={width}
            height={height} />
        </div>
      </div>
    </>
  );
}

// FixedContainer: function component containing an MDB container
function FixedContainer() {
  const [sliderValues, setSliderValues] = useState([defaultSliderValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  //console.log( "Value of slider number " + col.toString() + " is now " + val.toString() );
    const nextSliderValues = sliderValues.slice();
    nextSliderValues[col] = Number(val);
    setSliderValues(nextSliderValues);
  }

  useEffect(() => {
    localStorage.setItem( 'sliderValues', JSON.stringify(sliderValues) );
    localStorage.setItem( 'imageString', JSON.stringify(imageString) );
  }, [sliderValues]);

  // Construct markup for the SliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <SliderCard
         sliderNo={col}
         sliderVal={sliderValues[col] ?? defaultSliderValue}
         onSliderChange={ (evt) => handleChangeArrayOfNumbers(evt,col) }
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h4>FixedContainer:</h4>
      <div className="row mt-4">
        {sliderNumberCols}
      </div>
      <div className="row mt-4">
        <FixedSizeImageCards
          opacityValue={sliderValues[0] ?? defaultSliderValue}
          blueVsYellowValue={sliderValues[1] ?? defaultSliderValue}
          greenVsRedValue={sliderValues[2] ?? defaultSliderValue}
          bAndYVsGandRValue={sliderValues[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
function Create() {
  // If localStorage already has sliderValues and an imageString
  //   We want to use those values!
  useEffect(() => {
    const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
    if ( rawStoredSliderValues ) {
      sliderValues = JSON.parse( rawStoredSliderValues );
      console.log( "Create() in Create.tsx: sliderValues[0] = " + sliderValues[0] );
      console.log( "Create() in Create.tsx: sliderValues[1] = " + sliderValues[1] );
      console.log( "Create() in Create.tsx: sliderValues[2] = " + sliderValues[2] );
      console.log( "Create() in Create.tsx: sliderValues[3] = " + sliderValues[3] );
    }
    const rawStoredImageString = localStorage.getItem( 'imageString' );
    if ( rawStoredImageString ) {
      imageString = JSON.parse( rawStoredImageString );
      console.log( "View: imageString = '" + imageString + "'" );
    }
  }, []);

  return (
    <div id="create">
      <h2>Create</h2>
      <FixedContainer />
    </div>
  )
}

export default Create
