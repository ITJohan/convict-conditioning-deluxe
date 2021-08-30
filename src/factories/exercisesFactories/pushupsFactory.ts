import { Level, Exercise, Group } from '../../models/types';

const pushupsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return {
        group: Group.pushups,
        variant: 'Wall pushups',
        level,
        goals: [50, 50, 50],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 2:
      return {
        group: Group.pushups,
        variant: 'Incline pushups',
        level,
        goals: [40, 40, 40],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 3:
      return {
        group: Group.pushups,
        variant: 'Kneeling pushups',
        level,
        goals: [30, 30, 30],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 4:
      return {
        group: Group.pushups,
        variant: 'Half pushups',
        level,
        goals: [25, 25],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 5:
      return {
        group: Group.pushups,
        variant: 'Full pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 6:
      return {
        group: Group.pushups,
        variant: 'Close pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 7:
      return {
        group: Group.pushups,
        variant: 'Uneven pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 8:
      return {
        group: Group.pushups,
        variant: '1/2 one-arm pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 9:
      return {
        group: Group.pushups,
        variant: 'Lever pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
    case 10:
      return {
        group: Group.pushups,
        variant: 'One-arm pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pushups/${level}.jpg`,
      };
  }
};

export default pushupsFactory;
