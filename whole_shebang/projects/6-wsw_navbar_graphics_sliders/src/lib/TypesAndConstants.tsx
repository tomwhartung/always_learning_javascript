// 
// TypesAndConstants.tsx: types and constants used by all quiz types
//
interface SliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}

export const defaultSliderValue = 50;

