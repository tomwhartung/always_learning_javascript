import './App.css'

import { ChangeEvent, useState } from 'react'
import { MDBRange } from 'mdb-react-ui-kit';

interface MySliderCardProps {
  ordinal: string;
}

// MySlider: function component interface to the MDBRange component
function MySlider( props:MySliderCardProps ) {
  const [sliderValue, setSliderValue] = useState(0)
  const sliderLabel="The " + props.ordinal + " MySlider Component";
  const sliderId= props.ordinal.toLowerCase() + "MySlider";

  function handleChange(evt:ChangeEvent) {
    if ( evt != null ) {
      console.log("Value of " + sliderId + " is now " + evt.target.nodeValue);
    }
    console.log("Value is changing!");
  }
  return (
    <>
      <MDBRange
        defaultValue={50}
        id={sliderId}
        label={sliderLabel}
        onChange={handleChange}
      />
      <p>sliderValue = {sliderValue}</p>
    </>
  );
}

// MySliderCard: function component interface to the MDBRange component
function MySliderCard( props:MySliderCardProps ) {
  return (
    <div className="card">
      <MySlider ordinal={props.ordinal} />
      <p>
        {props.ordinal} MySlider in the {props.ordinal.toLowerCase()} card.
      </p>
    </div>
  )
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <MySliderCard ordinal="First" />
        </div>
        <div className="col-md-3">
          <MySliderCard ordinal="Second" />
        </div>
        <div className="col-md-3">
          <MySliderCard ordinal="Third" />
        </div>
        <div className="col-md-3">
          <MySliderCard ordinal="Fourth" />
        </div>
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
