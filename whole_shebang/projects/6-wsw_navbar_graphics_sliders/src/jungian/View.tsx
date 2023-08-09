//
// View.tsx: code for the View option
//
import '../App.css'
import { ChangeEvent, useState } from 'react';

import Canvas from '../lib/CanvasLib.tsx';
import {defaultSliderValue} from '../lib/SliderLib.tsx';
import SliderCard from './SliderCard.tsx';
import * as JungianLib from '../lib/JungianLib.tsx';

// draw: Add a "groja-esque" grid of blue, green, red, and yellow squares
const draw = (context: CanvasRenderingContext2D) => {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;
  const innerSquareWidth = JungianLib.canvasWidth - ( 2 * JungianLib.gridTopX );
  const innerSquareHeight = JungianLib.canvasHeight - ( 2 * JungianLib.gridTopY );

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Paint the inner square white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(JungianLib.gridTopY, JungianLib.gridTopY, innerSquareWidth, innerSquareHeight);

  let squareTopX = JungianLib.gridTopX;
  let squareTopY = JungianLib.gridTopY;
  let randomColorLetter = "B";
  const opacityPercent = JungianLib.globalProps.opacityPercent;
// console.log( "draw: JungianLib.globalProps.opacityPercent = " + JungianLib.globalProps.opacityPercent.toString() );
// console.log( "draw: opacityPercent = " + opacityPercent.toString() );

  for ( let row=0; row < JungianLib.gridSize; row++ ) {
    squareTopY = JungianLib.gridTopY + (row * JungianLib.squareSize);
    for ( let col=0; col < JungianLib.gridSize; col++ ){
      randomColorLetter = JungianLib.getRandomPrimaryColor();
    // console.log( "randomColorLetter = " + randomColorLetter );
      squareTopX = JungianLib.gridTopX + (col * JungianLib.squareSize);
      if ( randomColorLetter == "B" ) {
        context.fillStyle = "rgba(0, 0, 255, " + opacityPercent.toString() + ")";
      } else if ( randomColorLetter == "G" ) {
        context.fillStyle = "rgba(0, 255, 0, " + opacityPercent.toString() + ")";
      } else if ( randomColorLetter == "R" ) {
        context.fillStyle = "rgba(255, 0, 0, " + opacityPercent.toString() + ")";
      } else if ( randomColorLetter == "Y" ) {
        context.fillStyle = "rgba(255, 255, 0, " + opacityPercent.toString() + ")";
      } else {
        context.fillStyle = "rgb(255, 255, 255, " + opacityPercent.toString() + ")";
      }
      context.fillRect( squareTopX, squareTopY, JungianLib.squareSize, JungianLib.squareSize );
    }
  }
};

// DFlexImageCards: function component to display a jungian image
function DFlexImageCards( props:JungianLib.JungianImageProps ) {
  const width = JungianLib.canvasWidth;
  const height = JungianLib.canvasHeight;

  // **TEMPORARILY** Save the raw slider values as percentages in a **GLOBAL OBJECT**
  JungianLib.globalProps.opacityPercent = JungianLib.valueToPct( props.opacityValue );
  JungianLib.globalProps.blueVsYellowPercent = JungianLib.valueToPct( props.blueVsYellowValue );
  JungianLib.globalProps.greenVsRedPercent = JungianLib.valueToPct( props.greenVsRedValue );
  JungianLib.globalProps.bAndYVsGandRPercent = JungianLib.valueToPct( props.bAndYVsGandRValue );

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click on resizable image at (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
  }

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-4 align-items-center">
          <div className="card jungian-canvas">
            <p>{JungianLib.jungianImagePropLabels[0]}: {props.opacityValue}</p>
            <p>{JungianLib.jungianImagePropLabels[1]}: {props.blueVsYellowValue}</p>
            <p>{JungianLib.jungianImagePropLabels[2]}: {props.greenVsRedValue}</p>
            <p>{JungianLib.jungianImagePropLabels[3]}: {props.bAndYVsGandRValue}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card jungian-canvas">
            <Canvas
              draw={draw}
              onClick={handleImageClick}
              width={width}
              height={height} />
          </div>
        </div>
      </div>
    </>
  );
}

// DFlexContainer: function component containing a "d-flex" MDB container
function DFlexContainer() {
  const [values, setValues] = useState([defaultSliderValue]);

  function handleChangeArrayOfNumbers( evt:ChangeEvent, col:number ) {
    const val = (evt.target as HTMLInputElement).value;
  // console.log( "Value of slider in column " + col.toString() + " is now " + val.toString() );
    const nextValues = values.slice();
    nextValues[col] = Number(val);
    setValues(nextValues);
  }

  // Construct markup for a set of columns containing SliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < JungianLib.numberOfSliderCards; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <SliderCard
         sliderNo={col}
         sliderVal={values[col] ?? defaultSliderValue}
         onSliderChange={ (evt) => handleChangeArrayOfNumbers(evt,col) }
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h4>DFlexContainer:</h4>
      <div className="row mt-4 d-flex justify-content-center">
        {sliderNumberCols}
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <DFlexImageCards
          opacityValue={values[0] ?? defaultSliderValue}
          blueVsYellowValue={values[1] ?? defaultSliderValue}
          greenVsRedValue={values[2] ?? defaultSliderValue}
          bAndYVsGandRValue={values[3] ?? defaultSliderValue} />
      </div>
    </div>
  )
}

// View: default "mainline" component for this menu option
function View() {
  return (
    <div id="view">
      <h2>View</h2>
      <DFlexContainer />
    </div>
  )
}

export default View
