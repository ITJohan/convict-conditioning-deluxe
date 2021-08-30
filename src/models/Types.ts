export enum Group {
  pushups = 1,
  squats = 2,
  pullups = 3,
  legRaises = 4,
  bridges = 5,
  handstands = 6,
}
export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Unit = 'Reps' | 'Seconds';

export type Exercise = {
  group: Group;
  variant: string;
  level: Level;
  goals: number[];
  unit: Unit;
  image: string;
};

export type WorkoutExercise = {
  exercise: Exercise;
  sets: number[];
};

// TODO: Add a WorkoutDto

export type Workout = {
  startDate: Date;
  endDate?: Date;
  pushups: WorkoutExercise;
  squats: WorkoutExercise;
  pullups: WorkoutExercise;
  legRaises: WorkoutExercise;
  bridges: WorkoutExercise;
  handstands: WorkoutExercise;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  workouts: Workout[];
};
