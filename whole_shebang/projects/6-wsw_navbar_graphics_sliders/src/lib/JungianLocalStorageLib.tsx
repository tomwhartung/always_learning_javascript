//
// JungianLocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//
import * as JungianLib from '../lib/JungianLib.tsx';
import {defaultSliderValue} from './SliderLib.tsx';

// setSliderValues: sets the current SliderValues to the specified value
//   returns true if successful else false if the newImageString is too short
export function setSliderValues( newSliderValues: number[] ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setSliderValues() in JungianLocalStorageLib.tsx" );
  }

  let success = true;

  if ( newSliderValues.length > 3 ) {
    localStorage.setItem( 'sliderValues', JSON.stringify(newSliderValues) );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSliderValues(): stored '" + newSliderValues + "' as imageString" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSliderValues(): newSliderValues.length = " + newSliderValues.length );
      console.log( "setSliderValues(): NOT saving newSliderValues because it has too few values" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from setSliderValues() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getSliderValues: returns the current sliderValues from local storage
export function getSliderValues(): number[] {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getSliderValues() in JungianLocalStorageLib.tsx" );
  }

//const defaultSliderValues = [ defaultSliderValue, defaultSliderValue, defaultSliderValue, defaultSliderValue ];
  let sliderValues = [ defaultSliderValue ];
  const rawStoredSliderValues = localStorage.getItem( 'sliderValues' );

  if ( rawStoredSliderValues ) {
    sliderValues = JSON.parse( rawStoredSliderValues );
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSliderValues in JungianLocalStorageLib.tsx: found the rawStoredSliderValues" );
      console.log( "getSliderValues: sliderValues.toString() = " + sliderValues.toString() );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSliderValues in JungianLocalStorageLib.tsx: sliderValues NOT FOUND in localStorage" );
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
    localStorage.setItem( 'imageString', JSON.stringify(newImageString) );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setImageString(): stored '" + newImageString + "' as imageString" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setImageString(): newImageString.length = " + newImageString.length + "' is imageString" );
      console.log( "setImageString(): NOT saving newImageString because it is TOO SHORT" );
    }
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

