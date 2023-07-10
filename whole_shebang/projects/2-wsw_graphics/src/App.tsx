//
// src/App.tsx: Main file for the 4-canvas_with_sliders
// ----------------------------------------------------
//
import './App.css'

import Canvas from './Canvas.tsx';

const canvasWidth = 200;
const canvasHeight = 200;

// draw: Minimal draw function to ensure the Canvas works
const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Paint 4-8 colored squares inside the image
  context.fillStyle = "rgba(255, 0, 0, 100)";    // Red
  context.fillRect(0, 150, 50, 50);
  context.fillRect(0, 50, 50, 50);
  context.fillStyle = "rgba(0, 255, 0, 100)";    // Green
  context.fillRect(50, 100, 50, 50);
  context.fillRect(50, 0, 50, 50);
  context.fillStyle = "rgba(0, 0, 255, 100)";    // Blue
  context.fillRect(100, 50, 50, 50);
  context.fillRect(100, 150, 50, 50);
  context.fillStyle = "rgba(255, 255, 0, 100)";  // Yellow
  context.fillRect(150, 0, 50, 50);
  context.fillRect(150, 100, 50, 50);
};

// App: this App's "mainline" component
function App() {
  const width = canvasWidth;
  const height = canvasHeight;

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click detected at (" + pixelX.toString() + ", " + pixelY.toString() + ")." );
  }

  return (
    <>
      <h3>The Simplest Canvas Using React</h3>
      <Canvas
        draw={draw}
        onClick={handleImageClick}
        width={width}
        height={height}
      />
      <h3 className="mt-4">The Same Canvas, but in a Card</h3>
      <div className="card">
        <Canvas
          draw={draw}
          onClick={handleImageClick}
          width={width}
          height={height}
        />
      </div>
    </>
  )
}

export default App
