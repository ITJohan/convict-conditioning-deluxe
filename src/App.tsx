import { useState, useEffect } from 'react';
import axios from 'axios';
import db from './services/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

import { Exercise, Group, User, Workout } from './models/types';
import ExerciseForm from './components/ExerciseForm';
import { generateWorkout } from './helpers';
import { exerciseFactory } from './factories/exerciseFactory';

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  const [workout, setWorkout] = useState<Workout>();
  const [exercise, setExercise] = useState<Exercise>();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const userSnapshot = await getDoc(doc(db, 'users', 'MxfdhA0c01I1KUX4Vf8d/workouts/xr4s8xfjsWLkK7AHhLeJ'));
      const user = userSnapshot.data();
      console.log(user);
    }

    fetchUsers();
    // TODO: Move url to env
    // axios.get<User>('http://localhost:3000/users/1').then((res) => {
    //   setUser(res.data);
    //   const workout = generateWorkout(res.data.workouts[res.data.workouts.length - 1])
    //   setWorkout(workout)
    //   setExercise(exerciseFactory(Group.pushups, workout.pushups.level));
    // });
  }, []);


  if (isFinished) {
    return <h2>Finished, good job!</h2>
  }

  if (!user || !workout || !exercise) {
    return <main>Loading...</main>;
  }

  const submitWorkout = (e: React.FormEvent<HTMLButtonElement>) => {
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
        const userCopy = { ...user };
        const workoutCopy = { ...workout };
        workoutCopy.endDate = new Date();
        userCopy.workouts.push(workoutCopy);
        // TODO: Move url to env
        axios.patch('http://localhost:3000/users/1', userCopy);
        setUser(userCopy);
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
      <h2>{exercise.group.charAt(0).toUpperCase() + exercise.group.slice(1)} level {exercise.level}, {exercise.variant.toLowerCase()}</h2>
      <img width={400} src={exercise.image} alt='Exercise instructions' />
      <ExerciseForm
        exercise={exercise}
        workout={workout}
        updateWorkout={updateWorkout}
        submitWorkout={submitWorkout}
      />
    </main>
  );
};

export default App;
