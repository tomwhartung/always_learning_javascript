//
// src/App.tsx: Main file for the 7d-lsup-array_of_objects project
// ---------------------------------------------------------------
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
interface SliderValue {
  slNo: number;
  slVal: number;
}

// Important constants
const defaultValue = 50;
const defaultSliderValue: SliderValue = {
  slNo: 0,
  slVal: defaultValue,
};
// const numberOfSliderCards = 2;      // Warning: Do not make this greater
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
  console.log( "props.sliderNo = " + props.sliderNo );
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

// MyContainer: function component containing an MDB container
function MyContainer() {
  // const [value, setValue] = useState(defaultValue)
  // const [value, setValue] = useState(Array(numberOfSliderCards).fill(defaultValue));
  const [value1, setValue1] = useState(defaultValue);
  const [value2, setValue2] = useState(defaultValue);
  const slNo1 = 0;
  const slNo2 = 1;

  const [sliderValues, setSliderValues] = useState<SliderValue[]>([]);
// const sliderObjectCols = [];

// Huh.  This causes a "Too many re-renders" error in the JS Console.  Hmmm-K.  Good to know!
// for ( let slNo = 0; slNo < numberOfSliderCards; slNo++ ) {
//   setValues(previousValues => [...previousValues, defaultValue]);
//   setSliderValues(previousSliderValues => [...previousSliderValues, defaultSliderValue]);
// }

//  const previousSliderValues = defaultSliderValue;
//  setSliderValues([...previousSliderValues, defaultSliderValue]);

  function handleChange1(evt:ChangeEvent) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log("Value of this slider is now " + val);
    setValue1(Number(val));
  }
  function handleChange2(evt:ChangeEvent) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log("Value of this slider is now " + val);
    setValue2(Number(val));
  }

  function handleChangeObject(evt:ChangeEvent, col:number) {
    const val = (evt.target as HTMLInputElement).value;
    // console.log("Value of this slider is now " + val);
    // setSliderValues(Number(val));
    const nextSliderValues = sliderValues.slice();
    nextSliderValues[col] = { slNo: col, slVal: Number(val) };
    setSliderValues(nextSliderValues);
  }

  // Construct markup for a set of columns containing MySliderCards
  // for ( let col = 0; col < numberOfSliderCards; col++ ) {
  //   sliderObjectCols.push(
  //     <div key={col} className="col-md-3">
  //       <MySliderCard
  //        sliderNo={col}
  //        sliderVal={sliderValues[col].value}
  //        onSliderChange={ () => handleChangeObject(col) }
  //       />
  //     </div>
  //   );
  // }

  // {sliderObjectCols}
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h3>Array of SliderValue Objects</h3>
        <div key={2} className="col-md-3">
          <MySliderCard
            sliderNo={Number(0)}
            sliderVal={sliderValues[0].slVal ?? defaultSliderValue.slVal}
            onSliderChange={ (evt) => handleChangeObject(evt,0) }
          />
        </div>
        <div className="col-md-3">
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <h3>Hard-coded List - Not an Array</h3>
        <div className="col-md-3">
          <MySliderCard
            sliderNo={slNo1}
            sliderVal={value1}
            onSliderChange={() => handleChange1}
          />
        </div>
        <div className="col-md-3">
          <MySliderCard
            sliderNo={slNo2}
            sliderVal={value2}
            onSliderChange={handleChange2}
          />
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-3">
          <div className="card">
            <p>Value of slider number {slNo1} = {value1}</p>
            <p>Nothing to see here.</p>
            <p>
             This is an example of a empty paragraph.
             LOL but I jest!
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p>Value of slider number {slNo2} = {value2}</p>
            <p></p>
            <p>LOL but I jest!</p>
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
