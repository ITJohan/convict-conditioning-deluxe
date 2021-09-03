import { useState, useEffect } from 'react';

import firebaseService from './services/firebase';
import { Exercise, Group, Workout, WorkoutService } from './models/types';
import ExerciseForm from './components/ExerciseForm';
import { exerciseFactory } from './factories/exerciseFactory';
import { generateWorkout } from './helpers';

const App = (): JSX.Element => {
  const [workout, setWorkout] = useState<Workout>();
  const [workouts, setWorkouts] = useState<Workout[]>();
  const [exercise, setExercise] = useState<Exercise>();
  const [isFinished, setIsFinished] = useState(false);
  const [firebase, setFirebase] = useState<WorkoutService>();

  useEffect(() => {
    setFirebase(firebaseService());
  }, []);

  if (!firebase) {
    return <main>Loading...</main>;
  }

  const login = async () => {
    await firebase.login();

    const workouts = await firebase.getWorkouts();
    const workout = generateWorkout(workouts[workouts.length - 1])
    setWorkouts(workouts);
    setWorkout(workout)
    setExercise(exerciseFactory(Group.pushups, workout.pushups.level));
  }

  const logout = async () => {
    await firebase.logout();

    setWorkout(undefined);
    setWorkouts(undefined);
    setExercise(undefined);
  }

  if (!workouts || !workout || !exercise) {
    return (
      <>
        <h1>Convict Conditioning Deluxe</h1>
        <button onClick={login}>Login</button>
      </>
    );
  }

  const submitWorkout = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (exercise.group) {
      case Group.pushups:
        setExercise(exerciseFactory(Group.squats, workout.squats.level));
        break;
      case Group.squats:
        setExercise(exerciseFactory(Group.pullups, workout.pullups.level));
        break;
      case Group.pullups:
        setExercise(exerciseFactory(Group.legRaises, workout.legRaises.level));
        break;
      case Group.legRaises:
        setExercise(exerciseFactory(Group.bridges, workout.bridges.level));
        break;
      case Group.bridges:
        setExercise(exerciseFactory(Group.handstands, workout.handstands.level));
        break;
      case Group.handstands:
        const workoutCopy = { ...workout };
        workoutCopy.end = new Date();

        try {
          firebase.postWorkout(workoutCopy);
        } catch (error) {
          console.error(error);
          return;
        }
        setWorkouts([...workouts, workoutCopy]);
        setIsFinished(true);
        break;
    }
  };

  const updateWorkout = (reps: number, index: number) => {
    const workoutCopy = { ...workout };
    workoutCopy[exercise.group].sets[index] = reps;
    setWorkout(workoutCopy);
  };

  return (
    <main>
      <h1>Convict Conditioning Deluxe</h1>
      <hr />
      {isFinished ?
        <h2>Finished, good job!</h2> :
        <>
          <h2>{exercise.group.charAt(0).toUpperCase() + exercise.group.slice(1)} level {exercise.level}, {exercise.variant.toLowerCase()}</h2>
          <img width={400} src={exercise.image} alt='Exercise instructions' />
          <hr />
          <ExerciseForm
            exercise={exercise}
            workout={workout}
            updateWorkout={updateWorkout}
            submitWorkout={submitWorkout}
          />
        </>
      }
      <hr />
      <button onClick={logout}>Logout</button>
    </main>
  );
};

export default App;
