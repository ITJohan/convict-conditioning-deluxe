import { Level, Sets, Exercise, Unit } from '../types';

const PushupsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return Pushups('Wall pushups', 1, 1, 10, 'Reps');
    case 2:
      return Pushups('Wall pushups', 2, 2, 25, 'Reps');
    case 3:
      return Pushups('Wall pushups', 3, 3, 50, 'Reps');

    case 4:
      return Pushups('Incline pushups', 4, 1, 10, 'Reps');
    case 5:
      return Pushups('Incline pushups', 5, 2, 20, 'Reps');
    case 6:
      return Pushups('Incline pushups', 6, 3, 40, 'Reps');

    case 7:
      return Pushups('Kneeling pushups', 7, 1, 10, 'Reps');
    case 8:
      return Pushups('Kneeling pushups', 8, 2, 15, 'Reps');
    case 9:
      return Pushups('Kneeling pushups', 9, 3, 30, 'Reps');

    case 10:
      return Pushups('Half pushups', 10, 1, 8, 'Reps');
    case 11:
      return Pushups('Half pushups', 11, 2, 12, 'Reps');
    case 12:
      return Pushups('Half pushups', 12, 2, 25, 'Reps');

    case 13:
      return Pushups('Full pushups', 13, 1, 5, 'Reps');
    case 14:
      return Pushups('Full pushups', 14, 2, 10, 'Reps');
    case 15:
      return Pushups('Full pushups', 15, 2, 20, 'Reps');

    case 16:
      return Pushups('Close pushups', 16, 1, 5, 'Reps');
    case 17:
      return Pushups('Close pushups', 17, 2, 10, 'Reps');
    case 18:
      return Pushups('Close pushups', 18, 2, 20, 'Reps');

    case 19:
      return Pushups('Uneven pushups', 19, 1, 5, 'Reps');
    case 20:
      return Pushups('Uneven pushups', 20, 2, 10, 'Reps');
    case 21:
      return Pushups('Uneven pushups', 21, 2, 20, 'Reps');

    case 22:
      return Pushups('1/2 one-arm pushups', 22, 1, 5, 'Reps');
    case 23:
      return Pushups('1/2 one-arm pushups', 23, 2, 10, 'Reps');
    case 24:
      return Pushups('1/2 one-arm pushups', 24, 2, 20, 'Reps');

    case 25:
      return Pushups('Lever pushups', 25, 1, 5, 'Reps');
    case 26:
      return Pushups('Lever pushups', 26, 2, 10, 'Reps');
    case 27:
      return Pushups('Lever pushups', 27, 2, 20, 'Reps');

    case 28:
      return Pushups('One-arm pushups', 28, 1, 5, 'Reps');
    case 29:
      return Pushups('One-arm pushups', 29, 2, 10, 'Reps');
    case 30:
      return Pushups('One-arm pushups', 30, 2, 20, 'Reps');

    default:
      return Pushups('Wall pushups', 1, 1, 10, 'Reps');
  }
};

const Pushups = (
  variant: string,
  level: Level,
  sets: Sets,
  reps: number,
  unit: Unit
): Exercise => {
  return {
    group: 'Pushups',
    variant,
    level,
    sets,
    reps,
    unit,
    image: `../images/pushups/${level}.jpg`,
  };
};

export default PushupsFactory;
