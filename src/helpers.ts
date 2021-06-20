import { v4 as uuidv4 } from 'uuid';
import { Workout, WorkoutExercise } from './models/types';

const workoutCreator = (): Workout => {
  // Get a copy of the latest workout, if there is none create a new with exercises in the right order

  // Update workout with fresh values

  return {
    id: '',
    startDate: new Date(),
    endDate: new Date(),
    exercises: [
      {
        id: '',
        exerciseId: 1,
        sets: [1],
      },
    ],
  };
};
