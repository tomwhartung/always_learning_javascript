//
// Create.tsx: code for the Create option for the Jungian quiz type
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import Canvas from '../lib/CanvasLib.tsx';
import { JungianScoreSliderCard } from '../lib/JungianScoreSliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok
JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

// These are the slider values we use when drawing a Fresh Image
const storedScoreValues: JungianLib.JungianScoreValues = {
  opacityValue: JungianLib.initialScoreValue,
  blueVsYellowValue: JungianLib.initialScoreValue,
  greenVsRedValue: JungianLib.initialScoreValue,
  bAndYVsGandRValue: JungianLib.initialScoreValue,
};

let storedImageString = JungianLib.defaultImageString;
let drawFreshImage = false;

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of draw() in Create.tsx" );
  }

  if ( drawFreshImage ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): calling JungianLib.drawNewImageString to draw a Fresh Image" );
    }
    const newImageString = JungianLib.drawNewImageString( context, storedScoreValues );
    storedImageString = newImageString;
    JungianLSLib.setImageString( newImageString );
    console.log( "draw(): set drawFreshImage storedImageString.length = " + storedImageString.length );
    drawFreshImage = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): set drawFreshImage = false & storedImageString = newImageString" );
    }
  } else if ( storedImageString.length === 0 ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): drawFreshImage is false and storedImageString is empty..." );
    }
  } else {
    JungianLib.drawStoredImageString( context, storedImageString, storedScoreValues.opacityValue );
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): drew the storedImageString" );
    }
  }
  if ( JungianLib.logLogicFlow ) {
    console.log( "Exiting draw() in Create.tsx" );
  }
};

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: JungianLib.JungianScoreValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Create.tsx" );
  }

  const width = JungianLib.getCanvasWidth();
  const height = JungianLib.getCanvasHeight();

  if ( JungianLib.logLogicFlow ) {
    console.log( "return()ing from FixedSizeImageAndCards() in Create.tsx" );
  }

  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-12 align-items-center jungian-canvas">
          <Canvas
            draw={draw}
            width={width}
            height={height}
          />
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[0]}: {props.opacityValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[3]}: {props.bAndYVsGandRValue}
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

  const [currentScoreValues, setCurrentScoreValues] = useState( JungianLib.invalidScoreArray );
  const [currentGridSize, setCurrentGridSize] = useState( JungianLib.invalidGridSize );

  // handleScoreValueChange: code to run when the user moves a score slider
  function handleScoreValueChange( event: ChangeEvent, col: number ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleScoreValueChange in FixedContainer in Create.tsx" );
    }
    const scoreValue = (event.target as HTMLInputElement).value;
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleScoreValueChange: slider num " + col.toString() + " = " + scoreValue.toString() );
    }
    const nextScoreValues = currentScoreValues.slice();
    nextScoreValues[col] = parseInt( scoreValue );
    setCurrentScoreValues( nextScoreValues );
    // When the value for a slider (other than opacity) changes, we need to draw a new image
    if ( 0 < col ) {
      drawFreshImage = true;
      if ( JungianLib.logLogicFlow ) {
        console.log( "handleScoreValueChange: set drawFreshImage = true" );
      }
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting handleScoreValueChange in FixedContainer in Create.tsx" );
    }
  }

  // handleGridSizeChange: code to run when user moves the grid size slider
  function handleGridSizeChange( event: ChangeEvent<HTMLInputElement> ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleGridSizeChange in FixedContainer in Create.tsx" );
      console.log( "handleGridSizeChange: event.target.value = " + event.target.value );
    }
    const newGridSize = parseInt( event.target.value );
    setCurrentGridSize( newGridSize );
    JungianLib.setGridSize( newGridSize );
    drawFreshImage = true;
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleGridSizeChange: currentGridSize = " + currentGridSize );
      console.log( "Exiting handleGridSizeChange in FixedContainer in Create.tsx" );
    }
  }

  // First useEffect: (presumably) runs once when component is mounted (but I have my doubts...)
  //   Fetches values from local storage, initializing them if they're not set
  //   Sets the currentScoreValues state variable to values from local storage [or default values]
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of first useEffect in FixedContainer in Create.tsx" );
    }
    const lsScoreValues = JungianLSLib.getScoreValues();
    setCurrentScoreValues( lsScoreValues );
    storedScoreValues.opacityValue = lsScoreValues[0];
    storedScoreValues.blueVsYellowValue = lsScoreValues[1];
    storedScoreValues.greenVsRedValue = lsScoreValues[2];
    storedScoreValues.bAndYVsGandRValue = lsScoreValues[3];
    if ( JungianLib.logLogicFlow ) {
      console.log( "First useEffect: storedScoreValues.toString() = " + storedScoreValues.toString() );
      console.log( "First useEffect: set storedScoreValues and the currentScoreValues state variable" );
    }
    const imageString = JungianLSLib.getImageString();
    if ( imageString.length > JungianLib.gridSize ) {
      storedImageString = imageString;
      if ( JungianLib.logLogicFlow ) {
        console.log( "First useEffect: imageString.length = " + imageString.length );
        console.log( "First useEffect: set the storedImageString ok" );
      }
    } else {
      drawFreshImage = true;
      if ( JungianLib.logLogicFlow ) {
        console.log( "First useEffect: imageString.length = " + imageString.length );
        console.log( "First useEffect: DID NOT SET THE storedImageString BECAUSE IT'S TOO SHORT" );
        console.log( "First useEffect: set drawFreshImage = true instead" );
      }
    }
    JungianLib.setSquareSize( JungianLSLib.getSquareSize() );
    const gridSize = JungianLSLib.getGridSize();
    JungianLib.setGridSize( gridSize );
    setCurrentGridSize( gridSize );
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting first useEffect in FixedContainer in Create.tsx" );
    }
    // NOTE! DO NOT DELETE THE EMPTY DEPENDENCY ARRAY!!  DOING SO CAUSES AN INFINITE LOOP!!!
  }, [] ); // empty dependency array -> this runs just once when the component is mounted

  // Second useEffect: runs when component is mounted AND when the user moves a slider
  //   Stores the new slider values and image string in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of second useEffect in FixedContainer in Create.tsx" );
      console.log( "Second useEffect: currentScoreValues.toString() = " + currentScoreValues.toString() );
    }
    let success = JungianLSLib.setScoreValues( currentScoreValues );
    if ( success ) {
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in Create.tsx: saved currentScoreValues as scoreValues ok" );
      }
      success = JungianLSLib.setImageString( storedImageString );
      if ( success ) {
        if ( JungianLib.logLogicFlow ) {
          console.log( "Second useEffect in Create.tsx: saved storedImageString as imageString ok" );
        }
      } else {
        drawFreshImage = true;
        if ( JungianLib.logLogicFlow ) {
          console.log( "Second useEffect: DID NOT SAVE storedImageString in local storage" );
          console.log( "Second useEffect: set drawFreshImage = true" );
        }
      }
    } else {
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect: DID NOT SAVE currentScoreValues IN LOCAL STORAGE" );
      }
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting second useEffect in FixedContainer in Create.tsx" );
    }
  }, [currentScoreValues] );

  // Third useEffect: runs when component is mounted AND when the user changes the gridSize
  //   Stores the new, refined gridSize in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of third useEffect in FixedContainer in Create.tsx" );
    }
    const success = JungianLSLib.setGridSize( currentGridSize );
    if ( JungianLib.logLogicFlow ) {
      if ( success ) {
        console.log( "Third useEffect: saved currentGridSize as gridSize ok" );
      } else {
        console.log( "Third useEffect: currentGridSize = " + currentGridSize );
        console.log( "Third useEffect: DID NOT SAVE currentGridSize as gridSize" );
      }
      console.log( "Exiting third useEffect in FixedContainer in Create.tsx" );
    }
  }, [currentGridSize] );

  storedScoreValues.opacityValue = currentScoreValues[0];
  storedScoreValues.blueVsYellowValue = currentScoreValues[1];
  storedScoreValues.greenVsRedValue = currentScoreValues[2];
  storedScoreValues.bAndYVsGandRValue = currentScoreValues[3];

  // Construct markup for the JungianScoreSliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.jungianScoreLabels.length; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <JungianScoreSliderCard
         sliderNo={col}
         sliderVal={currentScoreValues[col] ?? JungianLib.initialScoreValue}
         onSliderChange={ (event) => handleScoreValueChange(event,col) }
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
          opacityValue={currentScoreValues[0] ?? JungianLib.initialScoreValue}
          blueVsYellowValue={currentScoreValues[1] ?? JungianLib.initialScoreValue}
          greenVsRedValue={currentScoreValues[2] ?? JungianLib.initialScoreValue}
          bAndYVsGandRValue={currentScoreValues[3] ?? JungianLib.initialScoreValue} />
      </div>
      <div className="row mt-4">
        <div className="col-12 card align-items-center">
          <h5>Grid Size</h5>
          <MDBRange
            defaultValue={JungianLib.gridSize}
            min={JungianLib.minGridSize}
            max={JungianLib.maxGridSize}
            id='square-size'
            onChange={handleGridSizeChange}
          />
        </div>
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
