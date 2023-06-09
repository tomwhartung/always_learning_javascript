import './App.css'

import { ChangeEvent, useState } from 'react'
import { MDBRange } from 'mdb-react-ui-kit';

// Important constants
const numberOfSliderCards = 4;   // Warning: Do not make this greater than or equal to the number of elements in ordinalsArray!
const ordinalsArray: readonly string[] = [
  "Zeroeth",
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth"
];
interface MySliderCardProps {
  sliderNo: number;
}

// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderCardProps ) {
  const [value, setValue] = useState(0)
  const sliderLabel = ordinalsArray[props.sliderNo + 1] + " MySlider Component";
  const sliderId = "myslider-" + Number(props.sliderNo);

  function handleChange(evt:ChangeEvent) {
    const val = (evt.target as HTMLInputElement).value;
    // console.log("Value of " + sliderId + " is now " + val);
    setValue(Number(val));
  }
  return (
    <>
      <MDBRange
        defaultValue={50}
        id={sliderId}
        label={sliderLabel}
        onChange={handleChange}
      />
      <p>sliderValue = {value}</p>
    </>
  );
}

// MySliderCard: function component interface to the MDBRange component
function MySliderCard( props:MySliderCardProps ) {
  const ordinal = ordinalsArray[props.sliderNo + 1];
  // console.log( "props.sliderNo = " + props.sliderNo );
  const lcOrd = ordinal.toLowerCase();

  return (
    <div className="card">
      <MySlider sliderNo={props.sliderNo} />
      <p>
        "myslider-{props.sliderNo}" in the {lcOrd} card.
      </p>
    </div>
  )
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  const sliderCols = [];
  for ( let col = 0; col < numberOfSliderCards; col++ ) {
    sliderCols.push(
      <div key={col} className="col-md-3"><MySliderCard sliderNo={col} /></div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        {sliderCols}
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <p>TODO: Summarize the results here</p>
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
            <p>TODO: Summarize the results here</p>
            <p>This is example 2 of how to center 8 column units</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
          <div className="card">
            <p>TODO: Summarize the results here</p>
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
            <p>TODO: Summarize the results here</p>
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
