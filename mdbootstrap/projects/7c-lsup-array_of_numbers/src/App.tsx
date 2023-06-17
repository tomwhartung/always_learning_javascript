//
// src/App.tsx: Main file for the 7b-lift_state_up-single_slider-two_levels
// ------------------------------------------------------------------------
//
import './App.css'

import { ChangeEvent, useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

// Important types
interface MySliderProps {
  sliderNo: number;
  onSliderChange: (evt: ChangeEvent<Element>) => void;
  sliderVal: number;
}
interface MySliderResultProps {
  slNo: number;
  slVal: number;
}

// Important constants
const defaultValue = 50;
const numberOfSliderCards = 4;      // Warning: Do not make this greater
                                    // than or equal to the number of
                                    // elements in ordinalsArray!
const ordinalsArray: readonly string[] = [
  "Zeroeth",
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
  "Eleventh",
  "Twelfth",
  "Thirteenth",
  "Fourteenth",
];

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
  const ordinal = ordinalsArray[props.sliderNo + 1];
// console.log( "props.sliderNo = " + props.sliderNo );
  const lcOrd = ordinal.toLowerCase();

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
// MySliderResultsCard: function component to display the slider values
function MySliderResultsCard( props:MySliderResultProps ) {
  return (
    <>
      <div className="card">
        <p>Value of slider number {props.slNo} = {props.slVal}</p>
      </div>
    </>
  );
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  const [value1, setValue1] = useState(defaultValue);
  const [value2, setValue2] = useState(defaultValue);
  const slNo1 = numberOfSliderCards + 0;
  const slNo2 = numberOfSliderCards + 1;

// const [values, setValues] = useState<number[]>([]);
  const [values, setValues] = useState([defaultValue]);

// Huh.  This causes a "Too many re-renders" error in the JS Console.  Hmmm-K.  Good to know!
// for ( let slNo = 0; slNo < numberOfSliderCards; slNo++ ) {
//   setValues(previousValues => [...previousValues, defaultValue]);
// }

  function handleChangeSingleValues( evt:ChangeEvent, slNo:number ) {
    const val = (evt.target as HTMLInputElement).value;
    console.log("Value of single slider slNo = " + slNo + " is now " + val);
    if ( slNo == slNo1 ) {
      setValue1(Number(val));
    } else
    if ( slNo == slNo2 ) {
      setValue2(Number(val));
    }
  }

  function handleChangeNumber(evt:ChangeEvent, col:number) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log("Value of this slider is now " + val);
    const nextValues = values.slice();
    nextValues[col] = Number(val);
    setValues(nextValues);
  }

  // Construct markup for a series of MySliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <MySliderCard
         sliderNo={col}
         sliderVal={values[col]}
         onSliderChange={ (evt) => handleChangeNumber(evt,col) }
        />
      </div>
    );
  }
  // Construct markup for a series of MySliderResultsCards
  const sliderResultCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderResultCols.push(
      <div key={col} className="col-md-3">
        <MySliderResultsCard
         slNo={col}
         slVal={values[col]}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h3>Array of Numbers - `for` Loop Version</h3>
        {sliderNumberCols}
      </div>
      <div className="row d-flex justify-content-center">
        <h3>Array of Numbers - `ResultCol`s</h3>
        {sliderResultCols}
      </div>
      <div className="row d-flex justify-content-center">
        <h3>Hard-coded List - Not an Array</h3>
        <div className="col-md-3">
          <MySliderCard
            sliderNo={slNo1}
            sliderVal={value1}
            onSliderChange={ (evt) => handleChangeSingleValues(evt,slNo1) }
          />
        </div>
        <div className="col-md-3">
          <MySliderCard
            sliderNo={slNo2}
            sliderVal={value2}
            onSliderChange={ (evt) => handleChangeSingleValues(evt,slNo2) }
          />
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-3">
          <div className="card">
            <p>Value of slider number {slNo1} = {value1}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p>Value of slider number {slNo2} = {value2}</p>
          </div>
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
