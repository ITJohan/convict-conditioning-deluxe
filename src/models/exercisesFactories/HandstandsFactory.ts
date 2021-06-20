import { Level, Sets, Exercise, Unit } from '../types';

export const HandstandsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return Handstands('Wall headstands', 1, 1, 30, 'Seconds');
    case 2:
      return Handstands('Wall headstands', 2, 1, 60, 'Seconds');
    case 3:
      return Handstands('Wall headstands', 3, 1, 120, 'Seconds');

    case 4:
      return Handstands('Crow stands', 4, 1, 10, 'Seconds');
    case 5:
      return Handstands('Crow stands', 5, 1, 30, 'Seconds');
    case 6:
      return Handstands('Crow stands', 6, 1, 60, 'Seconds');

    case 7:
      return Handstands('Wall handstands', 7, 1, 10, 'Seconds');
    case 8:
      return Handstands('Wall handstands', 8, 2, 30, 'Seconds');
    case 9:
      return Handstands('Wall handstands', 9, 3, 120, 'Seconds');

    case 10:
      return Handstands('Half handstand pushups', 10, 1, 5, 'Reps');
    case 11:
      return Handstands('Half handstand pushups', 11, 2, 10, 'Reps');
    case 12:
      return Handstands('Half handstand pushups', 12, 2, 20, 'Reps');

    case 13:
      return Handstands('Handstand pushups', 13, 1, 5, 'Reps');
    case 14:
      return Handstands('Handstand pushups', 14, 2, 10, 'Reps');
    case 15:
      return Handstands('Handstand pushups', 15, 2, 15, 'Reps');

    case 16:
      return Handstands('Close handstand pushups', 16, 1, 5, 'Reps');
    case 17:
      return Handstands('Close handstand pushups', 17, 2, 9, 'Reps');
    case 18:
      return Handstands('Close handstand pushups', 18, 2, 12, 'Reps');

    case 19:
      return Handstands('Uneven handstand pushups', 19, 1, 5, 'Reps');
    case 20:
      return Handstands('Uneven handstand pushups', 20, 2, 8, 'Reps');
    case 21:
      return Handstands('Uneven handstand pushups', 21, 2, 10, 'Reps');

    case 22:
      return Handstands('1/2 one-arm handstand pushups', 22, 1, 4, 'Reps');
    case 23:
      return Handstands('1/2 one-arm handstand pushups', 23, 2, 6, 'Reps');
    case 24:
      return Handstands('1/2 one-arm handstand pushups', 24, 2, 8, 'Reps');

    case 25:
      return Handstands('Level handstand pushups', 25, 1, 3, 'Reps');
    case 26:
      return Handstands('Level handstand pushups', 26, 2, 4, 'Reps');
    case 27:
      return Handstands('Level handstand pushups', 27, 2, 6, 'Reps');

    case 28:
      return Handstands('One-arm handstand pushups', 28, 1, 1, 'Reps');
    case 29:
      return Handstands('One-arm handstand pushups', 29, 2, 2, 'Reps');
    case 30:
      return Handstands('One-arm handstand pushups', 30, 1, 5, 'Reps');

    default:
      return Handstands('Wall headstands', 1, 1, 10, 'Seconds');
  }
};

const Handstands = (
  variant: string,
  level: Level,
  sets: Sets,
  reps: number,
  unit: Unit
): Exercise => {
  return {
    group: 'Handstands',
    variant,
    level,
    sets,
    reps,
    unit,
    image: `./images/handstands/${level}.jpg`,
  };
};
