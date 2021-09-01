import axios from 'axios';
import React from 'react';
import { exerciseFactory } from '../factories/exerciseFactory';
import { Exercise, Group, User, Workout } from '../models/types';
import Slider from './Slider';

export type ExerciseFormProps = {
  exercise: Exercise;
  setExercise: (exercise: Exercise) => void;
  workout: Workout;
  setWorkout: (workout: Workout) => void;
  user: User;
  setUser: (user: User) => void;
};

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  exercise,
  setExercise,
  workout,
  setWorkout,
  user,
  setUser
}): JSX.Element => {
  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (exercise.group) {
      case Group.pushups:
        setExercise(exerciseFactory(Group.squats, workout.squats.level))
        break;
      case Group.squats:
        setExercise(exerciseFactory(Group.pullups, workout.pullups.level))
        break;
      case Group.pullups:
        setExercise(exerciseFactory(Group.legRaises, workout.legRaises.level))
        break;
      case Group.legRaises:
        setExercise(exerciseFactory(Group.bridges, workout.bridges.level))
        break;
      case Group.bridges:
        setExercise(exerciseFactory(Group.handstands, workout.handstands.level))
        break;
      case Group.handstands:
        console.log('Finished!');
        const userCopy = { ...user };
        const workoutCopy = { ...workout };
        workoutCopy.endDate = new Date();
        userCopy.workouts.push(workoutCopy);
        axios.patch('http://localhost:3000/users/1', userCopy);
        setUser(userCopy);
        break;
    }
  };

  const updateWorkout = (reps: number, index: number) => {
    const workoutCopy = { ...workout };
    workoutCopy[exercise.group].sets[index] = reps;
    setWorkout(workoutCopy);
  };

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

      <button onClick={submit}>Done</button>
    </form>
  );
};

export default ExerciseForm;
