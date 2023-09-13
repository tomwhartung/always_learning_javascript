//
// lib/jungian/ImageLib.ts: identifiers used to draw Jungian quiz type images
// ==========================================================================

// logLogicFlow: enable turning logging to the console on and off
// --------------------------------------------------------------
//   NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
//     Or so it seems like it does, sometimes...
// export let logLogicFlow = false;
export let logLogicFlow = true;
export function setLogLogicFlow( value: boolean ): void {
  logLogicFlow = value;
}
// setLogLogicFlow( true );

// ScoreValueIFace: giving names to the values that come from the Jungian sliders
export interface ScoreValueIFace {
  opacityValue: number;           // [0 .. 100]
  blueVsYellowValue: number;      // [0 .. 100]
  greenVsRedValue: number;        // [0 .. 100]
  bAndYVsGandRValue: number;      // [0 .. 100]
}

// Image Parameters: These control how the App creates the image
// =============================================================
// -> See the README-React_notes.md file for specifics; following is an overview:
// The app stores each of these under the "jungian" item in local storage
// Use the set* functions to manipulate these values *in real time*
//   This works because of judicious use of state variables, event handlers, and useEffect() calls
// Use the initial values for initializing local storage
// Use the invalid values for initializing state variables
//
// *[Ss]coreValue* identifiers: values come from the four sliders on the Create page
// ---------------------------------------------------------------------------------
export const initialScoreValue = 50;        // Initial value of each slider before user changes it
export const initialScoreValueArr = [
  initialScoreValue,
  initialScoreValue,
  initialScoreValue,
  initialScoreValue
];
export const invalidScoreValue = -1;        // Used to create "default" value for state variable
export const invalidScoreValueArr = [     // Used as "default" value for state variable
  invalidScoreValue,
  invalidScoreValue,
  invalidScoreValue,
  invalidScoreValue
];
export const minScoreValue = 0;             // Minimum score value
export const maxScoreValue = 100;           // Maximum score value
export const ScoreValueObj = {
  opacityValue: initialScoreValue,
  blueVsYellowValue: initialScoreValue,
  greenVsRedValue: initialScoreValue,
  bAndYVsGandRValue: initialScoreValue,
  toString: function(): string {
    return(
      "ImageLib.ScoreValueObj.opacityValue = " + this.opacityValue + "\n" +
      "ImageLib.ScoreValueObj.blueVsYellowValue = " + this.blueVsYellowValue + "\n" +
      "ImageLib.ScoreValueObj.greenVsRedValue = " + this.greenVsRedValue + "\n" +
      "ImageLib.ScoreValueObj.bAndYVsGandRValue = " + this.bAndYVsGandRValue
    );
  },
}
export function setScoreValueObj( newScoreValueArr: number[] ): void {
  ScoreValueObj.opacityValue = newScoreValueArr[0];
  ScoreValueObj.blueVsYellowValue = newScoreValueArr[1];
  ScoreValueObj.greenVsRedValue = newScoreValueArr[2];
  ScoreValueObj.bAndYVsGandRValue = newScoreValueArr[3];
}

// *[Ii]mageStr identifiers contain a string of characters denoting the color of each square in the image
// ------------------------------------------------------------------------------------------------------
//   The characters go from left to right and from top to bottom
//   - The first letter is the color of the upper-left square
//   - The last letter is the color of the lower-right square
// The score values on the Create page determine the original strings
// Clicking on the image on the Refine page allows for fine-tuning the image one character at a time
export const initialImageStr = "";
export const invalidImageStr = "";
export let imageStr = invalidImageStr;
export function setImageStr( newImageStr: string ): void {
  imageStr = newImageStr;
}

// *[Ss]quareSize identifiers contain the number of pixels per square
// ------------------------------------------------------------------
// Set this value using a slider on the Create and Refine pages
// -> This value is irrelevant on the View page, because the image appears in a "d-flex" card
//    that automatically adjusts its size to the window in which it appears
export const initialSquareSize = 15;        // Size of each square before user changes it
export const invalidSquareSize = 0;         // Used as "default" value for state variable
export const minSquareSize = 1;             // Minimum size of each square
export const maxSquareSize = 33;            // Maximum size of each square
export let squareSize = initialSquareSize;  // Changed by a slider on Refine page
export function setSquareSize( newSquareSize: number ): void {
  squareSize = newSquareSize;
}

// *[Gg]ridSize identifiers contain the number of squares per side
// ---------------------------------------------------------------
// Set this value using a slider on the Create page
export const initialGridSize = 19;        // Default number of squares in each row and column
export const invalidGridSize = 0;         // Used as "default" value for state variable
export const minGridSize = 2;             // Minimum number of squares on each side
export const maxGridSize = 49;            // Maximum number of squares on each side
export let gridSize = initialGridSize;    // Changed by a slider on the Create page
export function setGridSize( newGridSize: number ): void {
  gridSize = newGridSize;
}


