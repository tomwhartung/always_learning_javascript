//
// JungianLocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//
import * as JungianLib from '../lib/JungianLib.tsx';

export const getImageString = ():string  => {
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
};

