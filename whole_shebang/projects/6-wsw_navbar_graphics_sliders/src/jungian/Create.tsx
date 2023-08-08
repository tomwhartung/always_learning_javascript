//
// Create.tsx: code for the Create option
//
import '../App.css'
import { ChangeEvent, useState } from 'react';

import Canvas from '../lib/Canvas.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import SliderCard from './SliderCard.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

const squareSize = 15;    // Size of each square
const gridSize = 19;      // No. of squares in each row and column
const canvasWidth = ( squareSize * gridSize ) + ( 2 * JungianLib.gridTopX );
const canvasHeight = ( squareSize * gridSize ) + ( 2 * JungianLib.gridTopY );
console.log( "canvasWidth = " + canvasWidth.toString() + ", canvasHeight = " + canvasHeight.toString() );

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;
  const innerSquareWidth = canvasWidth - ( 2 * JungianLib.gridTopX );
  const innerSquareHeight = canvasHeight - ( 2 * JungianLib.gridTopY );

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

  for ( let row=0; row < gridSize; row++ ) {
    squareTopY = JungianLib.gridTopY + (row * squareSize);
    for ( let col=0; col < gridSize; col++ ){
      randomColorLetter = JungianLib.getRandomPrimaryColor();
    // console.log( "randomColorLetter = " + randomColorLetter );
      squareTopX = JungianLib.gridTopX + (col * squareSize);
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
      context.fillRect( squareTopX, squareTopY, squareSize, squareSize );
    }
  }
};

// FixedSizeImageCards: function component to display a jungian image
function FixedSizeImageCards( props:JungianLib.JungianImageProps ) {
  const width = canvasWidth;
  const height = canvasHeight;

  // **TEMPORARILY** Save the raw slider values as percentages in a **GLOBAL OBJECT**
  JungianLib.globalProps.opacityPercent = JungianLib.valueToPct( props.opacityValue );
  JungianLib.globalProps.blueVsYellowPercent = JungianLib.valueToPct( props.blueVsYellowValue );
  JungianLib.globalProps.greenVsRedPercent = JungianLib.valueToPct( props.greenVsRedValue );
  JungianLib.globalProps.bAndYVsGandRPercent = JungianLib.valueToPct( props.bAndYVsGandRValue );

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
    squareX = Math.floor( ( pixelX - JungianLib.gridTopX ) / squareSize );
    squareY = Math.floor( ( pixelY - JungianLib.gridTopY ) / squareSize );
    if ( squareX < 0 && squareY < 0 ) {
      console.log( "You clicked on the upper-left corner, not on a square" );
    } else if ( squareX < 0 && squareY >= gridSize) {
      console.log( "You clicked on the lower-left corner, not on a square" );
    } else if ( squareX >= gridSize && squareY < 0 ) {
      console.log( "You clicked on the upper-right corner, not on a square" );
    } else if ( squareX >= gridSize && squareY >= gridSize) {
      console.log( "You clicked on the lower-right corner, not on a square" );
    } else if ( squareX < 0 ) {
      console.log( "You clicked on the left-side border, not on a square" );
    } else if ( squareY < 0 ) {
      console.log( "You clicked on the upper border, not on a square" );
    } else if ( squareX >= gridSize ) {
      console.log( "You clicked on the right-side border, not on a square" );
    } else if ( squareY >= gridSize ) {
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
  const [values, setValues] = useState([defaultSliderValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log( "Value of slider in column " + col.toString() + " is now " + val.toString() );
    const nextValues = values.slice();
    nextValues[col] = Number(val);
    setValues(nextValues);
  }

  // Construct markup for a set of columns containing SliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <SliderCard
         sliderNo={col}
         sliderVal={values[col] ?? defaultSliderValue}
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
          opacityValue={values[0] ?? defaultSliderValue}
          blueVsYellowValue={values[1] ?? defaultSliderValue}
          greenVsRedValue={values[2] ?? defaultSliderValue}
          bAndYVsGandRValue={values[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
function Create() {
  return (
    <div id="create">
      <h2>Create</h2>
      <FixedContainer />
    </div>
  )
}

export default Create
