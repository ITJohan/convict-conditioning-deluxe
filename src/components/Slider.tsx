import React from 'react';
import { Unit } from '../types';

export type SliderProps = {
  id: number;
  reps: number;
  maxReps: number;
  unit: Unit;
  updateSetReps: (reps: number, index: number) => void;
};

const Slider: React.FC<SliderProps> = ({
  id,
  reps,
  maxReps,
  unit,
  updateSetReps,
}): JSX.Element => {
  return (
    <div className='slider'>
      <label htmlFor={`set-${id}-slider`}>Set {id + 1}, {reps} {unit}</label>
      <input
        type="range"
        id={`set-${id}-slider`}
        name={`set-${id}-slider`}
        min="0"
        max={maxReps}
        value={reps}
        onChange={(e) => updateSetReps(Number.parseInt(e.target.value), id)}
      />
    </div>
  );
};

export default Slider;
