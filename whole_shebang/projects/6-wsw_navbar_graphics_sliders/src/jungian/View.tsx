//
// View.tsx: code for the View option for the Jungian quiz type
//
import '../App.css'
import { useEffect, useState } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';
import * as LocalStorageLib from '../lib/JungianLocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// JungianLib.setLogLogicFlow( false );    // un-comment when everything's ok
JungianLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

let imageStringToDraw = "";
let opacityValue = JungianLib.initialScoreValue;

// draw: draw the grid of blue, green, red, and yellow squares defined in imageStringToDraw
const draw = (context: CanvasRenderingContext2D) => {
  JungianLib.drawStoredImageString( context, imageStringToDraw, opacityValue );
};

// DFlexImageAndSliderValues: function component to display a jungian image
function DFlexImageAndSliderValues( props:JungianLib.JungianScoreValues ) {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of DFlexImageAndSliderValues() in View.tsx" );
  }

  const width = JungianLib.getCanvasWidth();
  const height = JungianLib.getCanvasHeight();

  opacityValue = props.opacityValue;

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexImageAndSliderValues() in View.tsx" );
  }

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card jungian-canvas">
            <Canvas
              draw={draw}
              width={width}
              height={height}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[0]}: {props.opacityValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {JungianLib.jungianScorePropNames[3]}: {props.bAndYVsGandRValue}
        </div>
      </div>
      <div className="row d-flex mt-1">
        <div className="col-sm-12 card align-items-center">
          Grid Size: {JungianLib.gridSize} Squares per Side
        </div>
      </div>
    </>
  );
}

// DFlexContainer: function component containing a "d-flex" MDB container
function DFlexContainer() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of DFlexContainer() in View.tsx" );
  }

  const [currentScoreValues, setCurrentScoreValues] = useState([JungianLib.invalidScoreValue]);

  useEffect(() => {
    if ( JungianLib.logLogicFlow ) {
      console.log( "Top of useEffect in DFlexContainer() in View.tsx" );
    }
    setCurrentScoreValues( LocalStorageLib.getStoredScoreValues() );
    imageStringToDraw = LocalStorageLib.getStoredImageString();
    JungianLib.setGridSize( LocalStorageLib.getStoredGridSize() );
    if ( JungianLib.logLogicFlow ) {
      // console.log( "useEffect in DFlexContainer: currentScoreValues[0] = " + currentScoreValues[0] );
      // console.log( "useEffect in DFlexContainer: currentScoreValues[1] = " + currentScoreValues[1] );
      // console.log( "useEffect in DFlexContainer: currentScoreValues[2] = " + currentScoreValues[2] );
      // console.log( "useEffect in DFlexContainer: currentScoreValues[3] = " + currentScoreValues[3] );
      console.log( "Exiting useEffect in DFlexContainer() in View.tsx" );
    }
  }, []);

  let createOrRefineMessage = "";

  if ( imageStringToDraw.length === 0 ) {
    createOrRefineMessage = "Please use the Create option to Create an image before trying to View it.";
  } else {
    createOrRefineMessage = "You can now use the Refine option to refine your image.";
  }

  if ( JungianLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexContainer() in View.tsx" );
  }

  return (
    <div className="container">
      <div className="row mt-2 d-flex justify-content-center">
        <h5>{createOrRefineMessage}</h5>
        <DFlexImageAndSliderValues
          opacityValue={currentScoreValues[0] ?? JungianLib.initialScoreValue}
          blueVsYellowValue={currentScoreValues[1] ?? JungianLib.initialScoreValue}
          greenVsRedValue={currentScoreValues[2] ?? JungianLib.initialScoreValue}
          bAndYVsGandRValue={currentScoreValues[3] ?? JungianLib.initialScoreValue} />
      </div>
    </div>
  )
}

// View: default "mainline" component for this menu option
function View() {
  if ( JungianLib.logLogicFlow ) {
    console.log( "Top of View() in View.tsx: return()ing from View()" );
  }

  return (
    <div id="view">
      <h2>View</h2>
      <DFlexContainer />
    </div>
  )
}

export default View
