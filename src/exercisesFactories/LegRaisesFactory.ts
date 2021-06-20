import { Level, Sets, Exercise } from '../Types';

export const LegRaisesFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return KneeTucks(1, 1, 10);
    case 2:
      return KneeTucks(2, 2, 25);
    case 3:
      return KneeTucks(3, 3, 40);

    case 4:
      return FlatKneeRaises(4, 1, 10);
    case 5:
      return FlatKneeRaises(5, 2, 20);
    case 6:
      return FlatKneeRaises(6, 3, 35);

    case 7:
      return FlatBentLegRaises(7, 1, 10);
    case 8:
      return FlatBentLegRaises(8, 2, 15);
    case 9:
      return FlatBentLegRaises(9, 3, 30);

    case 10:
      return FlatFrogRaises(10, 1, 8);
    case 11:
      return FlatFrogRaises(11, 2, 15);
    case 12:
      return FlatFrogRaises(12, 2, 25);

    case 13:
      return FlatStraightLegRaises(13, 1, 5);
    case 14:
      return FlatStraightLegRaises(14, 2, 10);
    case 15:
      return FlatStraightLegRaises(15, 2, 20);

    case 16:
      return HangingKneeRaises(16, 1, 5);
    case 17:
      return HangingKneeRaises(17, 2, 10);
    case 18:
      return HangingKneeRaises(18, 2, 15);

    case 19:
      return HangingBentLegRaises(19, 1, 5);
    case 20:
      return HangingBentLegRaises(20, 2, 10);
    case 21:
      return HangingBentLegRaises(21, 2, 15);

    case 22:
      return HangingFrogRaises(22, 1, 5);
    case 23:
      return HangingFrogRaises(23, 2, 10);
    case 24:
      return HangingFrogRaises(24, 2, 15);

    case 25:
      return PartialStraightLegRaises(25, 1, 5);
    case 26:
      return PartialStraightLegRaises(26, 2, 10);
    case 27:
      return PartialStraightLegRaises(27, 2, 15);

    case 28:
      return HangingStraightLegRaises(28, 1, 5);
    case 29:
      return HangingStraightLegRaises(29, 2, 10);
    case 30:
      return HangingStraightLegRaises(30, 2, 30);

    default:
      return KneeTucks(1, 1, 10);
  }
};

const KneeTucks = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Knee tucks',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const FlatKneeRaises = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Flat knee raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const FlatBentLegRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Flat bent leg raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const FlatFrogRaises = (level: Level, sets: Sets, reps: number): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Flat frog raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const FlatStraightLegRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Flat straight leg raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const HangingKneeRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Hanging knee raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const HangingBentLegRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Hanging bent leg raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const HangingFrogRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Hanging frog raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const PartialStraightLegRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Partial straight leg raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};

const HangingStraightLegRaises = (
  level: Level,
  sets: Sets,
  reps: number
): Exercise => {
  return {
    group: 'Leg raises',
    variant: 'Hanging straight leg raises',
    level,
    sets,
    reps,
    unit: 'Reps',
    image: `./images/legRaises/${level}.jpg`,
  };
};
