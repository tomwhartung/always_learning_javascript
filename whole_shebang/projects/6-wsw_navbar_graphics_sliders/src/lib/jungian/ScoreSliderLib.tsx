// 
// lib/jungian/ScoreSliderLib.tsx: types and components used by the Jungian score sliders
// --------------------------------------------------------------------------------------
//
import { ChangeEvent } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import * as ImageLib from './ImageLib.ts';

// ScoreSliderPropsIFace: defines props passed to ScoreSliderCard and ScoreSlider components
interface ScoreSliderPropsIFace {
  sliderNo: number;
  onSliderChange: (event: ChangeEvent<Element>) => void;
  sliderVal: number;
}

// ScoreSliderCard: MDB card wrapping a quiz-specific wrapper of the MDBRange component
export function ScoreSliderCard( props: ScoreSliderPropsIFace ) {
  return (
    <div className="card">
      <ScoreSlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}

// ScoreSlider: Jungian Score-specific wrapper for the MDBRange component
function ScoreSlider( props: ScoreSliderProps ) {
  const sliderOppositeValue = 100 - props.sliderVal;
  const sliderId = "myslider-" + props.sliderNo.toString();
  let sliderLabel = sliderOppositeValue.toString() + "% " +
                    ImageLib.scoreValueLabels[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  if ( props.sliderNo == 0 ) {
    sliderLabel = ImageLib.scoreValueLabels[props.sliderNo] + ": " +
                  props.sliderVal.toString();
  }

  let scoreValueForTag = ImageLib.initialScoreValue;

  if ( ImageLib.minScoreValue <= props.sliderVal && props.sliderVal <= ImageLib.minScoreValue ) {
     scoreValueForTag = props.sliderVal;
  }

  return (
    <>
      <MDBRange
        className="pt-2 ps-2 pe-2"
        defaultValue={scoreValueForTag}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p className="ps-2">{sliderLabel}</p>
    </>
  );
}

export default ScoreSliderCard

