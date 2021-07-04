import { useState } from 'react';

import { Exercise, Workout, WorkoutExercise } from './models/types';
import Graph from './components/Graph';
import ExerciseForm from './components/ExerciseForm';

import BridgesFactory from './models/exercisesFactories/BridgesFactory';
import HandstandsFactory from './models/exercisesFactories/HandstandsFactory';
import LegRaisesFactory from './models/exercisesFactories/LegRaisesFactory';
import PullupsFactory from './models/exercisesFactories/PullupsFactory';
import PushupsFactory from './models/exercisesFactories/PushupsFactory';
import SquatsFactory from './models/exercisesFactories/SquatsFactory';

const workouts: Workout[] = [
  {
    startDate: new Date(2021, 7, 1, 17, 0, 0, 0),
    endDate: new Date(2021, 7, 1, 17, 20, 0, 0),
    exercises: [
      {
        exercise: PushupsFactory(1),
        sets: [10],
      },
      {
        exercise: SquatsFactory(1),
        sets: [10],
      },
      {
        exercise: PullupsFactory(1),
        sets: [10],
      },
      {
        exercise: LegRaisesFactory(1),
        sets: [10],
      },
      {
        exercise: BridgesFactory(1),
        sets: [10],
      },
      {
        exercise: HandstandsFactory(1),
        sets: [30],
      },
    ],
  },
  {
    startDate: new Date(2021, 7, 2, 20, 0, 0, 0),
    endDate: new Date(2021, 7, 2, 20, 42, 0, 0),
    exercises: [
      {
        exercise: PushupsFactory(2),
        sets: [25, 25],
      },
      {
        exercise: SquatsFactory(2),
        sets: [25, 25],
      },
      {
        exercise: PullupsFactory(2),
        sets: [20, 20],
      },
      {
        exercise: LegRaisesFactory(2),
        sets: [25, 25],
      },
      {
        exercise: BridgesFactory(2),
        sets: [25, 25],
      },
      {
        exercise: HandstandsFactory(2),
        sets: [60],
      },
    ],
  },
];

const App = (): JSX.Element => {
  const [workoutExercise, setWorkoutExercise] = useState<WorkoutExercise>({
    exercise: PushupsFactory(3),
    sets: [],
  });

  // TODO: Add ExerciseForm and picture after refactor

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
};

export default App;
