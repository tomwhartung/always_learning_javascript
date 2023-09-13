// 
// lib/jungian/SquareSizeSliderLib.tsx: types and components used by the Jungian square size slider
// ------------------------------------------------------------------------------------------------
//
import { ChangeEvent } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import * as ImageLib from './ImageLib.ts';

// SquareSizeSliderPropsIFace: props passed to SquareSizeSlider
interface SquareSizeSliderPropsIFace {
  squareSizeLabel: string;
  onSquareSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// SquareSizeSlider: MDB card wrapping a quiz-specific wrapper of the MDBRange component
export function SquareSizeSlider( props: SquareSizeSliderPropsIFace ) {
  return (
    <MDBRange
      defaultValue={ImageLib.squareSize}
      min={ImageLib.minSquareSize}
      max={ImageLib.maxSquareSize}
      id='square-size'
      label={props.squareSizeLabel}
      onChange={props.onSquareSizeChange}
    />
  )
}

export default SquareSizeSlider

