export type Unit = 'Reps' | 'Seconds';

export type Exercise = {
  id: number;
  group: string;
  variant: string;
  level: number;
  sets: number;
  reps: number;
  unit: string;
  image: string;
};

export type WorkoutExercise = {
  id: string;
  exerciseId: number;
  sets: number[];
};

export type Workout = {
  id: string;
  startDate: Date;
  EndDate: Date;
  Exercises: WorkoutExercise[];
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  workouts: Workout[];
};
