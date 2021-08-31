import { exerciseFactory } from './factories/exerciseFactory';
import { Group, Level, Workout, WorkoutExerciseDto } from './models/types';

export const generateWorkout = (prev: Workout): Workout => {
  return {
    startDate: new Date(),
    pushups: generateExercise(prev.pushups, Group.pushups),
    squats: generateExercise(prev.squats, Group.squats),
    pullups: generateExercise(prev.pullups, Group.pullups),
    legRaises: generateExercise(prev.legRaises, Group.legRaises),
    handstands: generateExercise(prev.handstands, Group.handstands),
    bridges: generateExercise(prev.bridges, Group.bridges)
  }
};

export const generateExercise = (prev: WorkoutExerciseDto, group: Group): WorkoutExerciseDto => {
  const prevExercise = exerciseFactory(group, prev.level);

  if (prev.sets.every((v, i) => v === prevExercise.goals[i])) {
    const nextLevel = incrementLevel(prev.level);

    return {
      level: nextLevel,
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