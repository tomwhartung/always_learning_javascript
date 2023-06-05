import './App.css'

// import { useState } from 'react'
import { MDBRange } from 'mdb-react-ui-kit';

// MySlider: function component interface to the MDBRange component
function MySlider() {
  return (
    <MDBRange
      defaultValue={50}
      id='customRange'
      label='My [Fix Me!!] MySlider Component'
    />
  );
}

// MyContainer: function component containing an MDB container
function MyContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <MySlider />
            <p>
              First MySlider in the first card.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <MySlider />
            <p>
              Second MySlider in the second card.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <MySlider />
            <p>
              Third MySlider in the third card.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <MySlider />
            <p>
              Fourth MySlider in the fourth card.
            </p>
          </div>
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
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Four <code>MySlider</code>s App</h1>
      <MyContainer />
    </>
  )
}

export default App
