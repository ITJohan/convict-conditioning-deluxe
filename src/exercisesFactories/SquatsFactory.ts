import { Level, Sets, Exercise } from '../Types';

export const SquatsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return ShoulderstandSquats(1, 1, 10);
    case 2:
      return ShoulderstandSquats(2, 2, 25);
    case 3:
      return ShoulderstandSquats(3, 3, 50);

    case 4:
      return JackknifeSquats(4, 1, 10);
    case 5:
      return JackknifeSquats(5, 2, 20);
    case 6:
      return JackknifeSquats(6, 3, 40);

    case 7:
      return SupportedSquats(7, 1, 10);
    case 8:
      return SupportedSquats(8, 2, 15);
    case 9:
      return SupportedSquats(9, 3, 30);

    case 10:
      return HalfSquats(10, 1, 8);
    case 11:
      return HalfSquats(11, 2, 35);
    case 12:
      return HalfSquats(12, 2, 50);

    case 13:
      return FullSquats(13, 1, 5);
    case 14:
      return FullSquats(14, 2, 10);
    case 15:
      return FullSquats(15, 2, 30);

    case 16:
      return CloseSquats(16, 1, 5);
    case 17:
      return CloseSquats(17, 2, 10);
    case 18:
      return CloseSquats(18, 2, 20);

    case 19:
      return UnevenSquats(19, 1, 5);
    case 20:
      return UnevenSquats(20, 2, 10);
    case 21:
      return UnevenSquats(21, 2, 20);

    case 22:
      return HalfOneLegSquats(22, 1, 5);
    case 23:
      return HalfOneLegSquats(23, 2, 10);
    case 24:
      return HalfOneLegSquats(24, 2, 20);

    case 25:
      return AssistedOneLegSquats(25, 1, 5);
    case 26:
      return AssistedOneLegSquats(26, 2, 10);
    case 27:
      return AssistedOneLegSquats(27, 2, 20);

    case 28:
      return OneLegSquats(28, 1, 5);
    case 29:
      return OneLegSquats(29, 2, 10);
    case 30:
      return OneLegSquats(30, 2, 50);

    default:
      return ShoulderstandSquats(1, 1, 10);
  }
};

const ShoulderstandSquats = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Squats',
    variant: 'Knee tucks',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const JackknifeSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Jackknife squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const SupportedSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Supported squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const HalfSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Half squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const FullSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Full squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const CloseSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Close squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const UnevenSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Uneven squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const HalfOneLegSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'Half one-leg squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const AssistedOneLegSquats = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Squats',
    variant: 'Assisted one-leg squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};

const OneLegSquats = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Squats',
    variant: 'One-leg squats',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/squats/${level}.jpg`,
  };
};
