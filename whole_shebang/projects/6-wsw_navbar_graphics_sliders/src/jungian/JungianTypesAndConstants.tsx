// 
// JungianTypesAndConstants.tsx: types and constants used by the Jungian quiz type
//
// JungianImageProps: values that come from the sliders
interface JungianImageProps {
  opacityValue: number;           // [0 .. 100]
  blueVsYellowValue: number;      // [0 .. 100]
  greenVsRedValue: number;        // [0 .. 100]
  bAndYVsGandRValue: number;      // [0 .. 100]
}
// JungianImagePercents: slider values as percentages, used to create the image
interface JungianImagePercents {
  opacityPercent: number;           // [0.0 .. 1.0]
  blueVsYellowPercent: number;      // [0.0 .. 1.0]
  greenVsRedPercent: number;        // [0.0 .. 1.0]
  bAndYVsGandRPercent: number;      // [0.0 .. 1.0]
}

// Important constants
const numberOfSliderCards = 4;      // Warning: Do not make this greater
                                    // than or equal to the number of
                                    // elements in jungianImagePropNames
                                    // and jungianImagePropLabels
const jungianImagePropLabels: readonly string[] = [
  "Opacity",
  "B vs Y",
  "G vs R",
  "B&Y vs G&R",
];
const jungianImagePropNames: readonly string[] = [
  "Opacity",
  "Y vs B",
  "R vs G",
  "G&R vs B&Y",
];
const colorLetters = [
  "B",   // Blue
  "G",   // Green
  "R",   // Red
  "Y",   // Yellow
  "X",   // Invalid!
];
const gridTopX = 10;      // X location of top left corner of grid
const gridTopY = 10;      // Y location of top left corner of grid

