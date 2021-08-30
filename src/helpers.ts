import { v4 as uuidv4 } from 'uuid';

import { Workout, WorkoutExercise } from './models/Types';
import BridgesFactory from './helpers/exercisesFactories/BridgesFactory';
import HandstandsFactory from './helpers/exercisesFactories/HandstandsFactory';
import LegRaisesFactory from './helpers/exercisesFactories/LegRaisesFactory';
import PullupsFactory from './helpers/exercisesFactories/PullupsFactory';
import PushupsFactory from './helpers/exercisesFactories/PushupsFactory';
import SquatsFactory from './helpers/exercisesFactories/SquatsFactory';

export const generateWorkout = (prevWorkout: Workout): Workout => {
  return {
    startDate: new Date(),
    pushups: generateExercise(prevWorkout.pushups),
    squats: generateExercise(prevWorkout.squats),
    pullups: generateExercise(prevWorkout.pullups),
    legRaises: generateExercise(prevWorkout.legRaises),
    handstands: generateExercise(prevWorkout.handstands),
    bridges: generateExercise(prevWorkout.bridges)
  }
};

const generateExercise = (prev: WorkoutExercise): WorkoutExercise => {
  
}