// Constant Arrays:
// ================
//
export const scoreValueNames: readonly string[] = [
  "Opacity",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
export const scoreValueLabels: readonly string[] = [
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


// Derived Values:
// ===============
//
// gridTopX and gridTopY in effect define the width of the image's border
//   IT WOULD BE NICE if the size of the border would increase gradually with the size of the image
// =-> NOT SURE WHY THIS DOESN'T WORK, and not wanting to worry about it right now:
// export const gridTopX = Math.round( (squareSize * gridSize) / 50 );    // X location of top left corner
// export const gridTopY = Math.round( (squareSize * gridSize) / 50 );    // Y location of top left corner
export const gridTopX = 4;       // X location of top left corner of grid
export const gridTopY = 4;       // Y location of top left corner of grid

export function getCanvasWidth(): number {
  return ( squareSize * gridSize ) + ( 2 * gridTopX );
}
export function getCanvasHeight(): number {
  return ( squareSize * gridSize ) + ( 2 * gridTopY );
}


// Functions:
// ==========
//
// createFreshImageStr: Create a new random "groja-esque" grid of blue, green, red, and yellow squares
//   Starts with an empty imageCharArr and adds color letters one-by-one
//   Returns the imageCharArr as a string
export function createFreshImageStr(): string {
  if ( logLogicFlow ) {
    console.log( "Top of createFreshImageStr() in ImageLib.ts" );
  }

  let colorLetter = "B";
  const imageCharArr: string[] = [];

  for ( let row=0; row < gridSize; row++ ) {
    for ( let col=0; col < gridSize; col++ ){
      colorLetter = getRandomPrimaryColor();
      imageCharArr.push( colorLetter );
    }
    // if ( logLogicFlow ) {
    //   console.log( "createFreshImageStr() in ImageLib.ts: imageCharArr.length = " + imageCharArr.length );
    // }
  }

  const freshImageStr = imageCharArr.join('');

  if ( logLogicFlow ) {
    console.log( "createFreshImageStr(): Fresh Image's freshImageStr.length = " + freshImageStr.length );
    console.log( "createFreshImageStr() in ImageLib.ts: Return()ing the freshImageStr" );
  }
  return freshImageStr;
}

// drawImageStr: Draw a "groja-esque" grid of blue, green, red, and yellow squares
//   Splits imageStr into an imageCharArr, and draws the squares one-by-one
export function drawImageStr( context: CanvasRenderingContext2D ): void {
  if ( logLogicFlow ) {
    console.log( "Top of drawImageStr() in ImageLib.ts" );
  }

  drawUnderlyingCanvas( context );

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let colorLetter = "B";
  const opacityPercent = valueToPct( ScoreValueObj.opacityValue );

  if ( logLogicFlow ) {
    console.log( "drawImageStr() in ImageLib.ts: imageStr.length = '" + imageStr.length + "'" );
  }

  if ( imageStr.length > 0 ) {
    const imageCharArr = imageStr.split( "" );
    let imgStrIdx = 0;
    if ( logLogicFlow ) {
      console.log( "drawImageStr() in ImageLib.ts: starting the for loop" );
    }
    for ( let row=0; row < gridSize; row++ ) {
      squareTopY = gridTopY + (row * squareSize);
      for ( let col=0; col < gridSize; col++ ){
        colorLetter = imageCharArr[imgStrIdx++];
        // console.log( "for loop in drawImageStr() in ImageLib.ts: imgStrIdx = " + imgStrIdx );
        // console.log( "for loop in drawImageStr() in ImageLib.ts: colorLetter = " + colorLetter );
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
  } else {
    if ( logLogicFlow ) {
      console.log( "drawImageStr() in ImageLib.ts: imageStr is empty, hope that's ok...!" );
    }
  }
  if ( logLogicFlow ) {
    console.log( "Exiting drawImageStr() in ImageLib.ts" );
  }
}


// "Private" Functions:
// ====================
// These functions are *not* exported so are available for internal use *only*
//
// valueToPct: convert a slider value [0 - 100] to a percentage of opacity [0.0 - 1.00]
function valueToPct( value: number ): number {
  const percent = value / 100;
  return ( percent );
}

// getRandomPrimaryColor: return a random single character, either "B", "G", "R", or "Y"
function getRandomPrimaryColor(): string {
  // if ( logLogicFlow ) {
  //   console.log( "getRandomPrimaryColor() in ImageLib.ts: Top of getRandomPrimaryColor" );
  // }
  const blueVsYellowPercent = valueToPct( ScoreValueObj.blueVsYellowValue );
  const greenVsRedPercent = valueToPct( ScoreValueObj.greenVsRedValue );
  const bAndYVsGandRPercent = valueToPct( ScoreValueObj.bAndYVsGandRValue );

  let randomFloat = Math.random();
  let randomColorLetter = colorLetters[4];  // default is INVALID!

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

  // if ( logLogicFlow ) {
  //   console.log( "getRandomPrimaryColor(): Return()ing randomColorLetter = " + randomColorLetter );
  // }
  return randomColorLetter;
}

// drawUnderlyingCanvas: paints the entire canvas black then fills the inner portion of it with white
function drawUnderlyingCanvas( context: CanvasRenderingContext2D ): void {
  const width = getCanvasWidth();
  const height = getCanvasHeight();

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  const innerSquareWidth = getCanvasWidth() - ( 2 * gridTopX );
  const innerSquareHeight = getCanvasHeight() - ( 2 * gridTopY );

  // Paint the inner square, where the actual image will be, white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(gridTopY, gridTopY, innerSquareWidth, innerSquareHeight);
}

