import React from 'react';
import { Exercise, Workout } from '../models/types';
import Slider from './Slider';

export type ExerciseFormProps = {
  exercise: Exercise;
  workout: Workout,
  setWorkout: (workout: Workout) => void;
};

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  exercise,
  workout,
  setWorkout
}): JSX.Element => {
  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // TODO: Save to workout
    console.table(workout);
  };

  const updateWorkout = (reps: number, index: number) => {
    const workoutCopy = { ...workout };
    workoutCopy[exercise.group].sets[index] = reps;
    
    setWorkout(workoutCopy);
  };

  return (
    <form>
      {workout[exercise.group].sets.map((reps, index) => {
        return (
          <Slider
            key={index}
            id={index}
            reps={reps}
            updateSetReps={updateWorkout}
            maxReps={exercise.goals[0]}
            unit={exercise.unit}
          />
        );
      })}

      <button onClick={submit}>Done</button>
    </form>
  );
};

export default ExerciseForm;
