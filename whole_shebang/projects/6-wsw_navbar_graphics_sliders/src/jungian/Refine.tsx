//
// Refine.tsx: code for the Refine option for the Jungian quiz type
//
import '../App.css'
// import { ChangeEvent, useState, useEffect } from 'react';
import { useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
// import SliderCard from '../lib/SliderCard.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

// These are the slider values that come from localStorage
const storedSliderValues: JungianLib.JungianSliderValues = {
  opacityValue: defaultSliderValue,
  blueVsYellowValue: defaultSliderValue,
  greenVsRedValue: defaultSliderValue,
  bAndYVsGandRValue: defaultSliderValue,
};

let storedImageString = "";

// draw: draw the grid of blue, green, red, and yellow squares defined in storedImageString
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, storedImageString, storedSliderValues.opacityValue );
};

// FixedSizeImageCards: function component to display a jungian image
function FixedSizeImageCards( props: JungianLib.JungianSliderValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageCards() in Refine.tsx" );
  }

  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleImageClick in FixedContainer in Refine.tsx: top of function" );
    }
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on the FixedSizeImage at pixel coords (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
    logSquareCoords( pixelX, pixelY );
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleImageClick in FixedContainer in Refine.tsx: exiting function" );
    }
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
    console.log( "return()ing from FixedSizeImageCards() in Refine.tsx" );
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
    console.log( "Top of FixedContainer() in Refine.tsx" );
  }

  const [currentImageString, setCurrentImageString] = useState(JungianLib.defaultImageString);

  // First useEffect: (presumably) runs once when component is mounted...
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of first useEffect in FixedContainer() in Refine.tsx" );
    }
    const jungianLSLibSliderValues = JungianLSLib.getSliderValues();
    if ( jungianLSLibSliderValues.length > 3 ) {
      console.log( "First useEffect in FixedContainer() in Refine.tsx: found the jungianLSLibSliderValues" );
      console.log( "First useEffect: jungianLSLibSliderValues.toString() = " + jungianLSLibSliderValues.toString() );
      console.log( "First useEffect: saving jungianLSLibSliderValues as storedSliderValues" );
      storedSliderValues.opacityValue = jungianLSLibSliderValues[0];
      storedSliderValues.blueVsYellowValue = jungianLSLibSliderValues[1];
      storedSliderValues.greenVsRedValue = jungianLSLibSliderValues[2];
      storedSliderValues.bAndYVsGandRValue = jungianLSLibSliderValues[3];
    } else {
      console.log( "First useEffect in FixedContainer() in Refine.tsx: jungianLSLibSliderValues NOT FOUND in localStorage" );
    }
    storedImageString = JungianLSLib.getImageString();
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting first useEffect in FixedContainer() in Refine.tsx" );
    }
    // NOTE! DO NOT DELETE THE EMPTY DEPENDENCY ARRAY!!  DOING SO CAUSES AN INFINITE LOOP!!!
  }, [] ); // empty dependency array -> this runs just once when the component is mounted

  // Second useEffect: runs when component is mounted AND when the user changes the imageString
  //   Stores the new image string in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of second useEffect in FixedContainer() in Refine.tsx" );
    }
    if ( JungianLSLib.setImageString(currentImageString) ) {
      console.log( "Second useEffect in FixedContainer in Refine.tsx: saved currentImageString as imageString ok" );
    } else {
      console.log( "Second useEffect in FixedContainer in Refine.tsx: UNABLE TO SAVE currentImageString as imageString!" );
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting second useEffect in FixedContainer() in Refine.tsx" );
    }
  }, [currentImageString] );

  const clickToRefineMessage = "Click on a square to change its color.";

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Refine.tsx" );
  }

  return (
    <div className="container">
      <h5>{clickToRefineMessage}</h5>
      <div className="row mt-4">
        <FixedSizeImageCards
          opacityValue={storedSliderValues.opacityValue}
          blueVsYellowValue={storedSliderValues.blueVsYellowValue}
          greenVsRedValue={storedSliderValues.greenVsRedValue}
          bAndYVsGandRValue={storedSliderValues.bAndYVsGandRValue}
        />
      </div>
    </div>
  )
}


function Refine() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of Refine() in Refine.tsx: return()ing from Refine()" );
  }

  return (
    <div id="refine">
      <h2>Refine</h2>
      <FixedContainer />
    </div>
  )
}

export default Refine
