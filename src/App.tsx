import { useState, useEffect } from 'react';

import firebaseService from './services/firebase';
import { Exercise, Group, Workout, WorkoutService } from './types';
import ExerciseForm from './components/ExerciseForm';
import { exerciseFactory } from './factories/exerciseFactory';
import { generateWorkout } from './helpers';
import Chart from './components/Chart';

const App = (): JSX.Element => {
  const [workout, setWorkout] = useState<Workout>();
  const [workouts, setWorkouts] = useState<Workout[]>();
  const [exercise, setExercise] = useState<Exercise>();
  const [isFinished, setIsFinished] = useState(false);
  const [firebase, setFirebase] = useState<WorkoutService>();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setFirebase(firebaseService());
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(timeoutId);
  }, [timer]);

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
        <button className='button' onClick={login}>Login</button>
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

        setIsFinished(true);
        break;
    }
  };

  const updateWorkout = (reps: number, index: number) => {
    const workoutCopy = { ...workout };
    workoutCopy[exercise.group].sets[index] = reps;
    setWorkout(workoutCopy);
    setTimer(90);
  };

  return (
    <main>
      {isFinished ?
        <h1>Finished, good job!</h1> :
        <>
          <h1>{exercise.group.charAt(0).toUpperCase() + exercise.group.slice(1)} level {exercise.level}, {exercise.variant.toLowerCase()}</h1>
          <img src={exercise.image} alt='Exercise instructions' />
          <Chart workouts={workouts} exercise={exercise} />
          <h2>{timer === 0 ? 'Hit it!' : `Countdown: ${timer}`}</h2>
          <ExerciseForm
            exercise={exercise}
            workout={workout}
            updateWorkout={updateWorkout}
            submitWorkout={submitWorkout}
          >
            <button className='button' onClick={logout}>Logout</button>
          </ExerciseForm>
        </>
      }
    </main >
  );
};

export default App;
