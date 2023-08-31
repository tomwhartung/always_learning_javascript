//
// JungianLib.tsx: types and constants used by the Jungian quiz type
//

// Constant and Variable Values:
// -----------------------------
// In some cases, these include minimal get and set functions to support
// manipulation *in real time* of some of the values used to draw the images.
//
export const defaultImageString = "";

export const initialSquareSize = 15;        // Size of each square before user changes it
export const invalidSquareSize = 0;         // Used as "default" value for state variable
export const minSquareSize = 1;             // Minimum size of each square
export const maxSquareSize = 33;            // Maximum size of each square
export let squareSize = initialSquareSize;  // Changed by a slider on Refine page
export function setSquareSize( newSquareSize: number ) {
  squareSize = newSquareSize;
}

export const initialGridSize = 19;        // Default number of squares in each row and column
export const invalidGridSize = 0;         // Used as "default" value for state variable
export const minGridSize = 2;             // Minimum number of squares on each side
export const maxGridSize = 49;            // Maximum number of squares on each side
export let gridSize = initialGridSize;    // Changed by a slider on the Create page
export function setGridSize( newGridSize: number ) {
  gridSize = newGridSize;
}

export const gridTopX = 4;       // X location of top left corner of grid
export const gridTopY = 4;       // Y location of top left corner of grid

export function getCanvasWidth() {
  return ( squareSize * gridSize ) + ( 2 * gridTopX );
}
export function getCanvasHeight() {
  return ( squareSize * gridSize ) + ( 2 * gridTopY );
}

// logLogicFlow: enable turning logging to the console on and off
//   NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
//     Or so it seems like it does, sometimes...
// export let logLogicFlow = false;
export let logLogicFlow = true;
export function setLogLogicFlow( value: boolean ) {
  logLogicFlow = value;
}
export function getLogLogicFlow(): boolean {
  return logLogicFlow;
}
// setLogLogicFlow( true );


