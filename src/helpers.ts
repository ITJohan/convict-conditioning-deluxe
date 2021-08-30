import { exerciseFactory } from './factories/exerciseFactory';
import { Level, Workout, WorkoutExercise } from './models/types';

export const generateWorkout = (prev: Workout): Workout => {
  return {
    startDate: new Date(),
    pushups: generateExercise(prev.pushups),
    squats: generateExercise(prev.squats),
    pullups: generateExercise(prev.pullups),
    legRaises: generateExercise(prev.legRaises),
    handstands: generateExercise(prev.handstands),
    bridges: generateExercise(prev.bridges)
  }
};

export const generateExercise = (prev: WorkoutExercise): WorkoutExercise => {
  if (prev.sets.every((v, i) => v === prev.exercise.goals[i])) {
    const nextLevel = incrementLevel(prev.exercise.level);
    return {
      exercise: exerciseFactory(prev.exercise.group, nextLevel),
      sets: []
    }
  } else {
    return { ...prev };
  }
};

export const incrementLevel = (level: Level): Level => {
  switch (level) {
    case 1: return 2;
    case 2: return 3;
    case 3: return 4;
    case 4: return 5;
    case 5: return 6;
    case 6: return 7;
    case 7: return 8;
    case 8: return 9;
    case 9: return 10;
    case 10: return 10;
  }
};