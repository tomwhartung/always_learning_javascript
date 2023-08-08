// 
// JungianLib.tsx: types and constants used by the Jungian quiz type
//

// -----------------
// TEMPORARY GLOBAL:
// -----------------
import { defaultSliderValue } from './SliderLib.tsx'
// ***************************************************************************************************************
// globalProps: A TEMPORARY GLOBAL variable to be replaced by a Context or local db or whatever in a later Project
// ***************************************************************************************************************
export const globalProps: JungianImagePercents = {
  opacityPercent: valueToPct( defaultSliderValue ),
  blueVsYellowPercent: valueToPct( defaultSliderValue ),
  greenVsRedPercent: valueToPct( defaultSliderValue ),
  bAndYVsGandRPercent: valueToPct( defaultSliderValue ),
}


// Types:
// ------
// JungianImageProps: values that come from the Jungian sliders
export interface JungianImageProps {
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

// Constants
export const numberOfSliderCards = 4;  // Warning: Do not make this greater
                                       // than or equal to the number of
                                       // elements in jungianImagePropNames
                                       // and jungianImagePropLabels
export const jungianImagePropLabels: readonly string[] = [
  "Opacity",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
export const jungianImagePropNames: readonly string[] = [
  "Opacity",
  "Y vs B",
  "R vs G",
  "G&R vs B&Y",
];
export const colorLetters = [
  "B",   // Blue
  "G",   // Green
  "R",   // Red
  "Y",   // Yellow
  "X",   // Invalid!
];

export const gridTopX = 10;      // X location of top left corner of grid
export const gridTopY = 10;      // Y location of top left corner of grid

// Functions:
// ----------
// valueToPct: convert a slider value [0 - 100] to a percentage of opacity [0.0 - 1.00]
export function valueToPct( value: number ) : number {
  const percent = value / 100;
  return ( percent );
}

// getRandomPrimaryColor: return a single character, "B", "G", "R", or "Y"
export function getRandomPrimaryColor() {
  const blueVsYellowPercent = globalProps.blueVsYellowPercent;
  const greenVsRedPercent = globalProps.greenVsRedPercent;
  const bAndYVsGandRPercent = globalProps.bAndYVsGandRPercent;
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

  return randomColorLetter;
}

