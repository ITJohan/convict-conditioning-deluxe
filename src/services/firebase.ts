import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { Level, Workout, WorkoutExerciseDto, WorkoutService } from '../models/types';
import { addDoc, collection, getDocs, getFirestore, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCqn65S7ZSOF1ZgfKvbLPZoLLFkipL9G2U',
  authDomain: 'convict-conditioning-deluxe.firebaseapp.com',
  databaseURL: 'https://convict-conditioning-deluxe-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'convict-conditioning-deluxe',
  storageBucket: 'convict-conditioning-deluxe.appspot.com',
  messagingSenderId: '740979843895',
  appId: '1:740979843895:web:2a8c2952adbf009990f0b2',
  measurementId: 'G-CQGBBJJ4Q6'
};

const firebaseService = (): WorkoutService => {  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  let user: User | null = null;
  
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const userCredentials = await signInWithPopup(auth, provider);
    user = userCredentials.user;
  }

  const getWorkouts = async (): Promise<Workout[]> => {
    if (user == null) throw new Error('User is null.');
    
    const q = query(collection(db, `users/${user.uid}/workouts`), orderBy('end'));
    const snapshot = await getDocs(q);
    
    const workouts: Workout[] = [];
    if (snapshot.empty) {
      // TODO: Refactor this
      workouts.push({
        start: new Date(),
        end: new Date(),
        pushups: {
          level: 1,
          sets: [0, 0, 0]
        },
        squats: {
          level: 1,
          sets: [0, 0, 0]
        },
        pullups: {
          level: 1,
          sets: [0, 0, 0]
        },
        legRaises: {
          level: 1,
          sets: [0, 0, 0]
        },
        bridges: {
          level: 1,
          sets: [0, 0, 0]
        },
        handstands: {
          level: 1,
          sets: [0]
        },
      })
    } else {
      snapshot.forEach(result => {
        const workout = transformToWorkout(result);
        workouts.push(workout);
      })
    }
    
    return workouts;
  }
  
  const postWorkout = async (workout: Workout) => {
    if (user == null) throw new Error('User is null.');
    
    try {
      await addDoc(collection(db, `users/${user.uid}/workouts`), workout);
    } catch (error) {
      throw error;
    }
  }

  const transformToWorkout = (snapshot: QueryDocumentSnapshot): Workout => {
    return {
      start: new Date(snapshot.get('start').seconds * 1000),
      end: new Date(snapshot.get('end').seconds * 1000),
      pushups: transformToWorkoutExercise(snapshot.get('pushups')),
      squats: transformToWorkoutExercise(snapshot.get('squats')),
      pullups: transformToWorkoutExercise(snapshot.get('pullups')),
      legRaises: transformToWorkoutExercise(snapshot.get('legRaises')),
      bridges: transformToWorkoutExercise(snapshot.get('bridges')),
      handstands: transformToWorkoutExercise(snapshot.get('handstands')),
    }
  }
  
  const transformToWorkoutExercise = (source: any): WorkoutExerciseDto => {
    const level = source.level as Level;
    const sets = source.sets as number[];
    return { level, sets }
  }

  return { login: login, getWorkouts, postWorkout }
}

export default firebaseService;
