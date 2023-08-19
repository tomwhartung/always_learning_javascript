//
// Create.tsx: code for the Create option
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import SliderCard from '../lib/SliderCard.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// These are the slider values we use when drawing the image
const storedSliderValues: JungianLib.JungianImageProps = {
  opacityValue: defaultSliderValue,
  blueVsYellowValue: defaultSliderValue,
  greenVsRedValue: defaultSliderValue,
  bAndYVsGandRValue: defaultSliderValue,
};
let storedImageString = "";
let drawFreshImage = false;

const defaultImageString = "";
let imageCharArray: string[] = [];

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of draw() in Create.tsx" );
  }
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

  if ( drawFreshImage ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: drawing a Fresh Image" );
    }
    imageCharArray = [];
    console.log( "draw() in Create.tsx: imageCharArray.length = " + imageCharArray.length );
    for ( let row=0; row < JungianLib.gridSize; row++ ) {
      squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
      for ( let col=0; col < JungianLib.gridSize; col++ ){
      //console.log( "draw() in Create.tsx: calling JungianLib.getRandomPrimaryColor = " + colorLetter );
        colorLetter = JungianLib.getRandomPrimaryColor( storedSliderValues );
      //console.log( "draw() in Create.tsx: colorLetter = " + colorLetter );
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
        imageCharArray.push( colorLetter );
      }
    }
    console.log( "draw() in Create.tsx: finished drawing Fresh Image, imageCharArray: " + imageCharArray )
  } else if ( storedImageString.length > 0 ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: drawing storedImageString = " + storedImageString );
    }
    imageCharArray = storedImageString.split( "" );
    let imgStrIdx = 0;
    console.log( "draw() in Create.tsx: drawing the image saved in localStorage..." );
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
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: drawFreshImage is false and storedImageString is empty!" );
    }
  }
  if ( JungianLib.logLogicFlow ) {
    console.log( "Exiting draw() in Create.tsx" );
  }
};

// FixedSizeImageCards: function component to display a jungian image
function FixedSizeImageCards( props: JungianLib.JungianImageProps ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageCards() in Create.tsx" );
  }

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

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedSizeImageCards() in Create.tsx" );
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
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedContainer() in Create.tsx" );
  }

  const [currentSliderValues, setCurrentSliderValues] = useState([defaultSliderValue]);
  // const [currentImageString, setCurrentImageString] = useState(defaultImageString);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  //console.log( "Value of slider number " + col.toString() + " is now " + val.toString() );
    const nextSliderValues = currentSliderValues.slice();
    nextSliderValues[col] = Number(val);
    setCurrentSliderValues(nextSliderValues);
    // imageCharArray = [];                  // When a slider value changes, we need to draw a new image
    // setCurrentImageString(defaultImageString);   // When a slider value changes, we need to draw a new image
    console.log( "handleChangeArrayOfNumbers in FixedContainer: setting drawFreshImage = true because presumably a slider was moved" );
    drawFreshImage = true;                  // When a slider value changes, we need to draw a new image
  }

  useEffect(() => {
    console.log( "Top of first useEffect in FixedContainer() in Create.tsx" );
    const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );
    if ( rawStoredSliderValues ) {
      console.log( "First useEffect in FixedContainer() in Create.tsx: found some rawStoredSliderValues!" );
      const parsedSliderValues = JSON.parse( rawStoredSliderValues );
      console.log( "First useEffect in FixedContainer() in Create.tsx: Calling setCurrentSliderValues..." );
      setCurrentSliderValues( parsedSliderValues );
    } else {
      console.log( "First useEffect in FixedContainer() in Create.tsx: sliderValues NOT FOUND in localStorage, saving default values..." );
      setCurrentSliderValues( [ defaultSliderValue, defaultSliderValue, defaultSliderValue, defaultSliderValue ] );
    }
    const rawStoredImageString = localStorage.getItem( 'imageString' );
    if ( rawStoredImageString && rawStoredImageString.length > 0 ) {
      storedImageString = JSON.parse( rawStoredImageString );
      console.log( "First useEffect in FixedContainer() in Create.tsx: storedImageString = '" + storedImageString + "'" );
      // setCurrentImageString(storedImageString);
    } else {
      console.log( "First useEffect in FixedContainer() in Create.tsx: imageString NOT FOUND in localStorage" );
      console.log( "imageString NOT FOUND so setting drawFreshImage = true" );
      console.log( "imageString NOT FOUND so setting storedImageString and currentImageString = defaultImageString" );
      storedImageString = defaultImageString;
      // setCurrentImageString(storedImageString);
      drawFreshImage = true;
    }
    console.log( "Exiting first useEffect in FixedContainer() in Create.tsx" );
  }, []);

  useEffect(() => {
    console.log( "Top of second useEffect in FixedContainer() in Create.tsx" );
    console.log( "Second useEffect in FixedContainer in Create.tsx: currentSliderValues.length = " + currentSliderValues.length );
    if ( currentSliderValues.length > 3 ) {
      localStorage.setItem( 'sliderValues', JSON.stringify(currentSliderValues) );
      console.log( "Second useEffect in FixedContainer in Create.tsx: saved currentSliderValues as sliderValues." );
    } else {
      console.log( "Second useEffect in FixedContainer in Create.tsx: did NOT save currentSliderValues as sliderValues!" );
    }
    const thisImageString = imageCharArray.join('');
    console.log( "Second useEffect in FixedContainer in Create.tsx: ready to save imageCharArray->thisImageString as imageString..." );
    console.log( "Second useEffect in FixedContainer in Create.tsx: imageCharArray.toString() = " + imageCharArray.toString() );
    console.log( "Second useEffect in FixedContainer in Create.tsx: thisImageString = " + thisImageString );
    localStorage.setItem( 'imageString', JSON.stringify(thisImageString) );
    console.log( "FixedContainer in Create.tsx: saved imageCharArray->thisImageString in local storage as imageString." );
    console.log( "Exiting second useEffect in FixedContainer() in Create.tsx" );
  }, [currentSliderValues]);

  storedSliderValues.opacityValue = currentSliderValues[0];
  storedSliderValues.blueVsYellowValue = currentSliderValues[1];
  storedSliderValues.greenVsRedValue = currentSliderValues[2];
  storedSliderValues.bAndYVsGandRValue = currentSliderValues[3];

  // if ( currentImageString.length !== 0 ) {
  //   storedImageString = currentImageString;
  // } else {
  //   console.log( "FixedContainer in Create.tsx: setting drawFreshImage = true because it seems like the thing to do." );
  //   drawFreshImage = true;
  // }

  // Construct markup for the SliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <SliderCard
         sliderNo={col}
         sliderVal={currentSliderValues[col] ?? defaultSliderValue}
         onSliderChange={ (evt) => handleChangeArrayOfNumbers(evt,col) }
        />
      </div>
    );
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Create.tsx" );
  }

  return (
    <div className="container">
      <h4>FixedContainer:</h4>
      <div className="row mt-4">
        {sliderNumberCols}
      </div>
      <div className="row mt-4">
        <FixedSizeImageCards
          opacityValue={currentSliderValues[0] ?? defaultSliderValue}
          blueVsYellowValue={currentSliderValues[1] ?? defaultSliderValue}
          greenVsRedValue={currentSliderValues[2] ?? defaultSliderValue}
          bAndYVsGandRValue={currentSliderValues[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
// function Create( props: JungianLib.JungianImageProps ) {
function Create() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of Create() in Create.tsx: return()ing from Create()" );
  }

  return (
    <div id="create">
      <h2>Create</h2>
      <FixedContainer />
    </div>
  )
}

export default Create
