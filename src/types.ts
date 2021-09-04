export enum Group {
  pushups = 'pushups',
  squats = 'squats',
  pullups = 'pullups',
  legRaises = 'legRaises',
  bridges = 'bridges',
  handstands = 'handstands'
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

// TODO: Remove?
export type WorkoutExercise = {
  exercise: Exercise
  sets: number[];
};

// TODO: Remove Dto from name?
export type WorkoutExerciseDto = {
  level: Level;
  sets: number[];
};

export type Workout = {
  start: Date;
  end?: Date;
  pushups: WorkoutExerciseDto;
  squats: WorkoutExerciseDto;
  pullups: WorkoutExerciseDto;
  legRaises: WorkoutExerciseDto;
  bridges: WorkoutExerciseDto;
  handstands: WorkoutExerciseDto;
};

export type WorkoutService = {
  login(): void;
  logout(): void;
  getWorkouts(): Promise<Workout[]>;
  postWorkout(workout: Workout): void;
}
