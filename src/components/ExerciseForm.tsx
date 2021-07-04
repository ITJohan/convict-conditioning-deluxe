import React, { useState } from 'react';
import { Workout, WorkoutExercise } from '../models/types';
import Slider from './Slider';

export type ExerciseFormProps = {
  prevWorkoutExercise: WorkoutExercise; // TODO: Unsure if this is right, should only be previous if it is the same exercise
  setWorkout: (workout: Workout) => void;
};

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  prevWorkoutExercise,
  setWorkout,
}): JSX.Element => {
  const [workoutExercise, setWorkoutExercise] =
    useState<WorkoutExercise>(prevWorkoutExercise);

  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.table(workoutExercise);
  };

  const updateSetReps = (reps: number, index: number) => {
    const workoutExerciseCopy = { ...workoutExercise };
    workoutExerciseCopy.sets[index] = reps;
    setWorkoutExercise(workoutExerciseCopy);
  };

  return (
    <form>
      {workoutExercise.sets.map((reps, index) => {
        return (
          <Slider
            key={index}
            id={index}
            reps={reps}
            updateSetReps={updateSetReps}
            maxReps={workoutExercise.exercise.reps}
            unit={workoutExercise.exercise.unit}
          />
        );
      })}

      <button onClick={submit}>Done</button>
    </form>
  );
};

export default ExerciseForm;
