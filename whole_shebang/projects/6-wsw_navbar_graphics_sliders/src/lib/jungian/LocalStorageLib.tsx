//
// lib/jungian/LocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//
import * as JungianLib from '../lib/JungianLib.tsx';

//
// storeScoreValues: sets the scoreValues in local storage to the specified values
//   returns true if successful else false if the newImageString is too short
export function storeScoreValues( newScoreValues: number[] ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of storeScoreValues() in lib/jungian/LocalStorageLib.tsx" );
  }

  let success = true;

  for ( let valIdx = 0; valIdx < newScoreValues.length; ++valIdx ) {
    if ( newScoreValues[valIdx] < JungianLib.minScoreValue ||
         JungianLib.maxScoreValue < newScoreValues[valIdx]   ) {
      success = false;
      break;
    }
  }

  if ( success ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.scoreValues = newScoreValues;
    storeJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeScoreValues(): stored '" + newScoreValues + "' in the 'jungian' item" );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeScoreValues(): newScoreValues = " + newScoreValues );
      console.log( "storeScoreValues(): NOT SAVING newScoreValues BECAUSE IT HAS AN INVALID VALUE" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing " + success + " from storeScoreValues() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredScoreValues: returns the current scoreValues from local storage
export function getStoredScoreValues(): number[] {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getStoredScoreValues() in lib/jungian/LocalStorageLib.tsx" );
  }

  let scoreValues = [ JungianLib.initialScoreValue ];
  const jungianItem = getStoredJungianItem();

  if ( jungianItem ) {
    scoreValues = jungianItem.scoreValues;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredScoreValues in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredScoreValues: scoreValues.toString() = " + scoreValues.toString() );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredScoreValues in lib/jungian/LocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getStoredScoreValues: returning an array containing a single JungianLib.initialScoreValue" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + scoreValues.toString() + "' from getStoredScoreValues() in lib/jungian/LocalStorageLib.tsx" );
  }

  return scoreValues;
}


// storeImageString: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function storeImageString( newImageString: string ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of storeImageString() in lib/jungian/LocalStorageLib.tsx" );
  }

  let success = true;

  if ( newImageString.length > JungianLib.gridSize ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.imageString = newImageString;
    storeJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeImageString(): stored newImageString in the 'jungian' item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeImageString(): newImageString.length = " + newImageString.length );
      console.log( "storeImageString(): NOT SAVING newImageString BECAUSE IT IS TOO SHORT" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + success + "' from storeImageString() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredImageString: returns the current imageString from local storage
export function getStoredImageString(): string {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getStoredImageString() in lib/jungian/LocalStorageLib.tsx" );
  }

  let imageString = JungianLib.defaultImageString;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    imageString = jungianItem.imageString;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredImageString in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredImageString: imageString.length = " + imageString.length );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredImageString in lib/jungian/LocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getStoredImageString: returning defaultImageString" );
    }
  }


  if ( JungianLib.logLogicFlow ) {
    // console.log( "Return()ing '" + imageString + "' from getStoredImageString() in lib/jungian/LocalStorageLib.tsx" );
    console.log( "Return()ing from getStoredImageString() in lib/jungian/LocalStorageLib.tsx" );
  }

  return imageString;
}


// storeSquareSize: sets the current squareSize to the specified value
//   returns true if successful else false if the newImageString is too short
export function storeSquareSize( newSquareSize: number ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of storeSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  let success = true;

  if ( JungianLib.minSquareSize <= newSquareSize &&
       newSquareSize <= JungianLib.maxSquareSize   ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.squareSize = newSquareSize;
    storeJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeSquareSize(): stored newSquareSize in the 'jungian' item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeSquareSize(): newSquareSize = " + newSquareSize + " IS UNACCEPTABLE" );
      console.log( "storeSquareSize(): NOT SAVING newSquareSize BECAUSE IT IS INVALID" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + success + "' from storeSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredSquareSize: returns the current squareSize from local storage
export function getStoredSquareSize(): number {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getStoredSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  let squareSize = JungianLib.initialSquareSize;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    squareSize = jungianItem.squareSize;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredSquareSize in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredSquareSize: squareSize = " + squareSize );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredSquareSize in lib/jungian/LocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getStoredSquareSize: returning initialSquareSize" );
    }
  }


  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + squareSize + "' from getStoredSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return squareSize;
}


// storeGridSize: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function storeGridSize( newGridSize: number ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of storeGridSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  let success = true;

  if ( JungianLib.minGridSize <= newGridSize &&
       newGridSize <= JungianLib.maxGridSize   ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.gridSize = newGridSize;
    storeJungianItem( jungianItem );
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeGridSize(): stored newGridSize in the 'jungian' item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "storeGridSize(): newGridSize = " + newGridSize + " IS UNACCEPTABLE" );
      console.log( "storeGridSize(): NOT SAVING newGridSize BECAUSE IT IS INVALID" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + success + "' from storeGridSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredGridSize: returns the current imageString from local storage
export function getStoredGridSize(): number {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getStoredGridSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  let gridSize = JungianLib.initialGridSize;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    gridSize = jungianItem.gridSize;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredGridSize in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredGridSize: gridSize = " + gridSize );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getStoredGridSize in lib/jungian/LocalStorageLib.tsx: 'jungian' item NOT FOUND in localStorage" );
      console.log( "getStoredGridSize: returning initialGridSize" );
    }
  }


  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + gridSize + "' from getStoredGridSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return gridSize;
}


interface JungianItemValues {
  imageString: string;
//scoreValues: JungianLib.JungianScoreValues;
  scoreValues: number[];
  squareSize: number;
  gridSize: number;
}

// storeJungianItem: sets all of the values in the 'jungian' item in local storage
function storeJungianItem( newJungianItemValues: JungianItemValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of storeJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  }

  localStorage.setItem( 'jungian', JSON.stringify(newJungianItemValues) );

  if ( JungianLib.logLogicFlow ) {
    // console.log( "storeJungianItem(): stored newJungianItemValues as the 'jungian' item" );
    console.log( "Return()ing from storeJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  }

  return;
}
// getStoredJungianItem: returns the current 'jungian' item from local storage
function getStoredJungianItem(): JungianItemValues {
  // if ( JungianLib.logLogicFlow ) {
  //   console.log( "Top of getStoredJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  // }

  const initialJungianItemValues: JungianItemValues = {
    imageString: JungianLib.defaultImageString,
    scoreValues: [
      JungianLib.initialScoreValue,
      JungianLib.initialScoreValue,
      JungianLib.initialScoreValue,
      JungianLib.initialScoreValue
    ],
    squareSize: JungianLib.initialSquareSize,
    gridSize: JungianLib.initialGridSize,
  }

  let jungianItem = initialJungianItemValues;
  const rawStoredJungianItem = localStorage.getItem( 'jungian' );

  if ( rawStoredJungianItem ) {
    jungianItem = JSON.parse( rawStoredJungianItem );
    // if ( JungianLib.logLogicFlow ) {
    //   console.log( "getStoredJungianItem(): found the stored 'jungian' item and parsed it" );
    // }
  }

  // if ( JungianLib.logLogicFlow ) {
  //   // console.log( "Return()ing '" + jungianItem + "' from getStoredJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  //   console.log( "Return()ing from getStoredJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  // }

  return jungianItem;
}

