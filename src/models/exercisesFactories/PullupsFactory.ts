import { Level, Sets, Exercise, Unit } from '../types';

const PullupsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return Pullups('Vertical pullups', 1, 1, 10, 'Reps');
    case 2:
      return Pullups('Vertical pullups', 2, 2, 20, 'Reps');
    case 3:
      return Pullups('Vertical pullups', 3, 3, 40, 'Reps');

    case 4:
      return Pullups('Horizontal pullups', 4, 1, 10, 'Reps');
    case 5:
      return Pullups('Horizontal pullups', 5, 2, 20, 'Reps');
    case 6:
      return Pullups('Horizontal pullups', 6, 3, 30, 'Reps');

    case 7:
      return Pullups('Jackknife pullups', 7, 1, 10, 'Reps');
    case 8:
      return Pullups('Jackknife pullups', 8, 2, 15, 'Reps');
    case 9:
      return Pullups('Jackknife pullups', 9, 3, 20, 'Reps');

    case 10:
      return Pullups('Half pullups', 10, 1, 8, 'Reps');
    case 11:
      return Pullups('Half pullups', 11, 2, 10, 'Reps');
    case 12:
      return Pullups('Half pullups', 12, 2, 15, 'Reps');

    case 13:
      return Pullups('Full pullups', 13, 1, 5, 'Reps');
    case 14:
      return Pullups('Full pullups', 14, 2, 8, 'Reps');
    case 15:
      return Pullups('Full pullups', 15, 2, 10, 'Reps');

    case 16:
      return Pullups('Close pullups', 16, 1, 5, 'Reps');
    case 17:
      return Pullups('Close pullups', 17, 2, 8, 'Reps');
    case 18:
      return Pullups('Close pullups', 18, 2, 20, 'Reps');

    case 19:
      return Pullups('Uneven pullups', 19, 1, 5, 'Reps');
    case 20:
      return Pullups('Uneven pullups', 20, 2, 7, 'Reps');
    case 21:
      return Pullups('Uneven pullups', 21, 2, 9, 'Reps');

    case 22:
      return Pullups('1/2 one-arm pullups', 22, 1, 4, 'Reps');
    case 23:
      return Pullups('1/2 one-arm pullups', 23, 2, 6, 'Reps');
    case 24:
      return Pullups('1/2 one-arm pullups', 24, 2, 8, 'Reps');

    case 25:
      return Pullups('Assisted one-arm pullups', 25, 1, 3, 'Reps');
    case 26:
      return Pullups('Assisted one-arm pullups', 26, 2, 5, 'Reps');
    case 27:
      return Pullups('Assisted one-arm pullups', 27, 2, 7, 'Reps');

    case 28:
      return Pullups('One-arm pullups', 28, 1, 1, 'Reps');
    case 29:
      return Pullups('One-arm pullups', 29, 2, 3, 'Reps');
    case 30:
      return Pullups('One-arm pullups', 30, 2, 6, 'Reps');

    default:
      return Pullups('Vertical pullups', 1, 1, 10, 'Reps');
  }
};

const Pullups = (
  variant: string,
  level: Level,
  sets: Sets,
  reps: number,
  unit: Unit
): Exercise => {
  return {
    group: 'Pullups',
    variant,
    level,
    sets,
    reps,
    unit,
    image: `./images/pullups/${level}.jpg`,
  };
};

export default PullupsFactory;
