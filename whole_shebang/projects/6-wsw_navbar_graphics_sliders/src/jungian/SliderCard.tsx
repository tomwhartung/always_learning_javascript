//
// SliderCard.tsx: code for the SliderCard component
//

// import '../App.css'
// 
// import { ChangeEvent, useState } from 'react';
// 

import { MDBRange } from 'mdb-react-ui-kit';
import * as SliderLib from '../lib/SliderLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// 
// // ************************************************************************************************
// // globalProps: A TEMPORARY GLOBAL variable to be replaced by a Context whatever in a later Project
// // ************************************************************************************************
// const globalProps: JungianImagePercents = {
//   opacityPercent: valueToPct( SliderLib.defaultSliderValue ),
//   blueVsYellowPercent: valueToPct( SliderLib.defaultSliderValue ),
//   greenVsRedPercent: valueToPct( SliderLib.defaultSliderValue ),
//   bAndYVsGandRPercent: valueToPct( SliderLib.defaultSliderValue ),
// }
// 

// MySlider: function component interface to the MDBRange component
function MySlider( props:SliderLib.SliderProps ) {
  const sliderOppositeValue = 100 - props.sliderVal;
  const sliderId = "myslider-" + props.sliderNo.toString();
  let sliderLabel = sliderOppositeValue.toString() + "% " +
                    JungianLib.jungianImagePropNames[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  if ( props.sliderNo == 0 ) {
    sliderLabel = JungianLib.jungianImagePropNames[props.sliderNo] + ": " +
                  props.sliderVal.toString();
// } else {
//   const sliderLabel = sliderOppositeValue.toString() +
//                       JungianLib.jungianImagePropNames[props.sliderNo] + ": " +
//                       props.sliderVal.toString();
  }

  return (
    <>
      <MDBRange
        defaultValue={SliderLib.defaultSliderValue}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p>{sliderLabel}</p>
    </>
  );
}

// SliderCardySliderCard: function component interface to the MDBRange component
function SliderCard( props:SliderLib.SliderProps ) {
  return (
    <div className="card">
      <MySlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}

export default SliderCard