// Constant Arrays:
// ----------------
//
export const jungianScorePropNames: readonly string[] = [
  "Opacity",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
export const jungianScoreSliderLabels: readonly string[] = [
  "Opacity",
  "Y vs B",
  "R vs G",
  "G&R vs B&Y",
];
export const colorLetters: readonly string[] = [
  "B",   // "B"lue
  "G",   // "G"reen
  "R",   // "R"ed
  "Y"    // "Y"ellow
];
export const colorNames: readonly string[] = [
  "Blue",
  "Green",
  "Red",
  "Yellow"
];


// Types:
// ------
//
// JungianScoreSliderValues: values that come from the Jungian sliders
export interface JungianScoreSliderValues {
  opacityValue: number;           // [0 .. 100]
  blueVsYellowValue: number;      // [0 .. 100]
  greenVsRedValue: number;        // [0 .. 100]
  bAndYVsGandRValue: number;      // [0 .. 100]
}


// Functions:
// ----------
//
// valueToPct: convert a slider value [0 - 100] to a percentage of opacity [0.0 - 1.00]
export function valueToPct( value: number ) : number {
  const percent = value / 100;
  return ( percent );
}

// getRandomPrimaryColor: return a single character, "B", "G", "R", or "Y"
export function getRandomPrimaryColor( sliderValues: JungianScoreSliderValues ) {
  const blueVsYellowPercent = valueToPct( sliderValues.blueVsYellowValue );
  const greenVsRedPercent = valueToPct( sliderValues.greenVsRedValue );
  const bAndYVsGandRPercent = valueToPct( sliderValues.bAndYVsGandRValue );
  let randomFloat = Math.random();
  let randomColorLetter = colorLetters[4];  // default is INVALID!

  // console.log( "getRandomPrimaryColor: blueVsYellowPercent = " + blueVsYellowPercent );
  // console.log( "getRandomPrimaryColor: greenVsRedPercent = " + greenVsRedPercent );
  // console.log( "getRandomPrimaryColor: bAndYVsGandRPercent = " + bAndYVsGandRPercent );

  if ( randomFloat <= bAndYVsGandRPercent ) {
    randomFloat = Math.random();
    if ( randomFloat <= blueVsYellowPercent ) {
      randomColorLetter = colorLetters[0];
    } else {
      randomColorLetter = colorLetters[3];
    }
  } else {
    randomFloat = Math.random();
    if ( randomFloat <= greenVsRedPercent ) {
      randomColorLetter = colorLetters[1];
    } else {
      randomColorLetter = colorLetters[2];
    }
  }

  return randomColorLetter;
}

// drawNewImageString: Create a new totally random "groja-esque" grid of blue, green, red, and yellow squares
export function drawNewImageString( context: CanvasRenderingContext2D, storedSliderValues: JungianScoreSliderValues ) {
  let newImageString = defaultImageString;
  if ( logLogicFlow ) {
    console.log( "Top of drawNewImageString() in JungianLib.tsx" );
  }

  const width = getCanvasWidth();
  const height = getCanvasHeight();
  const opacityPercent = valueToPct( storedSliderValues.opacityValue );

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  const innerSquareWidth = getCanvasWidth() - ( 2 * gridTopX );
  const innerSquareHeight = getCanvasHeight() - ( 2 * gridTopY );
  // Paint the inner square, where the actual image will be, white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(gridTopY, gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let colorLetter = "B";
  const imageCharArray: string[] = [];

  // console.log( "draw() in Create.tsx: imageCharArray.length = " + imageCharArray.length );
  for ( let row=0; row < gridSize; row++ ) {
    squareTopY = gridTopY + (row * squareSize);
    for ( let col=0; col < gridSize; col++ ){
      // console.log( "draw() in Create.tsx: calling getRandomPrimaryColor = " + colorLetter );
      colorLetter = getRandomPrimaryColor( storedSliderValues );
      // console.log( "draw() in Create.tsx: colorLetter = " + colorLetter );
      squareTopX = gridTopX + (col * squareSize);
      if ( colorLetter == "B" ) {
        context.fillStyle = "rgba(0, 0, 255, " + opacityPercent.toString() + ")";
      } else if ( colorLetter == "G" ) {
        context.fillStyle = "rgba(0, 255, 0, " + opacityPercent.toString() + ")";
      } else if ( colorLetter == "R" ) {
        context.fillStyle = "rgba(255, 0, 0, " + opacityPercent.toString() + ")";
      } else if ( colorLetter == "Y" ) {
        context.fillStyle = "rgba(255, 255, 0, " + opacityPercent.toString() + ")";
      } else {
        context.fillStyle = "rgb(255, 255, 255, " + opacityPercent.toString() + ")";
      }
      context.fillRect( squareTopX, squareTopY, squareSize, squareSize );
      imageCharArray.push( colorLetter );
    }
  }

  newImageString = imageCharArray.join('');
  if ( logLogicFlow ) {
    console.log( "draw() in Create.tsx: finished drawing a Fresh Image" );
    console.log( "draw(): Fresh Image's imageCharArray.length = " + imageCharArray.length );
    console.log( "draw(): setting drawFreshImage = false and saving new image as storedImageString" );
  }

  if ( logLogicFlow ) {
    console.log( "Exiting drawNewImageString() in JungianLib.tsx and returning a newImageString" );
  }
  return newImageString;
}

// drawStoredImageString: Add a "groja-esque" grid of blue, green, red, and yellow squares
export function drawStoredImageString( context: CanvasRenderingContext2D, storedImageString: string, opacityValue: number ) {
  if ( logLogicFlow ) {
    console.log( "Top of drawStoredImageString() in JungianLib.tsx" );
  }

  const width = getCanvasWidth();
  const height = getCanvasHeight();

  let imageCharArray: string[] = [];

  // Paint it all black - this is how we get the border
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  const innerSquareWidth = getCanvasWidth() - ( 2 * gridTopX );
  const innerSquareHeight = getCanvasHeight() - ( 2 * gridTopY );
  // Paint the inner square, where the actual image will be, white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(gridTopY, gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let colorLetter = "B";
  const opacityPercent = valueToPct( opacityValue );

  if ( logLogicFlow ) {
    console.log( "drawStoredImageString() in JungianLib.tsx: storedImageString.length = '" + storedImageString.length + "'" );
  }

  if ( storedImageString.length > 0 ) {
    if ( logLogicFlow ) {
      console.log( "drawStoredImageString() in JungianLib.tsx: top of the for loop" );
    }
    imageCharArray = storedImageString.split( "" );
    let imgStrIdx = 0;
    for ( let row=0; row < gridSize; row++ ) {
      squareTopY = gridTopY + (row * squareSize);
      for ( let col=0; col < gridSize; col++ ){
        colorLetter = imageCharArray[imgStrIdx++];
        // console.log( "for loop in drawStoredImageString() in JungianLib.tsx: imgStrIdx = " + imgStrIdx );
        // console.log( "for loop in drawStoredImageString() in JungianLib.tsx: colorLetter = " + colorLetter );
        squareTopX = gridTopX + (col * squareSize);
        if ( colorLetter == "B" ) {
          context.fillStyle = "rgba(0, 0, 255, " + opacityPercent.toString() + ")";
        } else if ( colorLetter == "G" ) {
          context.fillStyle = "rgba(0, 255, 0, " + opacityPercent.toString() + ")";
        } else if ( colorLetter == "R" ) {
          context.fillStyle = "rgba(255, 0, 0, " + opacityPercent.toString() + ")";
        } else if ( colorLetter == "Y" ) {
          context.fillStyle = "rgba(255, 255, 0, " + opacityPercent.toString() + ")";
        } else {
          context.fillStyle = "rgb(255, 255, 255, " + opacityPercent.toString() + ")";
        }
        context.fillRect( squareTopX, squareTopY, squareSize, squareSize );
      }
    }
  } else if ( logLogicFlow ) {
    console.log( "drawStoredImageString() in JungianLib.tsx: storedImageString is empty, hope that's ok...!" );
  }
  if ( logLogicFlow ) {
    console.log( "Exiting drawStoredImageString() in JungianLib.tsx" );
  }
}

