import React, { useState } from 'react';
import './App.css';

const App = (): JSX.Element => {
  const [ setReps, setSetReps ] = useState([2, 5, 9]);
  
  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.table(setReps);
  };

  const updateSetReps = (reps: number, index: number) => {
    const setRepsCopy = [ ...setReps ];
    setRepsCopy[index] = reps;
    setSetReps(setRepsCopy);
  };

  return (
    <main>
      <form>
        {setReps.map((reps, index) => {
          return (
            <Slider
              key={index}
              id={index}
              reps={reps}
              updateSetReps={updateSetReps}
              maxReps={15}
              unit="Reps"
            />
          );
        })}
        <button onClick={submit}>Done</button>
      </form>
    </main>
  );
};

const Slider: React.FC<SliderProps> = ({ id, reps, maxReps, unit, updateSetReps }): JSX.Element => {
  return (
    <div>
      <label htmlFor={`set-${id}-slider`}>Set {id + 1}</label>
      <input
        type="range"
        id={`set-${id}-slider`}
        name={`set-${id}-slider`}
        min="0"
        max={maxReps}
        value={reps}
        onChange={e => updateSetReps(Number.parseInt(e.target.value), id)} />
      {reps} {unit}
    </div>
  );
};

type SliderProps = {
  id: number,
  reps: number,
  maxReps: number,
  unit: Unit,
  updateSetReps: (reps: number, index: number) => void
};

type Unit = "Reps" | "Seconds";

export default App;
