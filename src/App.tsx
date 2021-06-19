import React, { useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import Slider from './components/Slider';

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
      <Graph />
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

export default App;
