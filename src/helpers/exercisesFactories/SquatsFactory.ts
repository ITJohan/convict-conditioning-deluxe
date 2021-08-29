import { Level, Sets, Exercise, Unit } from '../../models/types';

const SquatsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return Squats('Shoulderstand squats', 1, 1, 10, 'Reps');
    case 2:
      return Squats('Shoulderstand squats', 2, 2, 25, 'Reps');
    case 3:
      return Squats('Shoulderstand squats', 3, 3, 50, 'Reps');

    case 4:
      return Squats('Jackknife squats', 4, 1, 10, 'Reps');
    case 5:
      return Squats('Jackknife squats', 5, 2, 20, 'Reps');
    case 6:
      return Squats('Jackknife squats', 6, 3, 40, 'Reps');

    case 7:
      return Squats('Supported squats', 7, 1, 10, 'Reps');
    case 8:
      return Squats('Supported squats', 8, 2, 15, 'Reps');
    case 9:
      return Squats('Supported squats', 9, 3, 30, 'Reps');

    case 10:
      return Squats('Half squats', 10, 1, 8, 'Reps');
    case 11:
      return Squats('Half squats', 11, 2, 35, 'Reps');
    case 12:
      return Squats('Half squats', 12, 2, 50, 'Reps');

    case 13:
      return Squats('Full squats', 13, 1, 5, 'Reps');
    case 14:
      return Squats('Full squats', 14, 2, 10, 'Reps');
    case 15:
      return Squats('Full squats', 15, 2, 30, 'Reps');

    case 16:
      return Squats('Close squats', 16, 1, 5, 'Reps');
    case 17:
      return Squats('Close squats', 17, 2, 10, 'Reps');
    case 18:
      return Squats('Close squats', 18, 2, 20, 'Reps');

    case 19:
      return Squats('Uneven squats', 19, 1, 5, 'Reps');
    case 20:
      return Squats('Uneven squats', 20, 2, 10, 'Reps');
    case 21:
      return Squats('Uneven squats', 21, 2, 20, 'Reps');

    case 22:
      return Squats('1/2 one-leg squats', 22, 1, 5, 'Reps');
    case 23:
      return Squats('1/2 one-leg squats', 23, 2, 10, 'Reps');
    case 24:
      return Squats('1/2 one-leg squats', 24, 2, 20, 'Reps');

    case 25:
      return Squats('Assisted one-leg squats', 25, 1, 5, 'Reps');
    case 26:
      return Squats('Assisted one-leg squats', 26, 2, 10, 'Reps');
    case 27:
      return Squats('Assisted one-leg squats', 27, 2, 20, 'Reps');

    case 28:
      return Squats('One-leg squats', 28, 1, 5, 'Reps');
    case 29:
      return Squats('One-leg squats', 29, 2, 10, 'Reps');
    case 30:
      return Squats('One-leg squats', 30, 2, 50, 'Reps');

    default:
      return Squats('Shoulderstand squats', 1, 1, 10, 'Reps');
  }
};

const Squats = (
  variant: string,
  level: Level,
  sets: Sets,
  reps: number,
  unit: Unit
): Exercise => {
  return {
    group: 'Squats',
    variant,
    level,
    sets,
    reps,
    unit,
    image: `../images/squats/${level}.jpg`,
  };
};

export default SquatsFactory;
