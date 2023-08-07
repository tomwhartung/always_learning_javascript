// 
// TypesAndConstants.tsx: types and constants used by all quiz types
//
import { ChangeEvent } from 'react';

export interface SliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}

export const defaultSliderValue = 50;

