import { useState } from 'react'
import './App.css'

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

// App: this App's "mainline" component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Four <code>MySlider</code>s App</h1>
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
      </div>
    </>
  )
}

export default App
