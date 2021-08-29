import { v4 as uuidv4 } from 'uuid';

import { Workout, WorkoutExercise } from './models/Types';
import BridgesFactory from './helpers/exercisesFactories/BridgesFactory';
import HandstandsFactory from './helpers/exercisesFactories/HandstandsFactory';
import LegRaisesFactory from './helpers/exercisesFactories/LegRaisesFactory';
import PullupsFactory from './helpers/exercisesFactories/PullupsFactory';
import PushupsFactory from './helpers/exercisesFactories/PushupsFactory';
import SquatsFactory from './helpers/exercisesFactories/SquatsFactory';

export const generateNewWorkout = (prevWorkout: Workout): Workout => {
  const workout: Workout = {
    startDate: new Date(),
    pushups: generateLevel(prevWorkout.pushups),
  }

  return workout;
};

const generateLevel = (prev: WorkoutExercise): number => {
  let completed = false;

  for (const reps of prev.sets) {
    if (reps < prev.exercise.reps) {
      return prev.exercise.level === 1 ? 1 : prev.exercise.level - 1;
    } else if (reps >=) {

    }
  }
}
