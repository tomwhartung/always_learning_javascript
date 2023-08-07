//
// SliderCard.tsx: code for the SliderCard component
//

// import '../App.css'
// 
// import { ChangeEvent, useState } from 'react';
// 

import { MDBRange } from 'mdb-react-ui-kit';
import * as GlobalValues from '../lib/TypesAndConstants.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// 
// // ************************************************************************************************
// // globalProps: A TEMPORARY GLOBAL variable to be replaced by a Context whatever in a later Project
// // ************************************************************************************************
// const globalProps: JungianImagePercents = {
//   opacityPercent: valueToPct( GlobalValues.defaultSliderValue ),
//   blueVsYellowPercent: valueToPct( GlobalValues.defaultSliderValue ),
//   greenVsRedPercent: valueToPct( GlobalValues.defaultSliderValue ),
//   bAndYVsGandRPercent: valueToPct( GlobalValues.defaultSliderValue ),
// }
// 

// MySlider: function component interface to the MDBRange component
function MySlider( props:GlobalValues.SliderProps ) {
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
        defaultValue={GlobalValues.defaultSliderValue}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p>{sliderLabel}</p>
    </>
  );
}

// SliderCardySliderCard: function component interface to the MDBRange component
function SliderCard( props:GlobalValues.SliderProps ) {
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
