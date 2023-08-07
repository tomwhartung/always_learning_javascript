//
// SliderCard.tsx: code for the SliderCard component
//

// import '../App.css'
// 
// import { ChangeEvent, useState } from 'react';
// 

import { MDBRange } from 'mdb-react-ui-kit';
import {defaultSliderValue} from '../lib/TypesAndConstants.tsx';
import * as JungianValues from './JungianTypesAndConstants.tsx';

// 
// // ************************************************************************************************
// // globalProps: A TEMPORARY GLOBAL variable to be replaced by a Context whatever in a later Project
// // ************************************************************************************************
// const globalProps: JungianImagePercents = {
//   opacityPercent: valueToPct( defaultSliderValue ),
//   blueVsYellowPercent: valueToPct( defaultSliderValue ),
//   greenVsRedPercent: valueToPct( defaultSliderValue ),
//   bAndYVsGandRPercent: valueToPct( defaultSliderValue ),
// }
// 

// MySlider: function component interface to the MDBRange component
function MySlider( props:SliderProps ) {
  const sliderOppositeValue = 100 - props.sliderVal;
  const sliderId = "myslider-" + props.sliderNo.toString();
  let sliderLabel = sliderOppositeValue.toString() + "% " +
                    JungianValues.jungianImagePropNames[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  if ( props.sliderNo == 0 ) {
    sliderLabel = JungianValues.jungianImagePropNames[props.sliderNo] + ": " +
                  props.sliderVal.toString();
// } else {
//   const sliderLabel = sliderOppositeValue.toString() +
//                       JungianValues.jungianImagePropNames[props.sliderNo] + ": " +
//                       props.sliderVal.toString();
  }

  return (
    <>
      <MDBRange
        defaultValue={defaultSliderValue}
        id={sliderId}
        label=""
        onChange={props.onSliderChange}
      />
      <p>{sliderLabel}</p>
    </>
  );
}

// SliderCardySliderCard: function component interface to the MDBRange component
function SliderCard( props:SliderProps ) {
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
