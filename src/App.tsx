import { useState, useEffect } from 'react';
import axios from 'axios';

import { Exercise, User, Workout, WorkoutExercise } from './models/Types';
import Graph from './components/Graph';
import ExerciseForm from './components/ExerciseForm';

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    axios.get<User>('http://localhost:3000/users/1').then((res) => {
      setUser(res.data);
      setWorkout(
        generateWorkout(res.data.workouts[res.data.workouts.length - 1])
      );
    });
  }, []);
  // TODO: Add ExerciseForm and picture after refactor

  if (!user || !workout) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Hello {user.firstName}!</h1>
      <ExerciseForm setWorkout={setWorkout} />
    </main>
  );
};

export default App;
