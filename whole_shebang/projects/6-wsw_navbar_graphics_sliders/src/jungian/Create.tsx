//
// Create.tsx: code for the Create option for the Jungian quiz type
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import Canvas from '../lib/CanvasLib.tsx';
import * as ImageLib from '../lib/jungian/ImageLib.tsx';
import * as LocalStorageLib from '../lib/jungian/LocalStorageLib.tsx';
import ScoreSliderCard from '../lib/jungian/ScoreSliderLib.tsx';
import SquareSizeSlider from '../lib/jungian/SquareSizeSliderLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// ImageLib.setLogLogicFlow( false );    // un-comment when everything's ok
ImageLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

let drawFreshImage = false;

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of draw() in Create.tsx" );
  }

  if ( drawFreshImage ) {
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): calling ImageLib.createFreshImageString to create a Fresh Image" );
    }
    const freshImageString = ImageLib.createFreshImageString();
    ImageLib.setImageStr( freshImageString );
    LocalStorageLib.storeImageStr( freshImageString );
    console.log( "draw(): ImageLib.imageStr.length = " + ImageLib.imageStr.length );
    drawFreshImage = false;
    ImageLib.drawImageStr( context );
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): set drawFreshImage = false and ImageLib.imageStr = freshImageString" );
    }
  } else if ( ImageLib.imageStr.length === 0 ) {
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): drawFreshImage is false and ImageLib.imageStr is empty, doing nothing" );
    }
  } else {
    ImageLib.drawImageStr( context );
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): drew the ImageLib.imageStr" );
    }
  }
  if ( ImageLib.logLogicFlow ) {
    console.log( "Exiting draw() in Create.tsx" );
  }
};

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: ImageLib.JungianScoreValues ) {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Create.tsx" );
  }

  const width = ImageLib.getCanvasWidth();
  const height = ImageLib.getCanvasHeight();

  if ( ImageLib.logLogicFlow ) {
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
          {ImageLib.jungianScorePropNames[0]}: {props.opacityValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.jungianScorePropNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.jungianScorePropNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.jungianScorePropNames[3]}: {props.bAndYVsGandRValue}
        </div>
      </div>
    </>
  );
}

