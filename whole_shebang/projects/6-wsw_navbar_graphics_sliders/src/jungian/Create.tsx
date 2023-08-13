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
let savedSliderValues: JungianLib.JungianImageProps = {
  opacityValue: defaultSliderValue,
  blueVsYellowValue: defaultSliderValue,
  greenVsRedValue: defaultSliderValue,
  bAndYVsGandRValue: defaultSliderValue,
};
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
  const opacityPercent = JungianLib.globalProps.opacityPercent;
// console.log( "draw: JungianLib.globalProps.opacityPercent = " + JungianLib.globalProps.opacityPercent.toString() );
// console.log( "draw: opacityPercent = " + opacityPercent.toString() );

  if ( imageString.length > 0 ) {
    let imgStrIdx = 0;
    console.log( "draw() in Create.tsx: drawing the image saved in localStorage!" );
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
  } else {
  //console.log( "draw() in Create.tsx: imageString.length is 0, generating a new image!" );
    for ( let row=0; row < JungianLib.gridSize; row++ ) {
      squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
      for ( let col=0; col < JungianLib.gridSize; col++ ){
        colorLetter = JungianLib.getRandomPrimaryColor( savedSliderValues );
      // console.log( "colorLetter = " + colorLetter );
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
        imageString.push( colorLetter );
      }
    }
  }
//console.log( "Create: imageString: " + imageString )
};

// FixedSizeImageCards: function component to display a jungian image
function FixedSizeImageCards( props: JungianLib.JungianImageProps ) {
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
  const [inputSliderValues, setInputSliderValues] = useState([defaultSliderValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  //console.log( "Value of slider number " + col.toString() + " is now " + val.toString() );
    const nextSliderValues = inputSliderValues.slice();
    nextSliderValues[col] = Number(val);
    setInputSliderValues(nextSliderValues);
    imageString = [];    // When a slider value changes, we need to draw a new image
  }

  useEffect(() => {
    localStorage.setItem( 'sliderValues', JSON.stringify(inputSliderValues) );
    console.log( "FixedContainer in Create.tsx: saved inputSliderValues as sliderValues." );
  //localStorage.setItem( 'imageString', JSON.stringify(imageString) );
  //console.log( "FixedContainer in Create.tsx: saved imageString as imageString." );
  }, [inputSliderValues]);

  // Construct markup for the SliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <SliderCard
         sliderNo={col}
         sliderVal={inputSliderValues[col] ?? defaultSliderValue}
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
          opacityValue={inputSliderValues[0] ?? defaultSliderValue}
          blueVsYellowValue={inputSliderValues[1] ?? defaultSliderValue}
          greenVsRedValue={inputSliderValues[2] ?? defaultSliderValue}
          bAndYVsGandRValue={inputSliderValues[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
// function Create( props: JungianLib.JungianImageProps ) {
function Create( {opacityValue, blueVsYellowValue, greenVsRedValue, bAndYVsGandRValue} ) {
//   // If localStorage already has savedSliderValues and an imageString
//   //   We want to use those values!
//   useEffect(() => {
//     const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
//     if ( rawStoredSliderValues ) {
//       savedSliderValues = JSON.parse( rawStoredSliderValues );
//       console.log( "Create() in Create.tsx: savedSliderValues.opacityValue = " + savedSliderValues.opacityValue );
//       console.log( "Create() in Create.tsx: savedSliderValues.blueVsYellowValue = " + savedSliderValues.blueVsYellowValue );
//       console.log( "Create() in Create.tsx: savedSliderValues.greenVsRedValue = " + savedSliderValues.greenVsRedValue );
//       console.log( "Create() in Create.tsx: savedSliderValues.bAndYVsGandRValue = " + savedSliderValues.bAndYVsGandRValue );
//     } else {
//        console.log( "Create() in Create.tsx: sliderValues NOT FOUND in localStorage!!!" );
//     }
//     const rawStoredImageString = localStorage.getItem( 'imageString' );
//     if ( rawStoredImageString ) {
//       imageString = JSON.parse( rawStoredImageString );
//       console.log( "Create() in Create.tsx: imageString = '" + imageString + "'" );
//     } else {
//        console.log( "Create() in Create.tsx: imageString NOT FOUND in localStorage!!!" );
//     }
//   }, []);

  console.log( "Create() in Create.tsx: passed-in opacityValue = '" + opacityValue + "'" );
  console.log( "Create() in Create.tsx: passed-in blueVsYellowValue = '" + blueVsYellowValue + "'" );
  console.log( "Create() in Create.tsx: passed-in greenVsRedValue = '" + greenVsRedValue + "'" );
  console.log( "Create() in Create.tsx: passed-in bAndYVsGandRValue = '" + bAndYVsGandRValue + "'" );
//console.log( "Create() in Create.tsx: passed-in imageString = '" + imageString + "'" );

  return (
    <div id="create">
      <h2>Create</h2>
      <FixedContainer />
    </div>
  )
}

export default Create
