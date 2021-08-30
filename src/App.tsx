import { useState, useEffect } from 'react';
import axios from 'axios';

import { User, Workout, WorkoutExercise } from './models/types';
import ExerciseForm from './components/ExerciseForm';
import { generateWorkout } from './helpers';

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  const [workout, setWorkout] = useState<Workout>();
  const [exercise, setExercise] = useState<WorkoutExercise>();

  useEffect(() => {
      axios.get<User>('http://localhost:3000/users/1').then((res) => {
      setUser(res.data);
      const workout = generateWorkout(res.data.workouts[res.data.workouts.length - 1])
      setWorkout(workout)
      setExercise(workout.pushups);
    });
  }, []);
  // TODO: Add ExerciseForm and picture after refactor

  if (!user || !workout || !exercise) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Hello {user.firstName}!</h1>
      <ExerciseForm prevExercise={exercise} setWorkout={setWorkout} />
    </main>
  );
};

export default App;
