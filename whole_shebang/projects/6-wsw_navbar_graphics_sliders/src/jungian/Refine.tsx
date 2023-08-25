//
// Refine.tsx: code for the Refine option for the Jungian quiz type
//
import '../App.css'

import { MouseEvent, useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

let opacityValue = defaultSliderValue;
let storedImageString = "";

interface JungianRefineProps extends JungianLib.JungianSliderValues {
  onImageClick: (evt: MouseEvent<HTMLElement>) => void;
}

// draw: draw the grid of blue, green, red, and yellow squares defined in storedImageString
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, storedImageString, opacityValue );
};

// logSquareCoords: use (pixelX, pixelY) to calculate (squareX, squareY) and log the values to the console
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
    console.log( "You clicked on the bottom border, not on a square" );
  } else if ( squareY < 0 ) {
    console.log( "You clicked on the top border, not on a square" );
  } else if ( squareX >= JungianLib.gridSize ) {
    console.log( "You clicked on the right-side border, not on a square" );
  } else if ( squareY >= JungianLib.gridSize ) {
    console.log( "You clicked on the lower border, not on a square" );
  } else {
    console.log( "Pixel coords correspond to squareCoords (" + squareX.toString() + ", " + squareY.toString() + ")" );
  }
}

// FixedSizeImageCards: function component to display a jungian image
function FixedSizeImageCards( props: JungianRefineProps ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageCards() in Refine.tsx" );
  }

  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;
  opacityValue = props.opacityValue;

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
            onClick={props.onImageClick}
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

  const [currentSliderValues, setCurrentSliderValues] = useState([defaultSliderValue]);
  const [currentImageString, setCurrentImageString] = useState(JungianLib.defaultImageString);
  const [currentClickMessage, setCurrentClickMessage] = useState("Click on a square to change its color.");

  // let clickToRefineMessage = "Click on a square to change its color.";

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleImageClick in FixedContainer in Refine.tsx: top of function" );
    }
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on the FixedSizeImage at pixel coords (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
    const [squareX, squareY] = getSquareCoords( pixelX, pixelY );
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleImageClick: You clicked on the square at (" + squareX.toString() + ", " + squareY.toString() + ")" );
      logSquareCoords( pixelX, pixelY );
      console.log( "handleImageClick in FixedContainer in Refine.tsx: exiting function" );
    }
  }
  function getSquareCoords( pixelX: number, pixelY: number ) {
    let squareX = -1;
    let squareY = -1;
    squareX = Math.floor( ( pixelX - JungianLib.gridTopX ) / JungianLib.squareSize );
    squareY = Math.floor( ( pixelY - JungianLib.gridTopY ) / JungianLib.squareSize );
    if ( squareX < 0 ) {
      setCurrentClickMessage( "You clicked on the left-side border, not on a square" );
    } else if ( squareX >= JungianLib.gridSize ) {
      setCurrentClickMessage( "You clicked on the right-side border, not on a square" );
    } else if ( squareY < 0 ) {
      setCurrentClickMessage( "You clicked on the top border, not on a square" );
    } else if ( squareY >= JungianLib.gridSize ) {
      setCurrentClickMessage( "You clicked on the bottom border, not on a square" );
    } else {
      setCurrentClickMessage( "You clicked on the square at (" + squareX.toString() + ", " + squareY.toString() + ")" );
      console.log( "Pixel coords correspond to squareCoords (" + squareX.toString() + ", " + squareY.toString() + ")" );
    }
    return( [squareX, squareY] );
  }

  // First useEffect: (presumably) runs once when component is mounted...
  //   Fetches values from local storage...   
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of first useEffect in FixedContainer() in Refine.tsx" );
    }
    setCurrentSliderValues( JungianLSLib.getSliderValues() );
    storedImageString = JungianLSLib.getImageString();
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting first useEffect in FixedContainer() in Refine.tsx" );
    }
  }, [] );

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

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Refine.tsx" );
  }

  return (
    <div className="container">
      <h5>{currentClickMessage}</h5>
      <div className="row mt-4">
        <FixedSizeImageCards
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
