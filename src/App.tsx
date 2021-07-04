import { useState, useEffect } from 'react';
import axios from 'axios';

import { Exercise, User, Workout, WorkoutExercise } from './models/types';
import Graph from './components/Graph';
import ExerciseForm from './components/ExerciseForm';

import BridgesFactory from './models/exercisesFactories/BridgesFactory';
import HandstandsFactory from './models/exercisesFactories/HandstandsFactory';
import LegRaisesFactory from './models/exercisesFactories/LegRaisesFactory';
import PullupsFactory from './models/exercisesFactories/PullupsFactory';
import PushupsFactory from './models/exercisesFactories/PushupsFactory';
import SquatsFactory from './models/exercisesFactories/SquatsFactory';

const App = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [workoutExercise, setWorkoutExercise] = useState<WorkoutExercise>({
    exercise: PushupsFactory(3),
    sets: [],
  });

  useEffect(() => {
    axios
      .get<User>('http://localhost:3000/users/1')
      .then((res) => setUser(res.data));
  }, []);
  // TODO: Add ExerciseForm and picture after refactor

  if (user === null) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Hello {user.firstName}!</h1>
    </main>
  );
};

export default App;
