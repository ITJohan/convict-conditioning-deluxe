import React, { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <main>
      <form>
        <Slider id={1} maxReps={15} unit="Reps" />
        <Slider id={2} maxReps={15} unit="Reps"  />
        <Slider id={3} maxReps={15} unit="Seconds" />
      </form>
    </main>
  );
};

const Slider: React.FC<SliderProps> = ({ id, maxReps, unit }): JSX.Element => {
  const [ reps, setReps ] = useState(0);

  return (
    <div>
      <label htmlFor={`set-${id}-slider`}>Set {id}</label>
      <input
        type="range"
        id={`set-${id}-slider`}
        name={`set-${id}-slider`}
        min="0"
        max={maxReps}
        value={reps}
        onChange={e => setReps(Number.parseInt(e.target.value))} />
      {reps} {unit}
    </div>
  );
};

type SliderProps = {
  id: number,
  maxReps: number,
  unit: Unit
};

type Unit = "Reps" | "Seconds";

export default App;
