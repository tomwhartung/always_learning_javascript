// 
// lib/jungian/SquareSizeSliderLib.tsx: types and components used by the Jungian square size slider
//
import { ChangeEvent } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import * as JungianLib from '../JungianLib.tsx';

// SquareSizeSliderProps: props passed to SquareSizeSlider
export interface SquareSizeSliderProps {
  squareSizeLabel: string;
  onSquareSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// SquareSizeSlider: MDB card wrapping a quiz-specific wrapper of the MDBRange component
export function SquareSizeSlider( props: SquareSizeSliderProps ) {
  return (
    <MDBRange
      defaultValue={JungianLib.squareSize}
      min={JungianLib.minSquareSize}
      max={JungianLib.maxSquareSize}
      id='square-size'
      label={props.squareSizeLabel}
      onChange={props.onSquareSizeChange}
    />
  )
}

export default SquareSizeSlider

