//
// JungianLocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//
import * as JungianLib from '../lib/JungianLib.tsx';

// setImageString: sets the current imageString to the specified value
//   returns true if successful else false if the newImageString is too short
export function setImageString( newImageString: string ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setImageString() in JungianLocalStorageLib.tsx" );
  }

  let success = true;

  if ( newImageString.length > JungianLib.gridSize ) {
    console.log( "setImageString(): storing '" + newImageString + "' as imageString" );
    localStorage.setItem( 'imageString', JSON.stringify(newImageString) );
  } else {
    console.log( "setImageString(): newImageString.length = " + newImageString.length + "' is imageString" );
    console.log( "setImageString(): NOT saving newImageString because it is TOO SHORT" );
    success = false;
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from setImageString() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getImageString: returns the current imageString from local storage
export function getImageString():string {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getImageString() in JungianLocalStorageLib.tsx" );
  }

  const rawStoredImageString = localStorage.getItem( 'imageString' );
  let imageString = JungianLib.defaultImageString;

  if ( rawStoredImageString && rawStoredImageString.length > 0 ) {
    imageString = JSON.parse( rawStoredImageString );
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + imageString + "' from getImageString() in JungianLocalStorageLib.tsx" );
  }

  return imageString;
}

