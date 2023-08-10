//
// AppSunSigns.tsx: basic app content for the first page of the Sun Signs quiz type
//
import './App.css'

import Canvas from './lib/CanvasLib.tsx';

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

// AppSunSigns: the "mainline" component for this quiz type
function AppSunSigns() {
  const width = canvasWidth;
  const height = canvasHeight;

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Click detected at (" + pixelX.toString() + ", " + pixelY.toString() + ")." );
  }

  return (
    <div id="app-sun-signs">
      <h2>Sun Signs: The Astrological signs</h2>
      <div className="col">
        <Canvas
          draw={draw}
          onClick={handleImageClick}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}

export default AppSunSigns
