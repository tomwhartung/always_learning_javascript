import './App.css'

import { ChangeEvent, useState } from 'react'
import { MDBRange } from 'mdb-react-ui-kit';

// enum Ordinals {
//  
// }
const fourOrdinals: readonly string[] = [
  "First",
  "Second",
  "Third",
  "Fourth"
];
interface MySliderCardProps {
  sliderNum: number;
}

// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderCardProps ) {
  const [value, setValue] = useState(0)
  const sliderLabel = fourOrdinals[props.sliderNum] + " MySlider Component";
  const sliderId = "myslider-" + Number(props.sliderNum);

  function handleChange(evt:ChangeEvent) {
    const val = (evt.target as HTMLInputElement).value;
    console.log("Value of " + sliderId + " is now " + val);
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
  // const ordinal : string = fourOrdinals[props.sliderNum];
  return (
    <div className="card">
      <MySlider sliderNum={props.sliderNum} />
      <p>
        MySlider-{props.sliderNum} in the ... card.
      </p>
    </div>
  )
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  const sliderCols = [];
  for ( let colNum = 1; colNum <= 4; colNum++ ) {
    console.log("colnum = " + colNum);
    sliderCols.push(
      <div className="col-md-3"><MySliderCard sliderNum={colNum} /></div>
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
