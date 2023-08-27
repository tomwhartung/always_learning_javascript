//
// Refine.tsx: code for the Refine option for the Jungian quiz type
//
import '../App.css'

import { MouseEvent, useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
JungianLib.setLogLogicFlow( true );   // un-comment when trying to track down issues
// JungianLib.setLogLogicFlow( false );   // un-comment when everything's ok

let opacityValue = defaultSliderValue;
let storedImageString = "";

interface JungianRefineProps extends JungianLib.JungianSliderValues {
  onImageClick: (evt: MouseEvent<HTMLElement>) => void;
}

// draw: draw the grid of blue, green, red, and yellow squares defined in storedImageString
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, storedImageString, opacityValue );
};

// getSquareCoords: use (pixelX, pixelY) to calculate (squareX, squareY)
//   To support more efficient code, this function includes the corners with the borders
//   If at some point we want to identify the corners, here is how to do it:
//     (squareX < 0 && squareY < 0): upper-left corner
//     (squareX < 0 && squareY >= JungianLib.gridSize): lower-left corner
//     (squareX >= JungianLib.gridSize && squareY < 0): upper-right corner
//     (squareX >= JungianLib.gridSize && squareY >= JungianLib.gridSize): lower-right corner
function getSquareCoords( pixelX: number, pixelY: number ) {
  let squareX = -1;
  let squareY = -1;
  squareX = Math.floor( ( pixelX - JungianLib.gridTopX ) / JungianLib.squareSize );
  squareY = Math.floor( ( pixelY - JungianLib.gridTopY ) / JungianLib.squareSize );
  if ( JungianLib.logLogicFlow ) {
    console.log( "getSquareCoords: pixel coords (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
    console.log( "correspond to square coords (" + squareX.toString() + ", " + squareY.toString() + ")" );
    if ( squareX < 0 ) {
      console.log( "You clicked on the left-side border, not on a square" );
    } else if ( squareX >= JungianLib.gridSize ) {
      console.log( "You clicked on the right-side border, not on a square" );
    } else if ( squareY < 0 ) {
      console.log( "You clicked on the top border, not on a square" );
    } else if ( squareY >= JungianLib.gridSize ) {
      console.log( "You clicked on the bottom border, not on a square" );
    } else {
      console.log( "You clicked on the square at (" + squareX.toString() + ", " + squareY.toString() + ")" );
    }
  }
  return( [squareX, squareY] );
}
// changeSquareAt: change the color of the square at location (squareX, squareY)
function changeSquareAt( squareX: number, squareY: number ) {
  const charArrIndex = squareX + (squareY * JungianLib.gridSize);
  if ( JungianLib.logLogicFlow ) {
    console.log( "changeSquareAt: charArrIndex = " + charArrIndex );
  }
  const newImageCharArr = storedImageString.split( "" );
  newImageCharArr[charArrIndex] = 'B';
  newImageCharArr.splice( charArrIndex, 1, 'B' );
  const newImageString = newImageCharArr.join( '' );
  return newImageString;
}

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: JungianRefineProps ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Refine.tsx" );
  }

  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;
  opacityValue = props.opacityValue;

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedSizeImageAndCards() in Refine.tsx" );
  }

  // NOTE: DO NOT PUT THIS Canvas IN A CARD!  Doing so makes it resizable and
  //   breaks the code that calculates which square the user clicked on!!
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-12 align-items-center jungian-canvas">
          <Canvas
            draw={draw}
            onClick={props.onImageClick}
            width={width}
            height={height}
          />
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

// FixedContainer: function component containing an MDB container
function FixedContainer() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedContainer() in Refine.tsx" );
  }

  const defautClickMessage = "Click on a square to change its color to Blue.";
  const [currentSliderValues, setCurrentSliderValues] = useState( [defaultSliderValue] );
  const [currentImageString, setCurrentImageString] = useState( JungianLib.defaultImageString );
  const [currentStatusMessage, setCurrentStatusMessage] = useState( defautClickMessage );

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleImageClick() in FixedContainer in Refine.tsx" );
    }
    // getBoundingClientRect: get coords of top-left of image (the target element)
    // rect.left & rect.top: coords of top-left of image (the target element)
    // event.clientX & event.clientY: coords of click relative to top-left of screen
    // pixelX & pixelY: coords of click relative to top-left of image (screen coord minus rect coord)
    // getSquareCoords() and squareX & squareY: see comments in getSquareCoords() function header
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    if ( JungianLib.logLogicFlow ) {
      const pixelCoords = "(" + pixelX.toString() + ", " + pixelY.toString() + ")";
      console.log( "handleImageClick: Click on the FixedSizeImage at " + pixelCoords);
    }
    const [squareX, squareY] = getSquareCoords( pixelX, pixelY );  // see comments in function header
    const squareCoords = "(" + squareX.toString() + ", " + squareY.toString() + ")";
    if ( 0 <= squareX && 0 <= squareY ) {
      setCurrentStatusMessage( "Changed the color of the square at " + squareCoords + " to Blue" );
      const newImageString = changeSquareAt( squareX, squareY );
      setCurrentImageString( newImageString );
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleImageClick: You clicked on the square at " + squareCoords );
      console.log( "handleImageClick in FixedContainer in Refine.tsx: exiting function" );
    }
  }

  // First useEffect: (presumably) runs once when component is mounted, or so they tell me...
  // - Fetches sliderValues and imageString from local storage and sets them in state variables
  // - If imageString is empty, set the current status message accordingly
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of First useEffect in FixedContainer() in Refine.tsx" );
    }
    setCurrentSliderValues( JungianLSLib.getSliderValues() );
    setCurrentImageString( JungianLSLib.getImageString() );
    storedImageString = JungianLSLib.getImageString();
    if (storedImageString.length === 0 ) {
      setCurrentStatusMessage( "You must use the Create option to create an image before you can Refine it." );
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting First useEffect in FixedContainer() in Refine.tsx" );
    }
  }, [] );

  // Second useEffect: runs when component is mounted AND when the user changes the imageString
  //   Stores the new, refined image string in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of second useEffect in FixedContainer() in Refine.tsx" );
    }
    const savedImageStringOk = JungianLSLib.setImageString( currentImageString );
    if ( currentImageString.length > JungianLib.gridSize ) {
      storedImageString = currentImageString;
    }
    if ( JungianLib.logLogicFlow ) {
      if ( savedImageStringOk) {
        console.log( "Second useEffect in Refine.tsx: saved currentImageString as imageString ok" );
      } else {
        console.log( "Second useEffect: currentImageString.length = " + currentImageString.length );
        console.log( "Second useEffect: DID NOT SAVE currentImageString as imageString" );
      }
      console.log( "Exiting second useEffect in FixedContainer() in Refine.tsx" );
    }
  }, [currentImageString] );

  storedImageString = currentImageString;    // updates the displayed image with the latest changes

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Refine.tsx" );
  }

  return (
    <div className="container">
      <h5>{currentStatusMessage}</h5>
      <div className="row mt-4">
        <FixedSizeImageAndCards
          opacityValue={currentSliderValues[0]}
          blueVsYellowValue={currentSliderValues[1]}
          greenVsRedValue={currentSliderValues[2]}
          bAndYVsGandRValue={currentSliderValues[3]}
          onImageClick={handleImageClick}
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
