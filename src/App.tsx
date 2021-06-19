import { useState } from 'react';
import './App.css';

const App = () => {
  const [ sets, setSets ] = useState([0, 0, 0]);

  const updateSets = (reps: number, id: number): void => {
    const setsCopy = [ ...sets ];
    setsCopy[id] = reps;
    setSets(setsCopy);
  }

  return (
    <main>
      <form>
        <div>
          <label htmlFor="set-1-slider">Set 1</label>
          <input type="range" id="set-1-slider" name="set-1-slider" min="0" max="10" value={sets[0]} onChange={e => updateSets(Number.parseInt(e.target.value), 0)} />
          {sets[0]} reps
        </div>
        <div>
          <label htmlFor="set-2-slider">Set 2</label>
          <input type="range" id="set-2-slider" name="set-2-slider" min="0" max="10" value={sets[1]} onChange={e => updateSets(Number.parseInt(e.target.value), 1)} />
          {sets[1]} reps
        </div>
      </form>
    </main>
  );
}

export default App;
