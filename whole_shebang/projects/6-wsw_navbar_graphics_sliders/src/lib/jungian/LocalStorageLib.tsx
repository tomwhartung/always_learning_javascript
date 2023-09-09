//
// lib/jungian/LocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//

import * as ImageLib from './ImageLib.tsx';

//
// storeScoreValueArr: sets the array of scoreValues in local storage to the specified values
//   returns true if successful else false if the newImageString is too short
export function storeScoreValueArr( newScoreValues: number[] ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeScoreValueArr() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let allValuesOk = true;

  for ( let valIdx = 0; valIdx < newScoreValues.length; ++valIdx ) {
    if ( newScoreValues[valIdx] < ImageLib.minScoreValue ||
         ImageLib.maxScoreValue < newScoreValues[valIdx]   ) {
      allValuesOk = false;
      break;
    }
  }

  if ( allValuesOk ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.scoreValues = newScoreValues;
    storeJungianItem( jungianItem );
  }

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeScoreValueArr(): newScoreValues.toString() = " + newScoreValues.toString() );
    if ( allValuesOk ) {
      console.log( "storeScoreValueArr(): stored newScoreValues ok" );
    } else {
      console.log( "storeScoreValueArr(): NOT STORING newScoreValues BECAUSE IT HAS AN INVALID VALUE" );
    }
    // console.log( "Return()ing " + allValuesOk + " from storeScoreValueArr() in lib/jungian/LocalStorageLib.tsx" );
  }

  return allValuesOk;
}
// getStoredScoreValueArr: returns an array of the current scoreValues from local storage
export function getStoredScoreValueArr(): number[] {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of getStoredScoreValueArr() in lib/jungian/LocalStorageLib.tsx" );
  }

  let scoreValues = ImageLib.initialScoreValueArr;
  const jungianItem = getStoredJungianItem();

  if ( jungianItem ) {
    scoreValues = jungianItem.scoreValues;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredScoreValueArr in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredScoreValueArr: found scoreValues.toString() = " + scoreValues.toString() );
    } else {
      console.log( "getStoredScoreValueArr in lib/jungian/LocalStorageLib.tsx: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredScoreValueArr: returning ImageLib.initialScoreValueArr" );
    }
    console.log( "Return()ing '" + scoreValues.toString() + "' from getStoredScoreValueArr() in lib/jungian/LocalStorageLib.tsx" );
  }

  return scoreValues;
}


// storeImageString: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function storeImageString( newImageString: string ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeImageString() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let success = true;

  if ( newImageString.length > ImageLib.gridSize ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.imageString = newImageString;
    storeJungianItem( jungianItem );
  } else {
    success = false;
  }

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeImageString(): newImageString.length = " + newImageString.length );
    if ( success ) {
      console.log( "storeImageString(): stored newImageString in the 'jungian' item ok" );
    } else {
      console.log( "storeImageString(): NOT STORING newImageString BECAUSE IT IS TOO SHORT" );
    }
    // console.log( "Return()ing '" + success + "' from storeImageString() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredImageString: returns the current imageString from local storage
export function getStoredImageString(): string {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredImageString() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let imageString = ImageLib.defaultImageString;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    imageString = jungianItem.imageString;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredImageString in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredImageString: found imageString.length = " + imageString.length );
    } else {
      console.log( "getStoredImageString in lib/jungian/LocalStorageLib.tsx: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredImageString: returning defaultImageString, length = " + imageString.length );
    }
    // console.log( "getStoredImageString: return()ing imageString.length = " + imageString.length );
  }

  return imageString;
}


