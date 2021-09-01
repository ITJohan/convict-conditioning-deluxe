import { useState, useEffect } from 'react';
import axios from 'axios';

import { Exercise, Group, User, Workout } from './models/types';
import ExerciseForm from './components/ExerciseForm';
import { generateWorkout } from './helpers';
import { exerciseFactory } from './factories/exerciseFactory';

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  const [workout, setWorkout] = useState<Workout>();
  const [exercise, setExercise] = useState<Exercise>();

  useEffect(() => {
    // TODO: Move url to env
    axios.get<User>('http://localhost:3000/users/1').then((res) => {
      setUser(res.data);
      const workout = generateWorkout(res.data.workouts[res.data.workouts.length - 1])
      setWorkout(workout)
      setExercise(exerciseFactory(Group.pushups, workout.pushups.level));
    });
  }, []);

  // TODO: Move submit functionality from ExerciseForm here?

  if (!user || !workout || !exercise) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Hello {user.firstName}!</h1>
      <img src={exercise.image} alt='Exercise instructions' />
      <ExerciseForm
        exercise={exercise}
        setExercise={setExercise}
        workout={workout}
        setWorkout={setWorkout}
        user={user}
        setUser={setUser}
      />
    </main>
  );
};

export default App;
