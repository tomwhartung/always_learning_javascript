//
// Create.tsx: code for the Create option for the Jungian quiz type
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import Canvas from '../lib/CanvasLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as LocalStorageLib from '../lib/jungian/LocalStorageLib.tsx';
import ScoreSliderCard from '../lib/jungian/ScoreSliderLib.tsx';
import SquareSizeSlider from '../lib/jungian/SquareSizeSliderLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok
JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

// These are the slider values we use when drawing a Fresh Image
const scoreValuesToDraw: JungianLib.JungianScoreValues = {
  opacityValue: JungianLib.initialScoreValue,
  blueVsYellowValue: JungianLib.initialScoreValue,
  greenVsRedValue: JungianLib.initialScoreValue,
  bAndYVsGandRValue: JungianLib.initialScoreValue,
};

let imageStringToDraw = JungianLib.defaultImageString;
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
    const newImageString = JungianLib.drawNewImageString( context, scoreValuesToDraw );
    imageStringToDraw = newImageString;
    LocalStorageLib.storeImageString( newImageString );
    console.log( "draw(): set drawFreshImage imageStringToDraw.length = " + imageStringToDraw.length );
    drawFreshImage = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): set drawFreshImage = false & imageStringToDraw = newImageString" );
    }
  } else if ( imageStringToDraw.length === 0 ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): drawFreshImage is false and imageStringToDraw is empty..." );
    }
  } else {
    JungianLib.drawStoredImageString( context, imageStringToDraw, scoreValuesToDraw.opacityValue );
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): drew the imageStringToDraw" );
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
  const [currentSquareSize, setCurrentSquareSize] = useState( JungianLib.invalidSquareSize );
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
    // if ( JungianLib.logLogicFlow ) {
    //   console.log( "Top of handleGridSizeChange in FixedContainer in Create.tsx" );
    //   // console.log( "handleGridSizeChange: event.target.value = " + event.target.value );
    // }
    const newGridSize = parseInt( event.target.value );
    setCurrentGridSize( newGridSize );
    JungianLib.setGridSize( newGridSize );
    drawFreshImage = true;
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleGridSizeChange: currentGridSize = " + currentGridSize );
      // console.log( "Exiting handleGridSizeChange in FixedContainer in Create.tsx" );
    }
  }

  // handleSquareSizeChange: code to run when the user moves the square size slider
  function handleSquareSizeChange( event: ChangeEvent<HTMLInputElement> ) {
    // if ( JungianLib.logLogicFlow ) {
    //   console.log( "Top of handleSquareSizeChange in FixedContainer() in Create.tsx" );
    //   // console.log( "handleSquareSizeChange: event.target.value = " + event.target.value );
    // }
    const newSquareSize = parseInt( event.target.value );
    setCurrentSquareSize( newSquareSize );
    JungianLib.setSquareSize( newSquareSize );
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleSquareSizeChange: currentSquareSize = " + currentSquareSize );
      // console.log( "Exiting handleSquareSizeChange in FixedContainer() in Create.tsx" );
    }
  }

  // First useEffect: (presumably) runs once when component is mounted (but I have my doubts...)
  //   Fetches values from local storage, initializing them if they're not set
  //   Sets the currentScoreValues state variable to values from local storage [or default values]
  useEffect( () => {
    // if ( JungianLib.logLogicFlow ) {
    //   console.log( "Top of first useEffect in FixedContainer in Create.tsx" );
    // }
    const lsScoreValues = LocalStorageLib.getStoredScoreValues();
    setCurrentScoreValues( lsScoreValues );
    scoreValuesToDraw.opacityValue = lsScoreValues[0];
    scoreValuesToDraw.blueVsYellowValue = lsScoreValues[1];
    scoreValuesToDraw.greenVsRedValue = lsScoreValues[2];
    scoreValuesToDraw.bAndYVsGandRValue = lsScoreValues[3];
    if ( JungianLib.logLogicFlow ) {
      // console.log( "First useEffect: scoreValuesToDraw.toString() = " + scoreValuesToDraw.toString() );
      console.log( "First useEffect in Create.tsx: set scoreValuesToDraw and currentScoreValues" );
    }
    const imageString = LocalStorageLib.getStoredImageString();
    if ( imageString.length > JungianLib.gridSize ) {
      imageStringToDraw = imageString;
    } else {
      drawFreshImage = true;
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "First useEffect in Create.tsx: imageString.length = " + imageString.length );
      if ( imageString.length > JungianLib.gridSize ) {
        console.log( "First useEffect: set the imageStringToDraw with value from local storage" );
      } else {
        console.log( "First useEffect: DID NOT SET THE imageStringToDraw BECAUSE IT'S TOO SHORT" );
        console.log( "First useEffect: set drawFreshImage = true instead" );
      }
    }
    JungianLib.setSquareSize( LocalStorageLib.getStoredSquareSize() );
    const gridSize = LocalStorageLib.getStoredGridSize();
    JungianLib.setGridSize( gridSize );
    setCurrentGridSize( gridSize );
    if ( JungianLib.logLogicFlow ) {
      console.log( "First useEffect in Create.tsx: set squareSize and gridSize in JungianLib" );
      // console.log( "Exiting first useEffect in FixedContainer in Create.tsx" );
    }
    // NOTE! DO NOT DELETE THE EMPTY DEPENDENCY ARRAY!!  DOING SO CAUSES AN INFINITE LOOP!!!
  }, [] ); // empty dependency array -> this runs just once when the component is mounted

  // useEffect for currentScoreValues: runs when component is mounted AND when the user moves a score value slider
  //   Stores the new slider values and image string in local storage
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of useEffect for currentScoreValues in FixedContainer in Create.tsx" );
      // console.log( "useEffect for currentScoreValues: currentScoreValues.toString() = " + currentScoreValues.toString() );
    }
    const storedScoreValuesOk = LocalStorageLib.storeScoreValues( currentScoreValues );
    let storedImageStringOk = false;
    if ( storedScoreValuesOk ) {
      if ( JungianLib.logLogicFlow ) {
        console.log( "useEffect for currentScoreValues in Create.tsx: saved currentScoreValues as scoreValues ok" );
      }
      storedImageStringOk = LocalStorageLib.storeImageString( imageStringToDraw );
      if ( ! storedImageStringOk ) {
        drawFreshImage = true;
      }
    }
    if ( JungianLib.logLogicFlow ) {
      if ( storedScoreValuesOk ) {
        console.log( "useEffect for currentScoreValues in Create.tsx: saved currentScoreValues as scoreValues ok" );
        if ( storedImageStringOk ) {
          console.log( "useEffect for currentScoreValues in Create.tsx: saved imageStringToDraw as imageString ok" );
        } else {
          console.log( "useEffect for currentScoreValues: DID NOT SAVE imageStringToDraw IN LOCAL STORAGE" );
          console.log( "useEffect for currentScoreValues: set drawFreshImage = true" );
        }
      } else {
        console.log( "useEffect for currentScoreValues: DID NOT SAVE currentScoreValues IN LOCAL STORAGE" );
        console.log( "useEffect for currentScoreValues: DID NOT TRY TO SAVE imageStringToDraw IN LOCAL STORAGE" );
      }
      console.log( "Exiting useEffect for currentScoreValues in Create.tsx" );
    }
  }, [currentScoreValues] );

  // useEffect for currentGridSize: runs when component is mounted AND when the user changes the gridSize
  //   Stores the new, updated gridSize in local storage
  useEffect( () => {
    // if ( JungianLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentGridSize in Create.tsx" );
    // }
    const success = LocalStorageLib.storeGridSize( currentGridSize );
    if ( JungianLib.logLogicFlow ) {
      console.log( "useEffect for currentGridSize in Create.tsx: currentGridSize = " + currentGridSize );
      if ( success ) {
        console.log( "useEffect for currentGridSize: saved currentGridSize as gridSize ok" );
      } else {
        console.log( "useEffect for currentGridSize: DID NOT SAVE currentGridSize as gridSize" );
      }
      // console.log( "Exiting useEffect for currentGridSize in Create.tsx" );
    }
  }, [currentGridSize] );

  // useEffect for currentSquareSize: runs when component is mounted AND when the user changes the squareSize
  //   Stores the new, updated squareSize in local storage
  useEffect( () => {
    // if ( JungianLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentSquareSize in Create.tsx" );
    // }
    const success = LocalStorageLib.storeSquareSize( currentSquareSize );
    if ( JungianLib.logLogicFlow ) {
      console.log( "useEffect for currentSquareSize in Create.tsx: currentSquareSize = " + currentSquareSize );
      if ( success ) {
        console.log( "useEffect for currentSquareSize: saved currentSquareSize as squareSize ok" );
      } else {
        console.log( "useEffect for currentSquareSize: DID NOT SAVE currentSquareSize as squareSize" );
      }
      // console.log( "Exiting useEffect for currentSquareSize in Create.tsx" );
    }
  }, [currentSquareSize] );

  scoreValuesToDraw.opacityValue = currentScoreValues[0];
  scoreValuesToDraw.blueVsYellowValue = currentScoreValues[1];
  scoreValuesToDraw.greenVsRedValue = currentScoreValues[2];
  scoreValuesToDraw.bAndYVsGandRValue = currentScoreValues[3];

  // Construct markup for the ScoreSliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.jungianScoreLabels.length; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <ScoreSliderCard
         sliderNo={col}
         sliderVal={currentScoreValues[col] ?? JungianLib.initialScoreValue}
         onSliderChange={ (event) => handleScoreValueChange(event,col) }
        />
      </div>
    );
  }

  const gridSizeLabel = "Grid Size: " + JungianLib.gridSize + " Squares per Side";
  const squareSizeLabel = "Square Size: " + JungianLib.squareSize + " Pixels per Square";

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
        <div className="col-sm-6 card align-items-center">
          <MDBRange
            defaultValue={JungianLib.gridSize}
            min={JungianLib.minGridSize}
            max={JungianLib.maxGridSize}
            id='grid-size'
            label={gridSizeLabel}
            onChange={handleGridSizeChange}
          />
        </div>
        <div className="col-sm-6 card align-items-center">
          <SquareSizeSlider
            squareSizeLabel={squareSizeLabel}
            onSquareSizeChange={handleSquareSizeChange}
          />
        </div>
      </div>
      <div className="row mt-4">
        <FixedSizeImageAndCards
          opacityValue={currentScoreValues[0] ?? JungianLib.initialScoreValue}
          blueVsYellowValue={currentScoreValues[1] ?? JungianLib.initialScoreValue}
          greenVsRedValue={currentScoreValues[2] ?? JungianLib.initialScoreValue}
          bAndYVsGandRValue={currentScoreValues[3] ?? JungianLib.initialScoreValue} />
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
