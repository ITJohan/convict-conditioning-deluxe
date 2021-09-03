import React from 'react';
import { Exercise, Workout } from '../types';
import Slider from './Slider';

export type ExerciseFormProps = {
  exercise: Exercise;
  workout: Workout;
  updateWorkout: (reps: number, index: number) => void;
  submitWorkout: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  exercise,
  workout,
  updateWorkout,
  submitWorkout
}): JSX.Element => {
  return (
    <form>
      <p>Rep goal: {exercise.goals[0]}</p>
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

      <button onClick={submitWorkout}>Done</button>
    </form>
  );
};

export default ExerciseForm;
