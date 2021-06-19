import React, { useRef, useEffect } from 'react';

export type GraphProps = {

};

const Graph: React.FC<GraphProps> = ({  }): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
  }, []);

  return <canvas ref={canvasRef} width={200} height={100} />;
};

export default Graph;
