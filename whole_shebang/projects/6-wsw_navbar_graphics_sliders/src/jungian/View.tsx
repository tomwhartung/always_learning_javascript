//
// View.tsx: code for the View option for the Jungian quiz type
//
import '../App.css'

import { useEffect } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import * as ImageLib from '../lib/jungian/ImageLib.tsx';
import * as LocalStorageLib from '../lib/jungian/LocalStorageLib.tsx';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// ImageLib.setLogLogicFlow( false );    // un-comment when everything's ok
ImageLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

let imageStringToDraw = "";
let opacityValue = ImageLib.initialScoreValue;

// draw: draw the grid of blue, green, red, and yellow squares defined in imageStringToDraw
const draw = (context: CanvasRenderingContext2D) => {
  ImageLib.drawStoredImageString( context, imageStringToDraw, opacityValue );
};

// DFlexImageAndSliderValues: function component to display a jungian image
function DFlexImageAndSliderValues( props: ImageLib.JungianScoreValues ) {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of DFlexImageAndSliderValues() in View.tsx" );
  }

  const width = ImageLib.getCanvasWidth();
  const height = ImageLib.getCanvasHeight();

  opacityValue = props.opacityValue;

  if ( ImageLib.logLogicFlow ) {
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
          {ImageLib.jungianScorePropNames[0]}: {props.opacityValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.jungianScorePropNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.jungianScorePropNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.jungianScorePropNames[3]}: {props.bAndYVsGandRValue}
        </div>
      </div>
      <div className="row d-flex mt-1">
        <div className="col-sm-12 card align-items-center">
          Grid Size: {ImageLib.gridSize} Squares per Side
        </div>
      </div>
    </>
  );
}

// DFlexContainer: function component containing a "d-flex" MDB container
function DFlexContainer() {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of DFlexContainer() in View.tsx" );
  }

  // First useEffect: set scoreValueObj, imageStringToDraw, and gridSize with values from local storage
  useEffect(() => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of First useEffect in View.tsx" );
    // }
    ImageLib.setScoreValueObj( LocalStorageLib.getStoredScoreValueArr() );
    imageStringToDraw = LocalStorageLib.getStoredImageString();
    ImageLib.setGridSize( LocalStorageLib.getStoredGridSize() );
    if ( ImageLib.logLogicFlow ) {
      // console.log( "First useEffect in View.tsx:\n" + ImageLib.scoreValueObj.toString() );
      console.log( "First useEffect in View.tsx: set the scoreValueObj, imageStringToDraw, and gridSize" );
      // console.log( "Exiting the only useEffect in View.tsx" );
    }
  }, []);

  let createOrRefineMessage = "";

  if ( imageStringToDraw.length === 0 ) {
    createOrRefineMessage = "Please use the Create option to Create an image before trying to View it.";
  } else {
    createOrRefineMessage = "You can now use the Refine option to refine your image.";
  }

  if ( ImageLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexContainer() in View.tsx" );
  }

  return (
    <div className="container">
      <div className="row mt-2 d-flex justify-content-center">
        <h5>{createOrRefineMessage}</h5>
        <DFlexImageAndSliderValues
          opacityValue={ImageLib.scoreValueObj.opacityValue ?? ImageLib.initialScoreValue}
          blueVsYellowValue={ImageLib.scoreValueObj.blueVsYellowValue ?? ImageLib.initialScoreValue}
          greenVsRedValue={ImageLib.scoreValueObj.greenVsRedValue ?? ImageLib.initialScoreValue}
          bAndYVsGandRValue={ImageLib.scoreValueObj.bAndYVsGandRValue ?? ImageLib.initialScoreValue} />
      </div>
    </div>
  )
}

// View: default "mainline" component for this menu option
function View() {
  if ( ImageLib.logLogicFlow ) {
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
