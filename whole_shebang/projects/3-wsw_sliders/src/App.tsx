//
// src/App.tsx: Main file for the 4-canvas_with_sliders
// ----------------------------------------------------
//
// import React from 'react'   // Copied from main.tsx to fix "error"
import './App.css'

import { ChangeEvent, useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import Canvas from './Canvas.tsx';

// Important types
interface MySliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}
// GrojaesqueImageProps: values that come from the sliders
interface GrojaesqueImageProps {
  opacityValue: number;           // [0 .. 100]
  blueVsYellowValue: number;      // [0 .. 100]
  greenVsRedValue: number;        // [0 .. 100]
  bAndYVsGandRValue: number;      // [0 .. 100]
}
// GrojaesqueImagePercents: slider values as percentages, used to create the image
interface GrojaesqueImagePercents {
  opacityPercent: number;           // [0.0 .. 1.0]
  blueVsYellowPercent: number;      // [0.0 .. 1.0]
  greenVsRedPercent: number;        // [0.0 .. 1.0]
  bAndYVsGandRPercent: number;      // [0.0 .. 1.0]
}

// Important constants
const defaultValue = 50;
const numberOfSliderCards = 4;      // Warning: Do not make this greater
                                    // than or equal to the number of
                                    // elements in grojaesqueImagePropNames
                                    // and grojaesqueImagePropLabels
