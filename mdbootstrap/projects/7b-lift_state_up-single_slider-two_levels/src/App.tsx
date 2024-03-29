//
// src/App.tsx: Main file for the 7b-lift_state_up-single_slider-two_levels
// ------------------------------------------------------------------------
//
import './App.css'

import { ChangeEvent, useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

// Important constants
const defaultValue = 50;
// const numberOfSliderCards = 4;      // Warning: Do not make this greater
//                                     // than or equal to the number of
//                                     // elements in ordinalsArray!
const ordinalsArray: readonly string[] = [
  // "Zeroeth",
  "Only",
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
];

// Important types
interface MySliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}
// interface MySliderCardProps {
//   sliderNo: number;
// }

// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderProps ) {
  const sliderLabel = ordinalsArray[props.sliderNo + 1] + " MySlider Component";
  const sliderId = "myslider-" + Number(props.sliderNo);

  return (
    <>
      <MDBRange
        defaultValue={defaultValue}
        id={sliderId}
        label={sliderLabel}
        onChange={props.onSliderChange}
      />
      <p>sliderValue = {props.sliderVal}</p>
    </>
  );
}

// MySliderCard: function component interface to the MDBRange component
function MySliderCard( props:MySliderProps ) {
  // const [value, setValue] = useState(defaultValue)
  const ordinal = ordinalsArray[props.sliderNo + 1];
  console.log( "props.sliderNo = " + props.sliderNo );
  const lcOrd = ordinal.toLowerCase();

// function handleChange(evt:ChangeEvent) {
//   const val = (evt.target as HTMLInputElement).value;
//   console.log("Value of this slider is now " + val);
//   setValue(Number(val));
// }

  return (
    <div className="card">
      <MySlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
      <p>
        Value of "myslider-{props.sliderNo}" in the {lcOrd} card is {props.sliderVal}.
      </p>
    </div>
  )
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  const [value, setValue] = useState(defaultValue)
  const slNo = 0;

  // function handleSliderChange(evt: ChangeEvent) {
  // function logSliderChange(slNo: number) {
  //   const val = (evt.target as HTMLInputElement).value;
  //   console.log("logSliderChange: slNo = " + slNo);
  //   setValue(Number(val));
  // }

  function handleChange(evt:ChangeEvent) {
    const val = (evt.target as HTMLInputElement).value;
    console.log("Value of this slider is now " + val);
    setValue(Number(val));
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div key={slNo} className="col-md-6">
          <MySliderCard
            sliderNo={slNo}
            sliderVal={value}
            onSliderChange={handleChange}
          />
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <p>Value of slider number {slNo} = {value}</p>
            <p>This is example 1 of how to center 8 column units</p>
            <p>
             This is an example of a paragraph with a lot of content.
             We want it to wrap around to a new line.
             Pardon the bs.
             Just adding filler.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
          <div className="card">
            <p>Value of slider number {slNo} = {value}</p>
            <p>This is example 2 of how to center 8 column units</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
          <div className="card">
            <p>Value of slider number {slNo} = {value}</p>
            <p>This is example 3 of how to center 8 cols between 2+2=4</p>
            <p>
             This is an example of a paragraph with a lot of content.
             We want it to wrap around to a new line.
             Pardon the bs.
             Just adding filler.
            </p>
          </div>
        </div>
        <div className="col-md-2">
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
          <div className="card">
            <p>Value of slider number {slNo} = {value}</p>
            <p>This is example 4 of how to center 8 cols between 2+2=4</p>
          </div>
        </div>
        <div className="col-md-2">
        </div>
      </div>
    </div>
  )
}

// App: this App's "mainline" component
function App() {
  return (
    <>
      <h1>My Four <code>MySlider</code>s App</h1>
      <MyContainer />
    </>
  )
}

export default App
