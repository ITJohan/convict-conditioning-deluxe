import { Level, Sets, Exercise } from '../Types';

export const PushupsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return WallPushups(1, 1, 10);
    case 2:
      return WallPushups(2, 2, 25);
    case 3:
      return WallPushups(3, 3, 50);

    case 4:
      return InclinePushups(4, 1, 10);
    case 5:
      return InclinePushups(5, 2, 210);
    case 6:
      return InclinePushups(6, 3, 40);

    case 7:
      return KneelingPushups(7, 1, 10);
    case 8:
      return KneelingPushups(8, 2, 15);
    case 9:
      return KneelingPushups(9, 3, 30);

    case 10:
      return HalfPushups(10, 1, 8);
    case 11:
      return HalfPushups(11, 2, 12);
    case 12:
      return HalfPushups(12, 2, 25);

    case 13:
      return FullPushups(13, 1, 5);
    case 14:
      return FullPushups(14, 2, 10);
    case 15:
      return FullPushups(15, 2, 20);

    case 16:
      return ClosePushups(16, 1, 5);
    case 17:
      return ClosePushups(17, 2, 10);
    case 18:
      return ClosePushups(18, 2, 20);

    case 19:
      return UnevenPushups(19, 1, 5);
    case 20:
      return UnevenPushups(20, 2, 10);
    case 21:
      return UnevenPushups(21, 2, 20);

    case 22:
      return HalfOneArmPushups(22, 1, 5);
    case 23:
      return HalfOneArmPushups(23, 2, 10);
    case 24:
      return HalfOneArmPushups(24, 2, 20);

    case 25:
      return LeverPushups(25, 1, 5);
    case 26:
      return LeverPushups(26, 2, 10);
    case 27:
      return LeverPushups(27, 2, 20);

    case 28:
      return OneArmPushups(28, 1, 5);
    case 29:
      return OneArmPushups(29, 2, 10);
    case 30:
      return OneArmPushups(30, 2, 20);

    default:
      return WallPushups(1, 1, 10);
  }
};

const WallPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Wall pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const InclinePushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Incline pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const KneelingPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Kneeling pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const HalfPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Half pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const FullPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Full pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const ClosePushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Close pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const UnevenPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Uneven pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const HalfOneArmPushups = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Half one arm pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const LeverPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'Lever pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};

const OneArmPushups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pushups',
    variant: 'One arm pushups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pushups/${level}.jpg`,
  };
};
