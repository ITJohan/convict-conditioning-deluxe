import { Level, Sets, Exercise } from '../Types';

export const PullupsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return VerticalPullups(1, 1, 10);
    case 2:
      return VerticalPullups(2, 2, 20);
    case 3:
      return VerticalPullups(3, 3, 40);

    case 4:
      return HorizontalPullups(4, 1, 10);
    case 5:
      return HorizontalPullups(5, 2, 20);
    case 6:
      return HorizontalPullups(6, 3, 30);

    case 7:
      return JackknifePullups(7, 1, 10);
    case 8:
      return JackknifePullups(8, 2, 15);
    case 9:
      return JackknifePullups(9, 3, 20);

    case 10:
      return HalfPullups(10, 1, 8);
    case 11:
      return HalfPullups(11, 2, 10);
    case 12:
      return HalfPullups(12, 2, 15);

    case 13:
      return FullPullups(13, 1, 5);
    case 14:
      return FullPullups(14, 2, 8);
    case 15:
      return FullPullups(15, 2, 10);

    case 16:
      return ClosePullups(16, 1, 5);
    case 17:
      return ClosePullups(17, 2, 8);
    case 18:
      return ClosePullups(18, 2, 20);

    case 19:
      return UnevenPullups(19, 1, 5);
    case 20:
      return UnevenPullups(20, 2, 7);
    case 21:
      return UnevenPullups(21, 2, 9);

    case 22:
      return HalfOneArmPullups(22, 1, 4);
    case 23:
      return HalfOneArmPullups(23, 2, 6);
    case 24:
      return HalfOneArmPullups(24, 2, 8);

    case 25:
      return AssistedOneArmPullups(25, 1, 3);
    case 26:
      return AssistedOneArmPullups(26, 2, 5);
    case 27:
      return AssistedOneArmPullups(27, 2, 7);

    case 28:
      return OneArmPullups(28, 1, 1);
    case 29:
      return OneArmPullups(29, 2, 3);
    case 30:
      return OneArmPullups(30, 2, 6);

    default:
      return VerticalPullups(1, 1, 10);
  }
};

const VerticalPullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Vertical pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const HorizontalPullups = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Horizontal pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const JackknifePullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Jackknife pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const HalfPullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Half pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const FullPullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Full pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const ClosePullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Close pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const UnevenPullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Uneven pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const HalfOneArmPullups = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Half one-arm pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const AssistedOneArmPullups = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Pullups',
    variant: 'Assisted one-arm pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};

const OneArmPullups = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Pullups',
    variant: 'One-arm pullups',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/pullups/${level}.jpg`,
  };
};
