import { Level, Sets, Exercise, Unit } from '../types';

export const LegRaisesFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return LegRaises('Knee tucks', 1, 1, 10, 'Reps');
    case 2:
      return LegRaises('Knee tucks', 2, 2, 25, 'Reps');
    case 3:
      return LegRaises('Knee tucks', 3, 3, 40, 'Reps');

    case 4:
      return LegRaises('Flat knee raises', 4, 1, 10, 'Reps');
    case 5:
      return LegRaises('Flat knee raises', 5, 2, 20, 'Reps');
    case 6:
      return LegRaises('Flat knee raises', 6, 3, 35, 'Reps');

    case 7:
      return LegRaises('Flat bent leg raises', 7, 1, 10, 'Reps');
    case 8:
      return LegRaises('Flat bent leg raises', 8, 2, 15, 'Reps');
    case 9:
      return LegRaises('Flat bent leg raises', 9, 3, 30, 'Reps');

    case 10:
      return LegRaises('Flat frog raises', 10, 1, 8, 'Reps');
    case 11:
      return LegRaises('Flat frog raises', 11, 2, 15, 'Reps');
    case 12:
      return LegRaises('Flat frog raises', 12, 2, 25, 'Reps');

    case 13:
      return LegRaises('Flat straight leg raises', 13, 1, 5, 'Reps');
    case 14:
      return LegRaises('Flat straight leg raises', 14, 2, 10, 'Reps');
    case 15:
      return LegRaises('Flat straight leg raises', 15, 2, 20, 'Reps');

    case 16:
      return LegRaises('Hanging knee raises', 16, 1, 5, 'Reps');
    case 17:
      return LegRaises('Hanging knee raises', 17, 2, 10, 'Reps');
    case 18:
      return LegRaises('Hanging knee raises', 18, 2, 15, 'Reps');

    case 19:
      return LegRaises('Hanging bent leg raises', 19, 1, 5, 'Reps');
    case 20:
      return LegRaises('Hanging bent leg raises', 20, 2, 10, 'Reps');
    case 21:
      return LegRaises('Hanging bent leg raises', 21, 2, 15, 'Reps');

    case 22:
      return LegRaises('Hanging frog raises', 22, 1, 5, 'Reps');
    case 23:
      return LegRaises('Hanging frog raises', 23, 2, 10, 'Reps');
    case 24:
      return LegRaises('Hanging frog raises', 24, 2, 15, 'Reps');

    case 25:
      return LegRaises('Partial straight leg raises', 25, 1, 5, 'Reps');
    case 26:
      return LegRaises('Partial straight leg raises', 26, 2, 10, 'Reps');
    case 27:
      return LegRaises('Partial straight leg raises', 27, 2, 15, 'Reps');

    case 28:
      return LegRaises('Hanging straight leg raises', 28, 1, 5, 'Reps');
    case 29:
      return LegRaises('Hanging straight leg raises', 29, 2, 10, 'Reps');
    case 30:
      return LegRaises('Hanging straight leg raises', 30, 2, 30, 'Reps');

    default:
      return LegRaises('Knee tucks', 1, 1, 10, 'Reps');
  }
};

const LegRaises = (
  variant: string,
  level: Level,
  sets: Sets,
  reps: number,
  unit: Unit
): Exercise => {
  return {
    group: 'Leg raises',
    variant,
    level,
    sets,
    reps,
    unit,
    image: `./images/legRaises/${level}.jpg`,
  };
};
