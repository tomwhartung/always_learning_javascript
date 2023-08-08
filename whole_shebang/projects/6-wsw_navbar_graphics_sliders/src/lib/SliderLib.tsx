// 
// SliderLib.tsx: types and constants used by quiz types that use sliders
//
import { ChangeEvent } from 'react';

export interface SliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}

export const defaultSliderValue = 50;

