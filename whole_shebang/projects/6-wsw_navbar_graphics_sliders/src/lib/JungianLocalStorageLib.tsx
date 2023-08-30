//
// JungianLocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//
import * as JungianLib from '../lib/JungianLib.tsx';
import { defaultSliderValue } from './SliderLib.tsx';

//
// setSliderValues: sets the current SliderValues to the specified value
//   returns true if successful else false if the newImageString is too short
export function setSliderValues( newSliderValues: number[] ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setSliderValues() in JungianLocalStorageLib.tsx" );
  }

  let success = true;

  if ( newSliderValues.length > 3 ) {
    const jungianItem = getTheJungianItem();
    jungianItem.sliderValues = newSliderValues;
    setTheJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSliderValues(): stored '" + newSliderValues + "' in the 'jungian' item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSliderValues(): newSliderValues.length = " + newSliderValues.length );
      console.log( "setSliderValues(): NOT SAVING newSliderValues BECAUSE IT HAS TOO FEW VALUES" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing " + success + " from setSliderValues() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getSliderValues: returns the current sliderValues from local storage
export function getSliderValues(): number[] {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getSliderValues() in JungianLocalStorageLib.tsx" );
  }

  let sliderValues = [ defaultSliderValue ];
  const jungianItem = getTheJungianItem();

  if ( jungianItem ) {
    sliderValues = jungianItem.sliderValues;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSliderValues in JungianLocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getSliderValues: sliderValues.toString() = " + sliderValues.toString() );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSliderValues in JungianLocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getSliderValues: returning an array containing a single defaultSliderValue" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + sliderValues.toString() + "' from getSliderValues() in JungianLocalStorageLib.tsx" );
  }

  return sliderValues;
}

// setImageString: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function setImageString( newImageString: string ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setImageString() in JungianLocalStorageLib.tsx" );
  }

  let success = true;

  if ( newImageString.length > JungianLib.gridSize ) {
    const jungianItem = getTheJungianItem();
    jungianItem.imageString = newImageString;
    setTheJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setImageString(): stored newImageString in the 'jungian' item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setImageString(): newImageString.length = " + newImageString.length );
      console.log( "setImageString(): NOT SAVING newImageString BECAUSE IT IS TOO SHORT" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + success + "' from setImageString() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getImageString: returns the current imageString from local storage
export function getImageString(): string {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getImageString() in JungianLocalStorageLib.tsx" );
  }

  let imageString = JungianLib.defaultImageString;
  const jungianItem = getTheJungianItem( );

  if ( jungianItem ) {
    imageString = jungianItem.imageString;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getImageString in JungianLocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getImageString: imageString.length = " + imageString.length );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getImageString in JungianLocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getImageString: returning defaultImageString" );
    }
  }


  if ( JungianLib.logLogicFlow ) {
    // console.log( "Return()ing '" + imageString + "' from getImageString() in JungianLocalStorageLib.tsx" );
    console.log( "Return()ing from getImageString() in JungianLocalStorageLib.tsx" );
  }

  return imageString;
}

// setSquareSize: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function setSquareSize( newSquareSize: number ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setSquareSize() in JungianLocalStorageLib.tsx" );
  }

  let success = true;

  if ( JungianLib.minSquareSize <= newSquareSize &&
       newSquareSize <= JungianLib.maxSquareSize   ) {
    const jungianItem = getTheJungianItem();
    jungianItem.squareSize = newSquareSize;
    setTheJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSquareSize(): stored newSquareSize in the 'jungian' item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSquareSize(): newSquareSize = " + newSquareSize + " IS UNACCEPTABLE" );
      console.log( "setSquareSize(): NOT SAVING newSquareSize BECAUSE IT IS INVALID" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + success + "' from setSquareSize() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getSquareSize: returns the current imageString from local storage
export function getSquareSize(): number {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getSquareSize() in JungianLocalStorageLib.tsx" );
  }

  let squareSize = JungianLib.defaultSquareSize;
  const jungianItem = getTheJungianItem( );

  if ( jungianItem ) {
    squareSize = jungianItem.squareSize;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSquareSize in JungianLocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getSquareSize: squareSize = " + squareSize );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSquareSize in JungianLocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getSquareSize: returning defaultSquareSize" );
    }
  }


  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + squareSize + "' from getSquareSize() in JungianLocalStorageLib.tsx" );
  }

  return squareSize;
}


// THIS SORT OF THING BREAKS STUFF ...
//const defaultSliderValues = [ defaultSliderValue, defaultSliderValue, defaultSliderValue, defaultSliderValue ];

interface JungianItemValues {
  imageString: string;
//sliderValues: JungianLib.JungianSliderValues;
  sliderValues: number[];
  squareSize: number;
}

// setTheJungianItem: sets all of the values in the 'jungian' item in local storage
function setTheJungianItem( newJungianItemValues: JungianItemValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setTheJungianItem() in JungianLocalStorageLib.tsx" );
  }

  localStorage.setItem( 'jungian', JSON.stringify(newJungianItemValues) );

  if ( JungianLib.logLogicFlow ) {
    // console.log( "setTheJungianItem(): stored newJungianItemValues as the 'jungian' item" );
    console.log( "Return()ing from setTheJungianItem() in JungianLocalStorageLib.tsx" );
  }

  return;
}

// getTheJungianItem: returns the current 'jungian' item from local storage
function getTheJungianItem(): JungianItemValues {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getTheJungianItem() in JungianLocalStorageLib.tsx" );
  }

  const defaultJungianItemValues: JungianItemValues = {
    imageString: JungianLib.defaultImageString,
    sliderValues: [ defaultSliderValue ],
    squareSize: JungianLib.defaultSquareSize,
  }

  let jungianItem = defaultJungianItemValues;
  const rawStoredJungianItem = localStorage.getItem( 'jungian' );

  if ( rawStoredJungianItem ) {
    jungianItem = JSON.parse( rawStoredJungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "getTheJungianItem(): found the stored 'jungian' item" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    // console.log( "Return()ing '" + jungianItem + "' from getTheJungianItem() in JungianLocalStorageLib.tsx" );
    console.log( "Return()ing from getTheJungianItem() in JungianLocalStorageLib.tsx" );
  }

  return jungianItem;
}

