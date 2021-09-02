import { useState, useEffect } from 'react';
import app from './services/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential } from "firebase/auth";
import { getFirestore, collection, getDocs, query, addDoc, orderBy } from 'firebase/firestore';

import { Exercise, Group, Workout } from './models/types';
import ExerciseForm from './components/ExerciseForm';
import { generateWorkout, transformToWorkout } from './helpers';
import { exerciseFactory } from './factories/exerciseFactory';

const App = (): JSX.Element => {
  const [user, setUser] = useState<UserCredential>();
  const [workout, setWorkout] = useState<Workout>();
  const [workouts, setWorkouts] = useState<Workout[]>();
  const [exercise, setExercise] = useState<Exercise>();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result);

        const db = getFirestore(app);
        const q = query(collection(db, `users/${result.user.uid}/workouts`), orderBy('end'));
        getDocs(q)
          .then(results => {
            const workouts: Workout[] = [];
            results.forEach(result => {
              const workout = transformToWorkout(result);
              workouts.push(workout);

            })
            setWorkouts(workouts);

            // Create new workout from previous
            const workout = generateWorkout(workouts[workouts.length - 1])
            setWorkout(workout)
            setExercise(exerciseFactory(Group.pushups, workout.pushups.level));
          })
          .catch(error => console.error(error));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // TODO: Show login if not logged in

  // TODO: Show logout if logged in

  if (isFinished) {
    return <h2>Finished, good job!</h2>
  }

  if (!user || !workout || !workouts || !exercise) {
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
        const workoutCopy = { ...workout };
        workoutCopy.end = new Date();
        setWorkouts([...workouts, workoutCopy]);
        const db = getFirestore(app);
        addDoc(collection(db, `users/${user.user.uid}/workouts`), workoutCopy)
          .then(docRef => console.log('Document written with ID: ', docRef.id))
          .catch(error => console.error(error));

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
