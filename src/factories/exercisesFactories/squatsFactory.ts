import { Level, Exercise, Group } from '../../models/types';

const squatsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return {
        group: Group.squats,
        variant: 'Shoulderstand squats',
        level,
        goals: [50, 50, 50],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 2:
      return {
        group: Group.squats,
        variant: 'Jackknife squats',
        level,
        goals: [40, 40, 40],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 3:
      return {
        group: Group.squats,
        variant: 'Supported squats',
        level,
        goals: [30, 30, 30],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 4:
      return {
        group: Group.squats,
        variant: 'Half squats',
        level,
        goals: [50, 50],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 5:
      return {
        group: Group.squats,
        variant: 'Full squats',
        level,
        goals: [30, 30],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 6:
      return {
        group: Group.squats,
        variant: 'Close squats',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 7:
      return {
        group: Group.squats,
        variant: 'Uneven squats',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 8:
      return {
        group: Group.squats,
        variant: '1/2 one-leg squats',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 9:
      return {
        group: Group.squats,
        variant: 'Assisted one-leg squats',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
    case 10:
      return {
        group: Group.squats,
        variant: 'One-leg squats',
        level,
        goals: [50, 50],
        unit: 'Reps',
        image: `../images/squats/${level}.jpg`,
      };
  }
};

export default squatsFactory;