// FixedContainer: function component containing an MDB container
function FixedContainer() {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of FixedContainer() in Create.tsx" );
  }

  const [currentScoreValues, setCurrentScoreValues] = useState( ImageLib.invalidScoreValueArr );
  const [currentSquareSize, setCurrentSquareSize] = useState( ImageLib.invalidSquareSize );
  const [currentGridSize, setCurrentGridSize] = useState( ImageLib.invalidGridSize );

  // handleScoreValueChange: code to run when the user moves a score slider
  //   Update currentScoreValues to the new slider value and possibly draw a new image
  function handleScoreValueChange( event: ChangeEvent, col: number ) {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleScoreValueChange in FixedContainer in Create.tsx" );
    // }
    const scoreValue = (event.target as HTMLInputElement).value;
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleScoreValueChange: slider num " + col.toString() + " = " + scoreValue.toString() );
    }
    const nextScoreValues = currentScoreValues.slice();
    nextScoreValues[col] = parseInt( scoreValue );
    setCurrentScoreValues( nextScoreValues );
    // When the value for a slider (other than opacity) changes, we need to draw a new image
    if ( 0 < col ) {
      drawFreshImage = true;
    }
    if ( ImageLib.logLogicFlow ) {
      if ( 0 < col ) {
        console.log( "handleScoreValueChange: set drawFreshImage = true" );
      }
      // console.log( "Exiting handleScoreValueChange in Create.tsx" );
    }
  }

  // handleGridSizeChange: code to run when user moves the grid size slider
  function handleGridSizeChange( event: ChangeEvent<HTMLInputElement> ) {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleGridSizeChange in Create.tsx" );
    //   // console.log( "handleGridSizeChange: event.target.value = " + event.target.value );
    // }
    const newGridSize = parseInt( event.target.value );
    setCurrentGridSize( newGridSize );
    ImageLib.setGridSize( newGridSize );
    drawFreshImage = true;
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleGridSizeChange: currentGridSize = " + currentGridSize );
      // console.log( "Exiting handleGridSizeChange in Create.tsx" );
    }
  }

  // handleSquareSizeChange: code to run when the user moves the square size slider
  function handleSquareSizeChange( event: ChangeEvent<HTMLInputElement> ) {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleSquareSizeChange in Create.tsx" );
    //   // console.log( "handleSquareSizeChange: event.target.value = " + event.target.value );
    // }
    const newSquareSize = parseInt( event.target.value );
    setCurrentSquareSize( newSquareSize );
    ImageLib.setSquareSize( newSquareSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleSquareSizeChange: currentSquareSize = " + currentSquareSize );
      // console.log( "Exiting handleSquareSizeChange in Create.tsx" );
    }
  }

  // First useEffect: runs once when component is mounted - except when we are in development
  //   Fetches values from local storage, initializing them if they're not set
  //   Sets the currentScoreValues state variable to values from local storage [or default values]
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of first useEffect in FixedContainer in Create.tsx" );
    // }
    const storedScoreValues = LocalStorageLib.getStoredScoreValueArr();
    setCurrentScoreValues( storedScoreValues );
    ImageLib.setScoreValueObj( storedScoreValues );
    if ( ImageLib.logLogicFlow ) {
      console.log( "First useEffect: ImageLib.scoreValueObj.toString() = " + ImageLib.scoreValueObj.toString() );
      console.log( "First useEffect in Create.tsx: set currentScoreValues and ImageLib.scoreValueObj " );
    }
    const storedImageStr = LocalStorageLib.getStoredImageStr();
    if ( storedImageStr.length > ImageLib.gridSize ) {
      ImageLib.setImageStr( storedImageStr );
    } else {
      drawFreshImage = true;
    }
    if ( ImageLib.logLogicFlow ) {
      console.log( "First useEffect in Create.tsx: storedImageStr.length = " + storedImageStr.length );
      if ( storedImageStr.length > ImageLib.gridSize ) {
        console.log( "First useEffect: set the ImageLib.imageStr to the value from local storage" );
      } else {
        console.log( "First useEffect: DID NOT SET ImageLib.imageStr BECAUSE STORED VALUE IS TOO SHORT" );
        console.log( "First useEffect: set drawFreshImage = true instead" );
      }
    }
    ImageLib.setSquareSize( LocalStorageLib.getStoredSquareSize() );
    const gridSize = LocalStorageLib.getStoredGridSize();
    ImageLib.setGridSize( gridSize );
    setCurrentGridSize( gridSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "First useEffect in Create.tsx: set squareSize and gridSize in ImageLib" );
      // console.log( "Exiting first useEffect in FixedContainer in Create.tsx" );
    }
    // NOTE! DO NOT DELETE THE EMPTY DEPENDENCY ARRAY!!  DOING SO CAUSES AN INFINITE LOOP!!!
  }, [] ); // empty dependency array -> this runs just once when the component is mounted

  // useEffect for currentScoreValues: runs when component is mounted AND when the user moves a score value slider
  //   Stores the new slider values and image string in local storage
  useEffect( () => {
    if ( ImageLib.logLogicFlow ) {
      console.log( "Top of useEffect for currentScoreValues in FixedContainer in Create.tsx" );
      // console.log( "useEffect for currentScoreValues: currentScoreValues.toString() = " + currentScoreValues.toString() );
    }
    const storedScoreValueArrOk = LocalStorageLib.storeScoreValueArr( currentScoreValues );
    let storedImageStrOk = false;
    if ( storedScoreValueArrOk ) {
      if ( ImageLib.logLogicFlow ) {
        console.log( "useEffect for currentScoreValues in Create.tsx: saved currentScoreValues as scoreValues ok" );
      }
      storedImageStrOk = LocalStorageLib.storeImageStr( ImageLib.imageStr );
      if ( ! storedImageStrOk ) {
        drawFreshImage = true;
      }
    }
    if ( ImageLib.logLogicFlow ) {
      if ( storedScoreValueArrOk ) {
        console.log( "useEffect for currentScoreValues in Create.tsx: saved currentScoreValues as scoreValues ok" );
        if ( storedImageStrOk ) {
          console.log( "useEffect for currentScoreValues in Create.tsx: saved ImageLib.imageStr as imageStr ok" );
        } else {
          console.log( "useEffect for currentScoreValues: DID NOT SAVE ImageLib.imageStr IN LOCAL STORAGE" );
          console.log( "useEffect for currentScoreValues: set drawFreshImage = true" );
        }
      } else {
        console.log( "useEffect for currentScoreValues: DID NOT SAVE currentScoreValues IN LOCAL STORAGE" );
        console.log( "useEffect for currentScoreValues: DID NOT TRY TO SAVE ImageLib.imageStr IN LOCAL STORAGE" );
      }
      console.log( "Exiting useEffect for currentScoreValues in Create.tsx" );
    }
  }, [currentScoreValues] );

  // useEffect for currentGridSize: runs when component is mounted AND when the user changes the gridSize
  //   Stores the new, updated gridSize in local storage
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentGridSize in Create.tsx" );
    // }
    const success = LocalStorageLib.storeGridSize( currentGridSize );
    if ( ImageLib.logLogicFlow ) {
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
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentSquareSize in Create.tsx" );
    // }
    const success = LocalStorageLib.storeSquareSize( currentSquareSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "useEffect for currentSquareSize in Create.tsx: currentSquareSize = " + currentSquareSize );
      if ( success ) {
        console.log( "useEffect for currentSquareSize: saved currentSquareSize as squareSize ok" );
      } else {
        console.log( "useEffect for currentSquareSize: DID NOT SAVE currentSquareSize as squareSize" );
      }
      // console.log( "Exiting useEffect for currentSquareSize in Create.tsx" );
    }
  }, [currentSquareSize] );

  ImageLib.setScoreValueObj( currentScoreValues );

  // Construct markup for the ScoreSliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < ImageLib.jungianScoreLabels.length; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <ScoreSliderCard
         sliderNo={col}
         sliderVal={currentScoreValues[col] ?? ImageLib.initialScoreValue}
         onSliderChange={ (event) => handleScoreValueChange(event,col) }
        />
      </div>
    );
  }

  const gridSizeLabel = "Grid Size: " + ImageLib.gridSize + " Squares per Side";
  const squareSizeLabel = "Square Size: " + ImageLib.squareSize + " Pixels per Square";

  if ( ImageLib.logLogicFlow ) {
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
            defaultValue={ImageLib.gridSize}
            min={ImageLib.minGridSize}
            max={ImageLib.maxGridSize}
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
          opacityValue={currentScoreValues[0] ?? ImageLib.initialScoreValue}
          blueVsYellowValue={currentScoreValues[1] ?? ImageLib.initialScoreValue}
          greenVsRedValue={currentScoreValues[2] ?? ImageLib.initialScoreValue}
          bAndYVsGandRValue={currentScoreValues[3] ?? ImageLib.initialScoreValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
function Create() {
  if ( ImageLib.logLogicFlow ) {
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
