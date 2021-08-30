import React, { useState } from 'react';
import { Workout, WorkoutExercise } from '../models/types';
import Slider from './Slider';

export type ExerciseFormProps = {
  prevExercise: WorkoutExercise;
  setWorkout: (workout: Workout) => void;
};

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  prevExercise,
  setWorkout
}): JSX.Element => {
  const [exercise, setExercise] = useState<WorkoutExercise>(prevExercise);

  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // TODO: Save to workout
    console.table(exercise);
  };

  const updateSetReps = (reps: number, index: number) => {
    const workoutExerciseCopy = { ...exercise };
    workoutExerciseCopy.sets[index] = reps;
    setExercise(workoutExerciseCopy);
  };

  return (
    <form>
      {exercise.sets.map((reps, index) => {
        return (
          <Slider
            key={index}
            id={index}
            reps={reps}
            updateSetReps={updateSetReps}
            maxReps={exercise.exercise.goals[0]}
            unit={exercise.exercise.unit}
          />
        );
      })}

      <button onClick={submit}>Done</button>
    </form>
  );
};

export default ExerciseForm;
