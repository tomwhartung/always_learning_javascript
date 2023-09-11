//
// lib/jungian/LocalStorageLib.ts: code used to store and access Jungian data in localStorage
//

import * as ImageLib from './ImageLib.ts';

//
// storeScoreValueArr: sets the array of scoreValueArr in local storage to the specified values
//   returns true if successful else false if any of the values in the array is invalid
export function storeScoreValueArr( newScoreValueArr: number[] ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeScoreValueArr() in lib/jungian/LocalStorageLib.ts" );
  // }

  let allValuesOk = true;

  for ( let valIdx = 0; valIdx < newScoreValueArr.length; ++valIdx ) {
    if ( newScoreValueArr[valIdx] < ImageLib.minScoreValue ||
         ImageLib.maxScoreValue < newScoreValueArr[valIdx]   ) {
      allValuesOk = false;
      break;
    }
  }

  if ( allValuesOk ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.scoreValueArr = newScoreValueArr;
    storeJungianItem( jungianItem );
  }

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeScoreValueArr(): newScoreValueArr.toString() = " + newScoreValueArr.toString() );
    if ( allValuesOk ) {
      console.log( "storeScoreValueArr(): stored newScoreValueArr ok" );
    } else {
      console.log( "storeScoreValueArr(): NOT STORING newScoreValueArr BECAUSE IT HAS AN INVALID VALUE" );
    }
    // console.log( "Return()ing " + allValuesOk + " from storeScoreValueArr() in lib/jungian/LocalStorageLib.ts" );
  }

  return allValuesOk;
}
// getStoredScoreValueArr: returns an array of the current scoreValueArr from local storage
export function getStoredScoreValueArr(): number[] {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of getStoredScoreValueArr() in lib/jungian/LocalStorageLib.ts" );
  }

  let scoreValueArr = ImageLib.initialScoreValueArr;
  const jungianItem = getStoredJungianItem();

  if ( jungianItem ) {
    scoreValueArr = jungianItem.scoreValueArr;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredScoreValueArr in lib/jungian/LocalStorageLib.ts: found the 'jungian' item" );
      console.log( "getStoredScoreValueArr: found scoreValueArr.toString() = " + scoreValueArr.toString() );
    } else {
      console.log( "getStoredScoreValueArr in lib/jungian/LocalStorageLib.ts: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredScoreValueArr: returning ImageLib.initialScoreValueArr" );
    }
    console.log( "Return()ing '" + scoreValueArr.toString() + "' from getStoredScoreValueArr() in lib/jungian/LocalStorageLib.ts" );
  }

  return scoreValueArr;
}


// storeImageStr: sets the current imageStr to the specified value
//   returns true if successful else false if the newImageStr is too short
export function storeImageStr( newImageStr: string ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeImageStr() in lib/jungian/LocalStorageLib.ts" );
  // }

  let success = true;

  if ( newImageStr.length > ImageLib.gridSize ) {
    const jungianItem = getStoredJungianItem();
    jungianItem.imageStr = newImageStr;
    storeJungianItem( jungianItem );
  } else {
    success = false;
  }

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeImageStr(): newImageStr.length = " + newImageStr.length );
    if ( success ) {
      console.log( "storeImageStr(): stored newImageStr in the 'jungian' item ok" );
    } else {
      console.log( "storeImageStr(): NOT STORING newImageStr BECAUSE IT IS TOO SHORT" );
    }
    // console.log( "Return()ing '" + success + "' from storeImageStr() in lib/jungian/LocalStorageLib.ts" );
  }

  return success;
}
// getStoredImageStr: returns the current imageStr from local storage
export function getStoredImageStr(): string {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredImageStr() in lib/jungian/LocalStorageLib.ts" );
  // }

  let imageStr = ImageLib.invalidImageStr;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    imageStr = jungianItem.imageStr;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredImageStr in lib/jungian/LocalStorageLib.ts: found the 'jungian' item" );
      console.log( "getStoredImageStr: found imageStr.length = " + imageStr.length );
    } else {
      console.log( "getStoredImageStr in lib/jungian/LocalStorageLib.ts: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredImageStr: returning invalidImageStr, length = " + imageStr.length );
    }
    // console.log( "getStoredImageStr: return()ing imageStr.length = " + imageStr.length );
  }

  return imageStr;
}


