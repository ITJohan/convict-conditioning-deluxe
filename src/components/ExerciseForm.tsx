import React from 'react';
import Slider from './Slider';

export type ExerciseFormProps = {
  setReps: number[];
  updateSetReps: (reps: number, index: number) => void;
};

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  setReps,
  updateSetReps,
}): JSX.Element => {
  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.table(setReps);
  };

  return (
    <form>
      {setReps.map((reps, index) => {
        return (
          <Slider
            key={index}
            id={index}
            reps={reps}
            updateSetReps={updateSetReps}
            maxReps={15}
            unit="Reps"
          />
        );
      })}

      <button onClick={submit}>Done</button>
    </form>
  );
};

export default ExerciseForm;
