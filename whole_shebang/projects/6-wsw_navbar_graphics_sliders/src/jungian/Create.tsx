//
// Create.tsx: code for the Create option for the Jungian quiz type
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import { defaultSliderValue, JungianScoreSliderCard } from '../lib/JungianScoreSliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as JungianLSLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok
JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

// These are the slider values we use when drawing a Fresh Image
const storedSliderValues: JungianLib.JungianScoreSliderValues = {
  opacityValue: defaultSliderValue,
  blueVsYellowValue: defaultSliderValue,
  greenVsRedValue: defaultSliderValue,
  bAndYVsGandRValue: defaultSliderValue,
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
    const newImageString = JungianLib.drawNewImageString( context, storedSliderValues );
    storedImageString = newImageString;
    drawFreshImage = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): set drawFreshImage = false & storedImageString = newImageString" );
    }
  } else if ( storedImageString.length === 0 ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): drawFreshImage is false and storedImageString is empty..." );
    }
  } else {
    JungianLib.drawStoredImageString( context, storedImageString, storedSliderValues.opacityValue );
    if ( JungianLib.logLogicFlow ) {
      console.log( "draw(): drew the storedImageString" );
    }
  }
  if ( JungianLib.logLogicFlow ) {
    console.log( "Exiting draw() in Create.tsx" );
  }
};

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: JungianLib.JungianScoreSliderValues ) {
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

  const [currentSliderValues, setCurrentSliderValues] = useState([defaultSliderValue]);

  function handleSliderValueChange( event: ChangeEvent, col: number ) {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of handleSliderValueChange in FixedContainer in Create.tsx" );
    }
    const sliderValue = (event.target as HTMLInputElement).value;
    if ( JungianLib.logLogicFlow ) {
      console.log( "handleSliderValueChange: slider num " + col.toString() + " = " + sliderValue.toString() );
    }
    const nextSliderValues = currentSliderValues.slice();
    nextSliderValues[col] = parseInt(sliderValue);
    setCurrentSliderValues(nextSliderValues);
    // When the value for a slider (other than opacity) changes, we need to draw a new image
    if ( 0 < col ) {
      drawFreshImage = true;
      if ( JungianLib.logLogicFlow ) {
        console.log( "handleSliderValueChange: set drawFreshImage = true" );
      }
    }
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting handleSliderValueChange in FixedContainer in Create.tsx" );
    }
  }

  // First useEffect: (presumably) runs once when component is mounted (but I have my doubts...)
  //   Fetches values from local storage, initializing them if they're not set
  //   Sets the currentSliderValues state variable to values from local storage [or default values]
  useEffect( () => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of first useEffect in FixedContainer() in Create.tsx" );
    }
    const jungianLSLibSliderValues = JungianLSLib.getSliderValues();
    if ( jungianLSLibSliderValues.length > 3 ) {
      setCurrentSliderValues( jungianLSLibSliderValues );
      if ( JungianLib.logLogicFlow ) {
        console.log( "First useEffect: found the jungianLSLibSliderValues" );
        // console.log( "First useEffect: jungianLSLibSliderValues.toString() = " + jungianLSLibSliderValues.toString() );
      }
    } else {
      const defaultSliderValues = [ defaultSliderValue, defaultSliderValue, defaultSliderValue, defaultSliderValue ];
      JungianLSLib.setSliderValues( defaultSliderValues );
      setCurrentSliderValues( defaultSliderValues );
      if ( JungianLib.logLogicFlow ) {
        console.log( "First useEffect: jungianLSLibSliderValues NOT FOUND in localStorage" );
        console.log( "First useEffect: saved default values for sliderValues in state variable & localStorage" );
      }
    }
    storedImageString = JungianLSLib.getImageString();
    JungianLib.setSquareSize( JungianLSLib.getSquareSize() );
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
      console.log( "Second useEffect: currentSliderValues.length = " + currentSliderValues.length );
    }
    if ( currentSliderValues.length > 3 ) {
      JungianLSLib.setSliderValues( currentSliderValues );
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in Create.tsx: saved currentSliderValues as sliderValues." );
      }
    } else {
      if ( JungianLib.logLogicFlow ) {
        console.log( "Second useEffect in Create.tsx: did NOT save currentSliderValues as sliderValues" );
      }
    }
    const success = JungianLSLib.setImageString( storedImageString );
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
    if ( JungianLib.logLogicFlow ) {
      console.log( "Exiting second useEffect in FixedContainer() in Create.tsx" );
    }
  }, [currentSliderValues] );

  storedSliderValues.opacityValue = currentSliderValues[0];
  storedSliderValues.blueVsYellowValue = currentSliderValues[1];
  storedSliderValues.greenVsRedValue = currentSliderValues[2];
  storedSliderValues.bAndYVsGandRValue = currentSliderValues[3];

  // Construct markup for the JungianScoreSliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.jungianScoreSliderLabels.length; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <JungianScoreSliderCard
         sliderNo={col}
         sliderVal={currentSliderValues[col] ?? defaultSliderValue}
         onSliderChange={ (event) => handleSliderValueChange(event,col) }
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
