//
// JungianLocalStorageLib.tsx: code used to store and access Jungian data in localStorage
//
import * as JungianLib from '../lib/JungianLib.tsx';
import { defaultSliderValue } from './SliderLib.tsx';

// THIS SORT OF THING BREAKS STUFF ...
//const defaultSliderValues = [ defaultSliderValue, defaultSliderValue, defaultSliderValue, defaultSliderValue ];

//
// setSliderValues: sets the current SliderValues to the specified value
//   returns true if successful else false if the newImageString is too short
export function setSliderValues( newSliderValues: number[] ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setSliderValues() in JungianLocalStorageLib.tsx" );
  }

  let success = true;

  if ( newSliderValues.length > 3 ) {
    // localStorage.setItem( 'sliderValues', JSON.stringify(newSliderValues) );
    const jungianItems = getJungianItems();
    jungianItems.sliderValues = newSliderValues;
    setJungianItems( jungianItems );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSliderValues(): stored '" + newSliderValues + "' as sliderValues in the jungian item" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setSliderValues(): newSliderValues.length = " + newSliderValues.length );
      console.log( "setSliderValues(): NOT saving newSliderValues because it has too few values" );
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
  const jungianItems = getJungianItems();

  if ( jungianItems ) {
    sliderValues = jungianItems.sliderValues;
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSliderValues in JungianLocalStorageLib.tsx: found the jungianItems" );
      console.log( "getSliderValues: sliderValues.toString() = " + sliderValues.toString() );
    }
  } else {
    if ( JungianLib.logLogicFlow ) {
      console.log( "getSliderValues in JungianLocalStorageLib.tsx: jungianItems NOT FOUND in localStorage" );
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
    // localStorage.setItem( 'imageString', JSON.stringify(newImageString) );
    const jungianItems = getJungianItems();
    jungianItems.imageString = newImageString;
    setJungianItems( jungianItems );
    if ( JungianLib.logLogicFlow ) {
      console.log( "setImageString(): stored newImageString in the Jungian Items" );
    }
  } else {
    success = false;
    if ( JungianLib.logLogicFlow ) {
      console.log( "setImageString(): newImageString.length = " + newImageString.length + "' is imageString" );
      console.log( "setImageString(): NOT SAVING newImageString BECAUSE IT IS TOO SHORT" );
    }
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing '" + success + "' from setImageString() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getImageString: returns the current imageString from local storage
export function getImageString():string {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getImageString() in JungianLocalStorageLib.tsx" );
  }

  const jungianItems = getJungianItems( );
  const imageString = jungianItems.imageString;

  if ( JungianLib.logLogicFlow ) {
    // console.log( "Return()ing '" + imageString + "' from getImageString() in JungianLocalStorageLib.tsx" );
    console.log( "Return()ing from getImageString() in JungianLocalStorageLib.tsx" );
  }

  return imageString;
}

interface JungianItems {
  imageString: string;
//sliderValues: JungianLib.JungianSliderValues;
  sliderValues: number[];
}

const defaultJungianItems: JungianItems = {
  imageString: JungianLib.defaultImageString,
  sliderValues: [ defaultSliderValue ],
}

// setJungianItems: sets all of the values in the 'jungian' item in local storage
//   returns true if successful else false if the values cannot be saved
function setJungianItems( newJungianItems: JungianItems ): boolean {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of setJungianItems() in JungianLocalStorageLib.tsx" );
  }

  const success = true;
  localStorage.setItem( 'jungian', JSON.stringify(newJungianItems) );

  if ( JungianLib.logLogicFlow ) {
    console.log( "setJungianItems(): stored newJungianItems as imageString" );
    console.log( "Return()ing '" + success + "' from setJungianItems() in JungianLocalStorageLib.tsx" );
  }

  return success;
}

// getJungianItems: returns the current imageString from local storage
function getJungianItems(): JungianItems {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of getJungianItems() in JungianLocalStorageLib.tsx" );
  }

  let jungianItems = defaultJungianItems;
  const rawStoredJungianItems = localStorage.getItem( 'jungian' );

  if ( rawStoredJungianItems ) {
    jungianItems = JSON.parse( rawStoredJungianItems );
  }

  if ( JungianLib.logLogicFlow ) {
    // console.log( "Return()ing '" + jungianItems + "' from getJungianItems() in JungianLocalStorageLib.tsx" );
    console.log( "Return()ing from getJungianItems() in JungianLocalStorageLib.tsx" );
  }

  return jungianItems;
}

