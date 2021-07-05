import { Level, Sets, Exercise, Unit } from '../types';

// TODO: Need to refactor all exercises to return a combination of the 3 level groupings

const BridgesFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return Bridges('Short bridges', 1, 1, 10, 'Reps');
    case 2:
      return Bridges('Short bridges', 2, 2, 25, 'Reps');
    case 3:
      return Bridges('Short bridges', 3, 3, 50, 'Reps');

    case 4:
      return Bridges('Straight bridges', 4, 1, 10, 'Reps');
    case 5:
      return Bridges('Straight bridges', 5, 2, 20, 'Reps');
    case 6:
      return Bridges('Straight bridges', 6, 3, 40, 'Reps');

    case 7:
      return Bridges('Angled bridges', 7, 1, 8, 'Reps');
    case 8:
      return Bridges('Angled bridges', 8, 2, 15, 'Reps');
    case 9:
      return Bridges('Angled bridges', 9, 3, 30, 'Reps');

    case 10:
      return Bridges('Head bridges', 10, 1, 8, 'Reps');
    case 11:
      return Bridges('Head bridges', 11, 2, 15, 'Reps');
    case 12:
      return Bridges('Head bridges', 12, 2, 25, 'Reps');

    case 13:
      return Bridges('Half bridges', 13, 1, 8, 'Reps');
    case 14:
      return Bridges('Half bridges', 14, 2, 15, 'Reps');
    case 15:
      return Bridges('Half bridges', 15, 2, 20, 'Reps');

    case 16:
      return Bridges('Full bridges', 16, 1, 6, 'Reps');
    case 17:
      return Bridges('Full bridges', 17, 2, 10, 'Reps');
    case 18:
      return Bridges('Full bridges', 18, 2, 15, 'Reps');

    case 19:
      return Bridges('Wall walking bridges (down)', 19, 1, 3, 'Reps');
    case 20:
      return Bridges('Wall walking bridges (down)', 20, 2, 6, 'Reps');
    case 21:
      return Bridges('Wall walking bridges (down)', 21, 2, 10, 'Reps');

    case 22:
      return Bridges('Wall walking bridges (up)', 22, 1, 2, 'Reps');
    case 23:
      return Bridges('Wall walking bridges (up)', 23, 2, 4, 'Reps');
    case 24:
      return Bridges('Wall walking bridges (up)', 24, 2, 8, 'Reps');

    case 25:
      return Bridges('Closing bridges', 25, 1, 1, 'Reps');
    case 26:
      return Bridges('Closing bridges', 26, 2, 3, 'Reps');
    case 27:
      return Bridges('Closing bridges', 27, 2, 6, 'Reps');

    case 28:
      return Bridges('Stand-to-stand bridges', 28, 1, 1, 'Reps');
    case 29:
      return Bridges('Stand-to-stand bridges', 29, 2, 3, 'Reps');
    case 30:
      return Bridges('Stand-to-stand bridges', 30, 2, 10, 'Reps');

    default:
      return Bridges('Short bridges', 1, 1, 10, 'Reps');
  }
};

const Bridges = (
  variant: string,
  level: Level,
  sets: Sets,
  reps: number,
  unit: Unit
): Exercise => {
  return {
    group: 'Bridges',
    variant,
    level,
    sets,
    reps,
    unit,
    image: `../images/bridges/${level}.jpg`,
  };
};

export default BridgesFactory;
