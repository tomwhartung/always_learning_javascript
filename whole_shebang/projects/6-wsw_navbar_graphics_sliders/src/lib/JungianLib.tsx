//
// JungianLib.tsx: types and constants used by the Jungian quiz type
//

// Constant and Variable Values:
// -----------------------------
//
// export const defaultSquareSize = 15;        // Default size of each square
// export const defaultGridSize = 19;          // Default number of squares in each row and column
// export let squareSize = defaultSquareSize;  // Changed by a slider on Refine page
// export let gridSize = defaultGridSize;      // Changed by a slider on Create page

export const squareSize = 15;    // TODO: Allow this to be changed by a slider on the Refine page
export const gridSize = 19;      // TODO: Allow this to be changed by a slider on the Create page

export const gridTopX = 4;       // X location of top left corner of grid
export const gridTopY = 4;       // Y location of top left corner of grid

export const canvasWidth = ( squareSize * gridSize ) + ( 2 * gridTopX );
export const canvasHeight = ( squareSize * gridSize ) + ( 2 * gridTopY );

export const defaultImageString = "";

// logLogicFlow: enable turning logging to the console on and off
//   NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
export let logLogicFlow = false;
export function setLogLogicFlow( value: boolean ) {
  logLogicFlow = value;
}
export function getLogLogicFlow(): boolean {
  return logLogicFlow;
}
setLogLogicFlow( true );

// Constant Arrays:
// ----------------
//
export const numberOfSliderCards = 4;  // Warning: Do not make this greater
                                       // than or equal to the number of
                                       // elements in imageSliderLabels
                                       // and imagePropNames
export const imagePropNames: readonly string[] = [
  "Opacity",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
export const imageSliderLabels: readonly string[] = [
  "Opacity",
  "Y vs B",
  "R vs G",
  "G&R vs B&Y",
];
export const colorLetters: readonly string[] = [
  "B",   // Blue
  "G",   // Green
  "R",   // Red
  "Y",   // Yellow
  "X",   // Invalid!
];
export const colorNames: readonly string[] = [
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Invalid"
];


// Types:
// ------
//
// JungianSliderValues: values that come from the Jungian sliders
export interface JungianSliderValues {
  opacityValue: number;           // [0 .. 100]
  blueVsYellowValue: number;      // [0 .. 100]
  greenVsRedValue: number;        // [0 .. 100]
  bAndYVsGandRValue: number;      // [0 .. 100]
}

// JungianImagePercents: slider values as percentages, used to create the image
export interface JungianImagePercents {
  opacityPercent: number;           // [0.0 .. 1.0]
  blueVsYellowPercent: number;      // [0.0 .. 1.0]
  greenVsRedPercent: number;        // [0.0 .. 1.0]
  bAndYVsGandRPercent: number;      // [0.0 .. 1.0]
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
export function getRandomPrimaryColor( sliderValues: JungianSliderValues ) {
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
export function drawNewImageString( context: CanvasRenderingContext2D, storedSliderValues: JungianSliderValues ) {
  let newImageString = defaultImageString;
  if ( logLogicFlow ) {
    console.log( "Top of drawNewImageString() in JungianLib.tsx" );
  }

  const width = canvasWidth;
  const height = canvasHeight;
  const innerSquareWidth = canvasWidth - ( 2 * gridTopX );
  const innerSquareHeight = canvasHeight - ( 2 * gridTopY );
  const opacityPercent = valueToPct( storedSliderValues.opacityValue );

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

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

  const width = canvasWidth;
  const height = canvasHeight;
  const innerSquareWidth = canvasWidth - ( 2 * gridTopX );
  const innerSquareHeight = canvasHeight - ( 2 * gridTopY );
  let imageCharArray: string[] = [];

  // Paint it all black - this is how we get the border
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

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

