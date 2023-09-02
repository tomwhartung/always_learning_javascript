//
// Refine.tsx: code for the Refine option for the Jungian quiz type
//
import '../App.css'

import { ChangeEvent, MouseEvent, useState, useEffect } from 'react';

import { MDBRadio, MDBRange } from 'mdb-react-ui-kit';

import Canvas from '../lib/CanvasLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as LocalStorageLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
JungianLib.setLogLogicFlow( true );   // un-comment when trying to track down issues
// JungianLib.setLogLogicFlow( false );   // un-comment when everything's ok

let opacityValue = JungianLib.initialScoreValue;
let imageStringToDraw = "";

interface JungianRefineProps extends JungianLib.JungianScoreValues {
  onRadioButtonClick: (event: ChangeEvent<HTMLInputElement>) => void;
  onImageClick: (event: MouseEvent<HTMLElement>) => void;
  onSquareSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// draw: draw the grid of blue, green, red, and yellow squares defined in imageStringToDraw
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, imageStringToDraw, opacityValue );
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
function changeSquareAt( squareX: number, squareY: number, colorIndex: number ) {
  const charArrIndex = squareX + (squareY * JungianLib.gridSize);
  const colorLetterPicked = JungianLib.colorLetters[colorIndex];

  if ( JungianLib.logLogicFlow ) {
    console.log( "changeSquareAt: charArrIndex = " + charArrIndex );
    console.log( "changeSquareAt: colorIndex = " + colorIndex );
    console.log( "changeSquareAt: colorLetterPicked = " + colorLetterPicked );
  }

  const newImageCharArr = imageStringToDraw.split( "" );
  newImageCharArr.splice( charArrIndex, 1, colorLetterPicked );
  const newImageString = newImageCharArr.join( '' );
  return newImageString;
}

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: JungianRefineProps ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Refine.tsx" );
  }

  const width = JungianLib.getCanvasWidth();
  const height = JungianLib.getCanvasHeight();
  opacityValue = props.opacityValue;

  // Construct the markup for the Color Picker
  const colorPickerCols = [];
  for ( let colorNum = 0; colorNum < JungianLib.colorLetters.length; colorNum++ ) {
    let defaultChecked = false;
    if ( colorNum === 0 ) {
      defaultChecked = true;
    } else {
      defaultChecked = false;
    }
    colorPickerCols.push(
      <div key={colorNum} className="col-sm-3 align-items-center">
        <MDBRadio
          name="colorPicker"
          id={JungianLib.colorNames[colorNum]}
          label={JungianLib.colorNames[colorNum]}
          value={colorNum}
          onChange={props.onRadioButtonClick}
          defaultChecked={defaultChecked}
        />
      </div>
    );
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedSizeImageAndCards() in Refine.tsx" );
  }

  // NOTE: DO NOT PUT THIS Canvas IN A CARD!  Doing so makes it resizable and
  //   breaks the code that calculates which square the user clicked on!!
  //
  return (
    <>
      <div className="row d-flex mt-1 align-items-center">
        <div className="col-sm-8 card align-items-center">
          <div className="row d-flex mt-1 align-items-center">
            <h5>Color Picker</h5>
          </div>
          <div className="row d-flex mt-1">
            {colorPickerCols}
          </div>
        </div>
        <div className="col-sm-4 card align-items-center">
          <h5>Square Size</h5>
          <MDBRange
            defaultValue={JungianLib.squareSize}
            min={JungianLib.minSquareSize}
            max={JungianLib.maxSquareSize}
            id='square-size'
            onChange={props.onSquareSizeChange}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12 align-items-center jungian-canvas">
          <Canvas
            draw={draw}
            onClick={props.onImageClick}
            width={width}
            height={height}
          />
        </div>
      </div>
      <div className="row d-flex mt-1">
        <div className="col-sm-3 card align-items-center">
          {JungianLib.jungianScorePropNames[0]}: {props.opacityValue}
        </div>
        <div className="col-sm-3 card align-items-center">
          {JungianLib.jungianScorePropNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-sm-3 card align-items-center">
          {JungianLib.jungianScorePropNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-sm-3 card align-items-center">
          {JungianLib.jungianScorePropNames[3]}: {props.bAndYVsGandRValue}
        </div>
      </div>
      <div className="row d-flex mt-1">
        <div className="col-sm-12 card align-items-center">
          Grid Size: {JungianLib.gridSize} Squares per Side
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

  const defaultStatusMessage = "Click on a square to change its color to Blue.";
  const defaultColorIndex = 0;

  const [currentScoreValues, setCurrentScoreValues] = useState( [JungianLib.invalidScoreValue] );
  const [currentImageString, setCurrentImageString] = useState( JungianLib.defaultImageString );
  const [currentStatusMessage, setCurrentStatusMessage] = useState( defaultStatusMessage );
  const [currentColorIndex, setCurrentColorIndex] = useState( defaultColorIndex );
  const [currentSquareSize, setCurrentSquareSize] = useState( JungianLib.invalidSquareSize );

  // handleSquareSizeChange: code to run when the user moves the square size slider
  function handleSquareSizeChange( event: ChangeEvent<HTMLInputElement> ) {
    // if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleSquareSizeChange in FixedContainer() in Refine.tsx" );
      console.log( "handleSquareSizeChange: event.target.value = " + event.target.value );
    // }
    const newSquareSize = parseInt( event.target.value );
    setCurrentSquareSize( newSquareSize );
    JungianLib.setSquareSizeToDraw( newSquareSize );
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleSquareSizeChange: currentSquareSize = " + currentSquareSize );
      console.log( "Exiting handleSquareSizeChange in FixedContainer() in Refine.tsx" );
    }
  }

  // handleColorPickerChange: Change the new color used when user clicks on a square
  function handleColorPickerChange( event: ChangeEvent<HTMLInputElement> ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleColorPickerChange in FixedContainer in Refine.tsx" );
      console.log( "handleColorPickerChange: event.currentTarget.value = " + event.currentTarget.value );
    }
    const colorIndex = parseInt( event.currentTarget.value );
    const colorPicked = JungianLib.colorNames[ colorIndex ];
    setCurrentColorIndex( colorIndex );
    setCurrentStatusMessage( "Click on a square to change its color to " + colorPicked );
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleColorPickerChange currentStatusMessage = " + currentStatusMessage );
      console.log( "Exiting handleColorPickerChange in FixedContainer in Refine.tsx" );
    }
  }

  // handleImageClick: Change the color of the square the user clicks on
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
    if ( 0 <= squareX && squareX < JungianLib.gridSize &&
         0 <= squareY && squareY < JungianLib.gridSize    ) {
      const newImageString = changeSquareAt( squareX, squareY, currentColorIndex );
      setCurrentImageString( newImageString );
      const colorPicked = JungianLib.colorNames[ currentColorIndex ];
      setCurrentStatusMessage( "Changed the color of the square at " + squareCoords + " to " + colorPicked );
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleImageClick: You clicked on the square at " + squareCoords );
      console.log( "handleImageClick in FixedContainer in Refine.tsx: exiting function" );
    }
  }

  // First useEffect: (presumably) runs once when component is mounted, or so they tell me...
  // - Fetches scoreValues and imageString from local storage and sets them in state variables
  // - If imageString is empty, set the current status message accordingly
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of First useEffect in FixedContainer() in Refine.tsx" );
    }
    setCurrentScoreValues( LocalStorageLib.getStoredScoreValues() );
    setCurrentImageString( LocalStorageLib.getStoredImageString() );
    imageStringToDraw = LocalStorageLib.getStoredImageString();
    if (imageStringToDraw.length === 0 ) {
      setCurrentStatusMessage( "Please use the Create option to Create an image before trying to Refine it." );
    }
    setCurrentSquareSize( LocalStorageLib.getStoredSquareSize() );
    JungianLib.setSquareSizeToDraw( LocalStorageLib.getStoredSquareSize() );
    JungianLib.setGridSizeToDraw( LocalStorageLib.getStoredGridSize() );
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
    const success = LocalStorageLib.storeImageString( currentImageString );
    if ( JungianLib.logLogicFlow ) {
      if ( success ) {
        console.log( "Second useEffect: saved currentImageString as imageString ok" );
      } else {
        console.log( "Second useEffect: currentImageString.length = " + currentImageString.length );
        console.log( "Second useEffect: DID NOT SAVE currentImageString as imageString" );
      }
      console.log( "Exiting second useEffect in FixedContainer() in Refine.tsx" );
    }
  }, [currentImageString] );

  // Third useEffect: runs when component is mounted AND when the user changes the squareSize
  //   Stores the new, refined squareSize in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of third useEffect in FixedContainer() in Refine.tsx" );
    }
    const success = LocalStorageLib.storeSquareSize( currentSquareSize );
    if ( JungianLib.logLogicFlow ) {
      if ( success ) {
        console.log( "Third useEffect: saved currentSquareSize as squareSize ok" );
      } else {
        console.log( "Third useEffect: currentSquareSize = " + currentSquareSize );
        console.log( "Third useEffect: DID NOT SAVE currentSquareSize as squareSize" );
      }
      console.log( "Exiting third useEffect in FixedContainer() in Refine.tsx" );
    }
  }, [currentSquareSize] );

  imageStringToDraw = currentImageString;    // updates the displayed image with the latest changes
  // JungianLib.squareSize = currentSquareSize;

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Refine.tsx" );
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-sm-12">
          <h5>{currentStatusMessage}</h5>
        </div>
      </div>
      <div className="row">
        <FixedSizeImageAndCards
          opacityValue={currentScoreValues[0]}
          blueVsYellowValue={currentScoreValues[1]}
          greenVsRedValue={currentScoreValues[2]}
          bAndYVsGandRValue={currentScoreValues[3]}
          onSquareSizeChange={handleSquareSizeChange}
          onRadioButtonClick={handleColorPickerChange}
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
