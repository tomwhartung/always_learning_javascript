//
// src/Canvas.tsx: defines a generic Canvas component
// --------------------------------------------------
//
import React from 'react';

interface CanvasProps {
  draw:  (context: CanvasRenderingContext2D) => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  width: number;
  height: number;
}

const Canvas = ( { draw, onClick, width, height }: CanvasProps ) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect( () => {
    if ( canvasRef.current ) {
      const context = ( canvasRef.current.getContext('2d') as CanvasRenderingContext2D );
      draw( context );
    }
  } );

  return (
    <canvas
      ref={canvasRef}
      onClick={onClick}
      width={width}
      height={height}
    >
      <p>Oh no!  Your browser does not support basic graphics commands!!</p>
      <p>Oh non ! Votre navigateur ne prend pas en charge les commandes graphiques de base !!</p>
      <p>¡Oh, no! ¡Su navegador no admite comandos básicos de gráficos!</p>
      <p>Ach nein! Ihr Browser unterstützt keine grundlegenden Grafikbefehle!!</p>
    </canvas>
  )
};

export default Canvas;