// storeSquareSize: sets the current squareSize to the specified value
//   returns true if successful else false if the newSquareSize is invalid
export function storeSquareSize( newSquareSize: number ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeSquareSize() in lib/jungian/LocalStorageLib.ts" );
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
    // console.log( "Return()ing '" + success + "' from storeSquareSize() in lib/jungian/LocalStorageLib.ts" );
  }

  return success;
}
// getStoredSquareSize: returns the current squareSize from local storage
export function getStoredSquareSize(): number {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredSquareSize() in lib/jungian/LocalStorageLib.ts" );
  // }

  let squareSize = ImageLib.initialSquareSize;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    squareSize = jungianItem.squareSize;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredSquareSize in lib/jungian/LocalStorageLib.ts: found the 'jungian' item" );
      console.log( "getStoredSquareSize: found squareSize = " + squareSize );
    } else {
      console.log( "getStoredSquareSize in lib/jungian/LocalStorageLib.ts: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredSquareSize: returning initialSquareSize = " + ImageLib.initialSquareSize );
    }
    // console.log( "Return()ing '" + squareSize + "' from getStoredSquareSize() in lib/jungian/LocalStorageLib.ts" );
  }

  return squareSize;
}


// storeGridSize: sets the current gridSize to the specified value
//   returns true if successful else false if the newGridSize is invalid
export function storeGridSize( newGridSize: number ): boolean {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeGridSize() in lib/jungian/LocalStorageLib.ts" );
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
    // console.log( "Return()ing '" + success + "' from storeGridSize() in lib/jungian/LocalStorageLib.ts" );
  }

  return success;
}
// getStoredGridSize: returns the current gridSize from local storage
export function getStoredGridSize(): number {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredGridSize() in lib/jungian/LocalStorageLib.ts" );
  // }

  let gridSize = ImageLib.initialGridSize;
  const jungianItem = getStoredJungianItem( );

  if ( jungianItem ) {
    gridSize = jungianItem.gridSize;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      // console.log( "getStoredGridSize in lib/jungian/LocalStorageLib.ts: found the 'jungian' item" );
      console.log( "getStoredGridSize: found gridSize = " + gridSize );
    } else {
      console.log( "getStoredGridSize in lib/jungian/LocalStorageLib.ts: 'jungian' ITEM NOT FOUND IN localStorage" );
      console.log( "getStoredGridSize: returning initialGridSize" );
    }
    // console.log( "Return()ing '" + gridSize + "' from getStoredGridSize() in lib/jungian/LocalStorageLib.ts" );
  }

  return gridSize;
}


interface JungianItemValues {
  imageStr: string;
  scoreValueArr: number[];
  squareSize: number;
  gridSize: number;
}

// storeJungianItem: sets all of the values in the 'jungian' item in local storage
function storeJungianItem( newJungianItemValues: JungianItemValues ) {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeJungianItem() in lib/jungian/LocalStorageLib.ts" );
  // }

  localStorage.setItem( 'jungian', JSON.stringify(newJungianItemValues) );

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeJungianItem(): stored newJungianItemValues as the 'jungian' item" );
    // console.log( "Return()ing from storeJungianItem() in lib/jungian/LocalStorageLib.ts" );
  }

  return;
}
// getStoredJungianItem: returns the current 'jungian' item from local storage
//   If the item is not found, returns a construct containing initial values for all sub-items
function getStoredJungianItem(): JungianItemValues {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredJungianItem() in lib/jungian/LocalStorageLib.ts" );
  // }

  const initialJungianItemValues: JungianItemValues = {
    imageStr: ImageLib.initialImageStr,
    scoreValueArr: ImageLib.initialScoreValueArr,
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
    // console.log( "Return()ing from getStoredJungianItem() in lib/jungian/LocalStorageLib.ts" );
  }

  return jungianItem;
}