const grojaesqueImagePropLabels: readonly string[] = [
  "Opacity",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
const grojaesqueImagePropNames: readonly string[] = [
  "Opacity",
  "Y vs B",
  "R vs G",
  "G&R vs B&Y",
];
const colorLetters = [
  "B",   // Blue
  "G",   // Green
  "R",   // Red
  "Y",   // Yellow
  "X",   // Invalid!
];
const gridTopX = 10;      // X location of top left corner of grid
const gridTopY = 10;      // Y location of top left corner of grid
const squareSize = 15;    // Size of each square
const gridSize = 19;      // No. of squares in each row and column
const canvasWidth = ( squareSize * gridSize ) + ( 2 * gridTopX );
const canvasHeight = ( squareSize * gridSize ) + ( 2 * gridTopY );
console.log( "canvasWidth = " + canvasWidth.toString() + ", canvasHeight = " + canvasHeight.toString() );

// ************************************************************************************************
// globalProps: A TEMPORARY GLOBAL variable to be replaced by a Context whatever in a later Project
// ************************************************************************************************
const globalProps: GrojaesqueImagePercents = {
  opacityPercent: valueToPct( defaultValue ),
  blueVsYellowPercent: valueToPct( defaultValue ),
  greenVsRedPercent: valueToPct( defaultValue ),
  bAndYVsGandRPercent: valueToPct( defaultValue ),
}

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;
  const innerSquareWidth = canvasWidth - ( 2 * gridTopX );
  const innerSquareHeight = canvasHeight - ( 2 * gridTopY );

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Paint the inner square white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(gridTopY, gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let randomColorLetter = "B";
  const opacityPercent = globalProps.opacityPercent;
// console.log( "draw: globalProps.opacityPercent = " + globalProps.opacityPercent.toString() );
// console.log( "draw: opacityPercent = " + opacityPercent.toString() );

  for ( let row=0; row < gridSize; row++ ) {
    squareTopY = gridTopY + (row * squareSize);
    for ( let col=0; col < gridSize; col++ ){
      randomColorLetter = getRandomPrimaryColor();
    // console.log( "randomColorLetter = " + randomColorLetter );
      squareTopX = gridTopX + (col * squareSize);
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

// valueToPct: convert a slider value [0 - 100] to a percentage of opacity [0.0 - 1.00]
function valueToPct( value: number ) : number {
  const percent = value / 100;
  return ( percent );
}

// getRandomPrimaryColor: return a single character, "B", "G", "R", or "Y"
function getRandomPrimaryColor() {
  const blueVsYellowPercent = globalProps.blueVsYellowPercent;
  const greenVsRedPercent = globalProps.greenVsRedPercent;
  const bAndYVsGandRPercent = globalProps.bAndYVsGandRPercent;
  let randomFloat = Math.random();
  let randomColorLetter = colorLetters[4];  // default is INVALID!

  if ( randomFloat <= bAndYVsGandRPercent ) {
    randomFloat = Math.random();
    if ( randomFloat <= blueVsYellowPercent ) {
      randomColorLetter = colorLetters[0];
    } else {
      randomColorLetter = colorLetters[3];
    }
  } else {
    randomFloat = Math.random();
    if ( randomFloat <= greenVsRedPercent ) {
      randomColorLetter = colorLetters[1];
    } else {
      randomColorLetter = colorLetters[2];
    }
  }

  return randomColorLetter;
}


// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderProps ) {
  const sliderOppositeValue = 100 - props.sliderVal;
  const sliderId = "myslider-" + props.sliderNo.toString();
  let sliderLabel = sliderOppositeValue.toString() + "% " +
                    grojaesqueImagePropNames[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  if ( props.sliderNo == 0 ) {
    sliderLabel = grojaesqueImagePropNames[props.sliderNo] + ": " +
                  props.sliderVal.toString();
// } else {
//   const sliderLabel = sliderOppositeValue.toString() +
//                       grojaesqueImagePropNames[props.sliderNo] + ": " +
//                       props.sliderVal.toString();
  }

  return (
    <>
      <MDBRange
        defaultValue={defaultValue}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p>{sliderLabel}</p>
    </>
  );
}

// MySliderCard: function component interface to the MDBRange component
function MySliderCard( props:MySliderProps ) {
  return (
    <div className="card">
      <MySlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}

// FixedSizeImageCards: function component to display a grojaesque image
function FixedSizeImageCards( props:GrojaesqueImageProps ) {
  const width = canvasWidth;
  const height = canvasHeight;

  // **TEMPORARILY** Save the raw slider values as percentages in a **GLOBAL OBJECT**
  globalProps.opacityPercent = valueToPct( props.opacityValue );
  globalProps.blueVsYellowPercent = valueToPct( props.blueVsYellowValue );
  globalProps.greenVsRedPercent = valueToPct( props.greenVsRedValue );
  globalProps.bAndYVsGandRPercent = valueToPct( props.bAndYVsGandRValue );

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
    squareX = Math.floor( ( pixelX - gridTopX ) / squareSize );
    squareY = Math.floor( ( pixelY - gridTopY ) / squareSize );
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
          <p>{grojaesqueImagePropLabels[0]}: {props.opacityValue}</p>
          <p>{grojaesqueImagePropLabels[1]}: {props.blueVsYellowValue}</p>
          <p>{grojaesqueImagePropLabels[2]}: {props.greenVsRedValue}</p>
          <p>{grojaesqueImagePropLabels[3]}: {props.bAndYVsGandRValue}</p>
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
  const [values, setValues] = useState([defaultValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log( "Value of slider in column " + col.toString() + " is now " + val.toString() );
    const nextValues = values.slice();
    nextValues[col] = Number(val);
    setValues(nextValues);
  }

  // Construct markup for a set of columns containing MySliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <MySliderCard
         sliderNo={col}
         sliderVal={values[col] ?? defaultValue}
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
          opacityValue={values[0] ?? defaultValue}
          blueVsYellowValue={values[1] ?? defaultValue}
          greenVsRedValue={values[2] ?? defaultValue}
          bAndYVsGandRValue={values[3] ?? defaultValue} />
      </div>
    </div>
  )
}

// DFlexImageCards: function component to display a grojaesque image
function DFlexImageCards( props:GrojaesqueImageProps ) {
  const width = canvasWidth;
  const height = canvasHeight;

  // **TEMPORARILY** Save the raw slider values as percentages in a **GLOBAL OBJECT**
  globalProps.opacityPercent = valueToPct( props.opacityValue );
  globalProps.blueVsYellowPercent = valueToPct( props.blueVsYellowValue );
  globalProps.greenVsRedPercent = valueToPct( props.greenVsRedValue );
  globalProps.bAndYVsGandRPercent = valueToPct( props.bAndYVsGandRValue );

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
          <div className="card grojaesque-canvas">
            <p>{grojaesqueImagePropLabels[0]}: {props.opacityValue}</p>
            <p>{grojaesqueImagePropLabels[1]}: {props.blueVsYellowValue}</p>
            <p>{grojaesqueImagePropLabels[2]}: {props.greenVsRedValue}</p>
            <p>{grojaesqueImagePropLabels[3]}: {props.bAndYVsGandRValue}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card grojaesque-canvas">
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
  const [values, setValues] = useState([defaultValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log( "Value of slider in column " + col.toString() + " is now " + val.toString() );
    const nextValues = values.slice();
    nextValues[col] = Number(val);
    setValues(nextValues);
  }

  // Construct markup for a set of columns containing MySliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <MySliderCard
         sliderNo={col}
         sliderVal={values[col] ?? defaultValue}
         onSliderChange={ (evt) => handleChangeArrayOfNumbers(evt,col) }
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h4>DFlexContainer:</h4>
      <div className="row mt-4 d-flex justify-content-center">
        {sliderNumberCols}
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <DFlexImageCards
          opacityValue={values[0] ?? defaultValue}
          blueVsYellowValue={values[1] ?? defaultValue}
          greenVsRedValue={values[2] ?? defaultValue}
          bAndYVsGandRValue={values[3] ?? defaultValue} />
      </div>
    </div>
  )
}

// App: this App's "mainline" component
function App() {
  return (
    <>
      <h2>Fixed-Sized and D-Flex <span className="fst-italic">"Groja-esque"</span> Images</h2>
      <FixedContainer />
      <hr />
      <DFlexContainer />
    </>
  )
}

export default App