// storeSquareSize: sets the current squareSize to the specified value
//   returns true if successful else false if the newImageString is too short
export function storeSquareSize( newSquareSize: number ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let success = true;

  if ( ImageLib.minSquareSize <= newSquareSize &&
       newSquareSize <= ImageLib.maxSquareSize   ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.squareSize = newSquareSize;
    storeJungianItem( jungianItem );
  } else {
    success = false;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( success ) {
      console.log( "storeSquareSize(): stored newSquareSize " + newSquareSize + " ok" );
    } else {
      console.log( "storeSquareSize(): newSquareSize = " + newSquareSize + " IS UNACCEPTABLE" );
      // console.log( "storeSquareSize(): NOT STORING newSquareSize BECAUSE IT IS INVALID" );
    }
    // console.log( "Return()ing '" + success + "' from storeSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredSquareSize: returns the current squareSize from local storage
export function getStoredSquareSize(): number {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let squareSize = ImageLib.initialSquareSize;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    squareSize = jungianItem.squareSize;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredSquareSize in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredSquareSize: found squareSize = " + squareSize );
    } else {
      console.log( "getStoredSquareSize in lib/jungian/LocalStorageLib.tsx: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredSquareSize: returning initialSquareSize = " + ImageLib.initialSquareSize );
    }
    // console.log( "Return()ing '" + squareSize + "' from getStoredSquareSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return squareSize;
}


// storeGridSize: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function storeGridSize( newGridSize: number ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeGridSize() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let success = true;

  if ( ImageLib.minGridSize <= newGridSize &&
       newGridSize <= ImageLib.maxGridSize   ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.gridSize = newGridSize;
    storeJungianItem( jungianItem );
  } else {
    success = false;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( success ) {
      console.log( "storeGridSize(): stored newGridSize = " + newGridSize + " ok" );
    } else {
      console.log( "storeGridSize(): newGridSize = " + newGridSize + " IS UNACCEPTABLE" );
      // console.log( "storeGridSize(): NOT STORING newGridSize BECAUSE IT IS INVALID" );
    }
    // console.log( "Return()ing '" + success + "' from storeGridSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return success;
}
// getStoredGridSize: returns the current imageString from local storage
export function getStoredGridSize(): number {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredGridSize() in lib/jungian/LocalStorageLib.tsx" );
  // }

  let gridSize = ImageLib.initialGridSize;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    gridSize = jungianItem.gridSize;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredGridSize in lib/jungian/LocalStorageLib.tsx: found the 'jungian' item" );
      console.log( "getStoredGridSize: found gridSize = " + gridSize );
    } else {
      console.log( "getStoredGridSize in lib/jungian/LocalStorageLib.tsx: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredGridSize: returning initialGridSize" );
    }
    // console.log( "Return()ing '" + gridSize + "' from getStoredGridSize() in lib/jungian/LocalStorageLib.tsx" );
  }

  return gridSize;
}


interface JungianItemValues {
  imageString: string;
//scoreValues: ImageLib.JungianScoreValues;
  scoreValues: number[];
  squareSize: number;
  gridSize: number;
}

// storeJungianItem: sets all of the values in the 'jungian' item in local storage
function storeJungianItem( newJungianItemValues: JungianItemValues ) {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  // }

  localStorage.setItem( 'jungian', JSON.stringify(newJungianItemValues) );

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeJungianItem(): stored newJungianItemValues as the 'jungian' item" );
    // console.log( "Return()ing from storeJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  }

  return;
}
// getStoredJungianItem: returns the current 'jungian' item from local storage
//   If the item is not found, returns a construct containing initial values for all sub-items
function getStoredJungianItem(): JungianItemValues {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  // }

  const initialJungianItemValues: JungianItemValues = {
    imageString: ImageLib.defaultImageString,
    scoreValues: ImageLib.initialScoreValueArr,
    squareSize: ImageLib.initialSquareSize,
    gridSize: ImageLib.initialGridSize,
  }

  let jungianItem = initialJungianItemValues;
  const rawStoredJungianItem = localStorage.getItem( 'jungian' );

  if ( rawStoredJungianItem ) {
    jungianItem = JSON.parse( rawStoredJungianItem );
  }

  if ( ImageLib.logLogicFlow ) {
    if ( rawStoredJungianItem ) {
      console.log( "getStoredJungianItem(): found, parsed, and returning the stored 'jungian' item" );
    } else {
      console.log( "getStoredJungianItem(): return()ing initialJungianItemValues as jungianItem" );
    }
    // console.log( "Return()ing from getStoredJungianItem() in lib/jungian/LocalStorageLib.tsx" );
  }

  return jungianItem;
}

