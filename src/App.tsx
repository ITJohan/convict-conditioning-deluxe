import React, { useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import ExerciseForm from './components/ExerciseForm';

const App = (): JSX.Element => {
  const [setReps, setSetReps] = useState([2, 5, 9]);

  const updateSetReps = (reps: number, index: number) => {
    const setRepsCopy = [...setReps];
    setRepsCopy[index] = reps;
    setSetReps(setRepsCopy);
  };

  return (
    <main>
      <Graph setReps={setReps} />
      <ExerciseForm setReps={setReps} updateSetReps={updateSetReps} />
    </main>
  );
};

export default App;
