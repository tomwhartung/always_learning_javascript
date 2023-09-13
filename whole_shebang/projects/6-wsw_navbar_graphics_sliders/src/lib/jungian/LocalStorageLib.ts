//
// lib/jungian/LocalStorageLib.ts: code used to store and access Jungian data in localStorage
// ==========================================================================================

import * as ImageLib from './ImageLib.ts';

//
// storeScoreValueArr: if the specified values are valid, stores them in local storage as scoreValueArr
// ----------------------------------------------------------------------------------------------------
// returns true if successful else false if any of the values in the array is invalid
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
    console.log( "storeScoreValueArr(): newScoreValueArr = " + newScoreValueArr.toString() );
    if ( allValuesOk ) {
      console.log( "storeScoreValueArr(): stored newScoreValueArr in the 'jungian' item ok" );
    } else {
      console.log( "storeScoreValueArr(): NOT STORING newScoreValueArr because it has an invalid value" );
    }
    // console.log( "storeScoreValueArr: returning " + allValuesOk );
  }

  return allValuesOk;
}
// getStoredScoreValueArr: returns the scoreValueArr from local storage
// --------------------------------------------------------------------
export function getStoredScoreValueArr(): number[] {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredScoreValueArr() in lib/jungian/LocalStorageLib.ts" );
  // }

  let scoreValueArr = ImageLib.initialScoreValueArr;
  const jungianItem = getStoredJungianItem();

  if ( jungianItem ) {
    scoreValueArr = jungianItem.scoreValueArr;
  }

  if ( ImageLib.logLogicFlow ) {
    if ( jungianItem ) {
      console.log( "getStoredScoreValueArr: found the 'jungian' item in local storage" );
    } else {
      console.log( "getStoredScoreValueArr: 'jungian' ITEM NOT FOUND in local storage" );
    }
    console.log( "getStoredScoreValueArr: returning scoreValueArr = " + scoreValueArr.toString() );
  }

  return scoreValueArr;
}


// storeImageStr: if the specified value is valid, stores it in local storage as imageStr
// --------------------------------------------------------------------------------------
// returns true if successful else false if the newImageStr is too short
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
      console.log( "storeImageStr(): NOT STORING newImageStr because it is too short" );
    }
    // console.log( "storeImageStr: returning '" + success );
  }

  return success;
}
// getStoredImageStr: returns the imageStr from local storage
// ----------------------------------------------------------
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
      console.log( "getStoredImageStr: found the 'jungian' item in local storage" );
    } else {
      console.log( "getStoredImageStr: 'jungian' ITEM NOT FOUND IN localStorage" );
    }
    console.log( "getStoredImageStr: returning imageStr, length = " + imageStr.length );
  }

  return imageStr;
}


// storeSquareSize: if the specified value is valid, stores it in local storage as squareSize
// ------------------------------------------------------------------------------------------
// returns true if successful else false if the newSquareSize is invalid
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
    console.log( "storeSquareSize(): newSquareSize = " + newSquareSize );
    if ( success ) {
      console.log( "storeSquareSize(): stored newSquareSize in the 'jungian' item ok" );
    } else {
      console.log( "storeSquareSize(): NOT STORING newSquareSize because it is invalid" );
    }
    // console.log( "storeSquareSize: returning '" + success );
  }

  return success;
}
// getStoredSquareSize: returns the squareSize from local storage
// --------------------------------------------------------------
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
      console.log( "getStoredSquareSize: found the 'jungian' item in local storage" );
    } else {
      console.log( "getStoredSquareSize: 'jungian' ITEM NOT FOUND IN localStorage" );
    }
    console.log( "getStoredSquareSize: returning squareSize = " + squareSize );
  }

  return squareSize;
}


// storeGridSize: if the specified value is valid, stores it in local storage as gridSize
// --------------------------------------------------------------------------------------
// returns true if successful else false if the newGridSize is invalid
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
    console.log( "storeGridSize(): newGridSize = " + newGridSize );
    if ( success ) {
      console.log( "storeGridSize(): stored newGridSize in the 'jungian' item ok" );
    } else {
      console.log( "storeGridSize(): NOT STORING newGridSize because it is invalid" );
    }
    // console.log( "storeGridSize: returning '" + success );
  }

  return success;
}
// getStoredGridSize: returns the gridSize from local storage
// ----------------------------------------------------------
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
      console.log( "getStoredGridSize: found the 'jungian' item in local storage" );
    } else {
      console.log( "getStoredGridSize: 'jungian' ITEM NOT FOUND IN localStorage" );
    }
    console.log( "getStoredGridSize: returning gridSize = " + gridSize );
  }

  return gridSize;
}

// "Private" identifiers used internally by this module *only*
// ===========================================================

// Interface defining the values saved in local storage
interface JungianItemValues {
  imageStr: string;
  scoreValueArr: number[];
  squareSize: number;
  gridSize: number;
}

// Initial values saved in local storage
const initialJungianItemValues: JungianItemValues = {
  imageStr: ImageLib.initialImageStr,
  scoreValueArr: ImageLib.initialScoreValueArr,
  squareSize: ImageLib.initialSquareSize,
  gridSize: ImageLib.initialGridSize,
}

// storeJungianItem: sets all of the values in the 'jungian' item in local storage
// -------------------------------------------------------------------------------
// It is up to the functions setting the individual values to ensure the new value is valid
function storeJungianItem( newJungianItemValues: JungianItemValues ): void {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of storeJungianItem() in lib/jungian/LocalStorageLib.ts" );
  // }

  localStorage.setItem( 'jungian', JSON.stringify(newJungianItemValues) );

  if ( ImageLib.logLogicFlow ) {
    console.log( "storeJungianItem(): stored newJungianItemValues as the 'jungian' item" );
    // console.log( "Returning from storeJungianItem() in lib/jungian/LocalStorageLib.ts" );
  }

  return;
}
// getStoredJungianItem: returns the 'jungian' item from local storage
// -------------------------------------------------------------------
// If the item is not found, returns initial values for all parameters
function getStoredJungianItem(): JungianItemValues {
  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "Top of getStoredJungianItem() in lib/jungian/LocalStorageLib.ts" );
  // }

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

