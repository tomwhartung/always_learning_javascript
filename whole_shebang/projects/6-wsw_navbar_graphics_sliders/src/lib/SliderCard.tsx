//
// SliderCard.tsx: code for the SliderCard component
//

import { MDBRange } from 'mdb-react-ui-kit';
import * as SliderLib from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// JungianSlider: Jungian-specific wrapper for the MDBRange component
function JungianSlider( props: SliderLib.SliderProps ) {
  const sliderOppositeValue = 100 - props.sliderVal;
  const sliderId = "myslider-" + props.sliderNo.toString();
  let sliderLabel = sliderOppositeValue.toString() + "% " +
                    JungianLib.imageSliderLabels[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  if ( props.sliderNo == 0 ) {
    sliderLabel = JungianLib.imageSliderLabels[props.sliderNo] + ": " +
                  props.sliderVal.toString();
  }

  const initialSliderVal = ( 0 <= props.sliderVal && props.sliderVal <= 100 ) ? props.sliderVal : SliderLib.defaultSliderValue;

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

// SliderCard: MDB card wrapping a quiz-specific wrapper of the MDBRange component
function SliderCard( props:SliderLib.SliderProps ) {
  return (
    <div className="card">
      <JungianSlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}

export default SliderCard
