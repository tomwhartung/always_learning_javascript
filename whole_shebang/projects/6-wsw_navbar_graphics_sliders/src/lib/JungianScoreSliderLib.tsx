// 
// SliderLib.tsx: types and constants used by quiz types that use sliders
//
import { ChangeEvent } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import * as JungianLib from '../lib/JungianLib.tsx';

export const defaultSliderValue = 50;

// JungianScoreSliderProps: props passed to JungianScoreSliderCard and JungianScoreSlider components
export interface JungianScoreSliderProps {
  sliderNo: number;
  onSliderChange: (event: ChangeEvent<Element>) => void;
  sliderVal: number;
}

// JungianScoreSliderCard: MDB card wrapping a quiz-specific wrapper of the MDBRange component
export function JungianScoreSliderCard( props: JungianScoreSliderProps ) {
  return (
    <div className="card">
      <JungianScoreSlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}

// JungianScoreSlider: Jungian Score-specific wrapper for the MDBRange component
function JungianScoreSlider( props: JungianScoreSliderProps ) {
  const sliderOppositeValue = 100 - props.sliderVal;
  const sliderId = "myslider-" + props.sliderNo.toString();
  let sliderLabel = sliderOppositeValue.toString() + "% " +
                    JungianLib.jungianScoreSliderLabels[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  if ( props.sliderNo == 0 ) {
    sliderLabel = JungianLib.jungianScoreSliderLabels[props.sliderNo] + ": " +
                  props.sliderVal.toString();
  }

  const initialSliderVal = ( 0 <= props.sliderVal && props.sliderVal <= 100 ) ? props.sliderVal : defaultSliderValue;

  return (
    <>
      <MDBRange
        className="pt-2 ps-2 pe-2"
        defaultValue={initialSliderVal}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p className="ps-2">{sliderLabel}</p>
    </>
  );
}

