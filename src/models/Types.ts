export type Group =
  | 'Pushups'
  | 'Leg raises'
  | 'Squats'
  | 'Pullups'
  | 'Handstands'
  | 'Bridges';
export type Level =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;
export type Sets = 1 | 2 | 3;
export type Unit = 'Reps' | 'Seconds';

export type Exercise = {
  group: Group;
  variant: string;
  level: Level;
  sets: Sets;
  reps: number;
  unit: Unit;
  image: string;
};

export type WorkoutExercise = {
  exercise: Exercise;
  sets: number[];
};

export type Workout = {
  startDate: Date;
  endDate: Date;
  exercises: WorkoutExercise[];
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  workouts: Workout[];
};
