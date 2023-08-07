// 
// TypesAndConstants.tsx: types and constants used by all quiz types
//
interface MySliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}

// Important constants
const defaultSliderValue = 50;

