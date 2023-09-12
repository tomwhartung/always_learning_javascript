//
// View.tsx: code for the View option for the Jungian quiz type
//
import '../App.css'

import { useEffect, useState } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import * as ImageLib from '../lib/jungian/ImageLib.ts';
import * as LocalStorageLib from '../lib/jungian/LocalStorageLib.ts';

// NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
// ImageLib.setLogLogicFlow( false );    // un-comment when everything's ok
ImageLib.setLogLogicFlow( true );     // un-comment when trying to track down issues


// draw: draw the grid of blue, green, red, and yellow squares defined in ImageLib.imageStr
const draw = (context: CanvasRenderingContext2D) => {
  ImageLib.drawImageStr( context );
};

// DFlexImageAndSliderValues: function component to display a jungian image
function DFlexImageAndSliderValues( props:ImageLib.ScoreValueIFace ) {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of DFlexImageAndSliderValues() in View.tsx" );
  }

  const width = ImageLib.getCanvasWidth();
  const height = ImageLib.getCanvasHeight();

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
          {ImageLib.scoreValueNames[0]}: {props.opacityValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[1]}: {props.blueVsYellowValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[2]}: {props.greenVsRedValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[3]}: {props.bAndYVsGandRValue}
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

  // Deleting this state variable apparently causes a bug, such that when accessing this page
  // immediately after reloading the site it displays initial values for the slider values and
  // grid size even though it has loaded the correct values from local storage.
  // It looks to me like the DFlexImageAndSliderValues component does not re-render with the
  // correct values unless it has props dependent on this state variable.  This would explain
  // why we do not need a state variable or a prop for DFlexImageAndSliderValues to display
  // the correct value from ImageLib after reloading the site.
  const [currentScoreValueArr, setCurrentScoreValueArr] = useState( ImageLib.invalidScoreValueArr );

  // First useEffect:
  //   set ImageLib.ScoreValueObj, ImageLib.imageStr, and ImageLib.gridSize with values from local storage
  useEffect(() => {
    if ( ImageLib.logLogicFlow ) {
      console.log( "Top of First useEffect in View.tsx" );
    }
    const storedScoreValueArr = LocalStorageLib.getStoredScoreValueArr();
    setCurrentScoreValueArr( storedScoreValueArr );
    ImageLib.setScoreValueObj( storedScoreValueArr );
    ImageLib.setGridSize( LocalStorageLib.getStoredGridSize() );
    ImageLib.setImageStr( LocalStorageLib.getStoredImageStr() );
    if ( ImageLib.logLogicFlow ) {
      console.log( "First useEffect in View.tsx:\n" + ImageLib.ScoreValueObj.toString() );
      console.log( "First useEffect: ImageLib.gridSize = " + ImageLib.gridSize );
      console.log( "First useEffect: set ScoreValueObj, gridSize, and imageStr" );
      console.log( "Exiting the only useEffect in View.tsx" );
    }
  }, []);

  let createOrRefineMsg = "";

  if ( ImageLib.imageStr === ImageLib.initialImageStr ||
       ImageLib.imageStr === ImageLib.invalidImageStr   ) {
    createOrRefineMsg = "Please use the Create option to Create an image before trying to View it.";
  } else {
    createOrRefineMsg = "You can now use the Refine option to refine your image.";
  }

  if ( ImageLib.logLogicFlow ) {
    console.log( "Return()ing from DFlexContainer() in View.tsx" );
  }

  return (
    <div className="container">
      <div className="row mt-2 d-flex justify-content-center">
        <h5>{createOrRefineMsg}</h5>
        <DFlexImageAndSliderValues
          opacityValue={currentScoreValueArr[0] ?? ImageLib.initialScoreValue}
          blueVsYellowValue={currentScoreValueArr[1] ?? ImageLib.initialScoreValue}
          greenVsRedValue={currentScoreValueArr[2] ?? ImageLib.initialScoreValue}
          bAndYVsGandRValue={currentScoreValueArr[3] ?? ImageLib.initialScoreValue}
        />
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
