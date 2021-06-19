import React, { useRef, useEffect } from 'react';

export type GraphProps = {
  setReps: number[];
};

const Graph: React.FC<GraphProps> = ({ setReps }): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.moveTo(setReps[1] * 10, setReps[2] * 10);
    context.lineTo(setReps[0] * 10, setReps[1] * 10);
    context.stroke();
  }, [setReps]);

  return <canvas ref={canvasRef} width={200} height={100} />;
};

export default Graph;
