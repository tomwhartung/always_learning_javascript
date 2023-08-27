//
// Create.tsx: code for the Create option for the Jungian quiz type
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import SliderCard from '../lib/SliderCard.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok
JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

// These are the slider values we use when drawing a Fresh Image
const storedSliderValues: JungianLib.JungianSliderValues = {
  opacityValue: defaultSliderValue,
  blueVsYellowValue: defaultSliderValue,
  greenVsRedValue: defaultSliderValue,
  bAndYVsGandRValue: defaultSliderValue,
};

let storedImageString = "";
let drawFreshImage = false;

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

  // Paint the inner square, where the actual image will be, white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(JungianLib.gridTopY, JungianLib.gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = JungianLib.gridTopX;
  let squareTopY = JungianLib.gridTopY;
  let colorLetter = "B";

  const opacityPercent = JungianLib.valueToPct( storedSliderValues.opacityValue );

  if ( drawFreshImage ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: drawFreshImage is true so we are drawing a Fresh Image" );
    }
    imageCharArray = [];
    // console.log( "draw() in Create.tsx: imageCharArray.length = " + imageCharArray.length );
    for ( let row=0; row < JungianLib.gridSize; row++ ) {
      squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
      for ( let col=0; col < JungianLib.gridSize; col++ ){
        // console.log( "draw() in Create.tsx: calling JungianLib.getRandomPrimaryColor = " + colorLetter );
        colorLetter = JungianLib.getRandomPrimaryColor( storedSliderValues );
        // console.log( "draw() in Create.tsx: colorLetter = " + colorLetter );
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
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: finished drawing a Fresh Image" );
      console.log( "draw(): Fresh Image's imageCharArray.length = " + imageCharArray.length );
      console.log( "draw(): setting drawFreshImage = false and saving new image as storedImageString" );
    }
    drawFreshImage = false;
    storedImageString = imageCharArray.join('');
  } else if ( storedImageString.length > 0 ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: drawing storedImageString" );
    }
    JungianLib.drawStoredImageString( context, storedImageString, storedSliderValues.opacityValue );
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw() in Create.tsx: drawFreshImage is false and storedImageString is empty!" );
    }
  }
  if ( JungianLib.logLogicFlow ) {
    console.log( "Exiting draw() in Create.tsx" );
  }
};

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: JungianLib.JungianSliderValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Create.tsx" );
  }

  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    if ( JungianLib.logLogicFlow ) {
      console.log( "Click on the FixedSizeImage at pixel coords (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
      logSquareCoords( pixelX, pixelY );
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
    console.log( "return()ing from FixedSizeImageAndCards() in Create.tsx" );
  }

  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-12 align-items-center jungian-canvas">
          <Canvas
            draw={draw}
            onClick={handleImageClick}
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
    console.log( "Top of FixedContainer() in Create.tsx" );
  }

  const [currentSliderValues, setCurrentSliderValues] = useState([defaultSliderValue]);
  // const [currentImageString, setCurrentImageString] = useState(JungianLib.defaultImageString);

  function handleSliderValueChange( evt:ChangeEvent, col:number ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleSliderValueChange in FixedContainer" );
    }
    const val = (evt.target as HTMLInputElement).value;
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleSliderValueChange: slider num " + col.toString() + " = " + val.toString() );
    }
    const nextSliderValues = currentSliderValues.slice();
    nextSliderValues[col] = Number(val);
    setCurrentSliderValues(nextSliderValues);
    // When the value for a slider (other than opacity) changes, we need to draw a new image
    if ( 0 < col ) {
      drawFreshImage = true;
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleSliderValueChange: set drawFreshImage = true" );
      console.log( "Exiting handleSliderValueChange in FixedContainer" );
    }
  }

  // First useEffect: (presumably) runs once when component is mounted (but I have my doubts...)
  //   Fetches values from local storage, initializing them if they're not set
  //   Sets currentSliderValues to values from local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of first useEffect in FixedContainer() in Create.tsx" );
    }
    const jungianLSLibSliderValues = JungianLSLib.getSliderValues();
    if ( jungianLSLibSliderValues.length > 3 ) {
      if ( JungianLib.logLogicFlow ) {
        console.log( "First useEffect in FixedContainer() in Create.tsx: found the jungianLSLibSliderValues" );
        console.log( "First useEffect: jungianLSLibSliderValues.toString() = " + jungianLSLibSliderValues.toString() );
      }
      setCurrentSliderValues( jungianLSLibSliderValues );
    } else {
      if ( JungianLib.logLogicFlow ) {
        console.log( "First useEffect in FixedContainer() in Create.tsx: jungianLSLibSliderValues NOT FOUND in localStorage" );
        console.log( "First useEffect: saving default values for sliderValues in localStorage" );
      }
      const defaultSliderValues = [ defaultSliderValue, defaultSliderValue, defaultSliderValue, defaultSliderValue ];
      // localStorage.setItem( 'sliderValues', JSON.stringify(defaultSliderValues) );
      JungianLSLib.setSliderValues( defaultSliderValues );
      setCurrentSliderValues( defaultSliderValues );
    }
    storedImageString = JungianLSLib.getImageString();
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting first useEffect in FixedContainer() in Create.tsx" );
    }
    // NOTE! DO NOT DELETE THE EMPTY DEPENDENCY ARRAY!!  DOING SO CAUSES AN INFINITE LOOP!!!
  }, [] ); // empty dependency array -> this runs just once when the component is mounted

  // Second useEffect: runs when component is mounted AND when the user moves a slider
  //   Stores the new slider values and image string in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of second useEffect in FixedContainer() in Create.tsx" );
      console.log( "Second useEffect in FixedContainer in Create.tsx: currentSliderValues.length = " + currentSliderValues.length );
    }
    if ( currentSliderValues.length > 3 ) {
      JungianLSLib.setSliderValues( currentSliderValues );
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in FixedContainer in Create.tsx: saved currentSliderValues as sliderValues." );
      }
    } else {
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in FixedContainer in Create.tsx: did NOT save currentSliderValues as sliderValues!" );
      }
    }
    if ( JungianLSLib.setImageString(storedImageString) ) {
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in FixedContainer in Create.tsx: saved storedImageString as imageString ok" );
      }
    } else {
      drawFreshImage = true;
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in FixedContainer in Create.tsx: DID NOT SAVE storedImageString as imageString!" );
      }
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting second useEffect in FixedContainer() in Create.tsx" );
    }
  }, [currentSliderValues] );

  storedSliderValues.opacityValue = currentSliderValues[0];
  storedSliderValues.blueVsYellowValue = currentSliderValues[1];
  storedSliderValues.greenVsRedValue = currentSliderValues[2];
  storedSliderValues.bAndYVsGandRValue = currentSliderValues[3];

  // Construct markup for the SliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <SliderCard
         sliderNo={col}
         sliderVal={currentSliderValues[col] ?? defaultSliderValue}
         onSliderChange={ (evt) => handleSliderValueChange(evt,col) }
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
        <FixedSizeImageAndCards
          opacityValue={currentSliderValues[0] ?? defaultSliderValue}
          blueVsYellowValue={currentSliderValues[1] ?? defaultSliderValue}
          greenVsRedValue={currentSliderValues[2] ?? defaultSliderValue}
          bAndYVsGandRValue={currentSliderValues[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
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
