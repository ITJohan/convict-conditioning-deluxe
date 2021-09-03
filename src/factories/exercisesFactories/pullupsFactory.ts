import { Level, Exercise, Group } from '../../types';

const pullupsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return {
        group: Group.pullups,
        variant: 'Vertical pullups',
        level,
        goals: [40, 40, 40],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 2:
      return {
        group: Group.pullups,
        variant: 'Horizontal pullups',
        level,
        goals: [30, 30, 30],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 3:
      return {
        group: Group.pullups,
        variant: 'Jackknife pullups',
        level,
        goals: [20, 20, 20],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 4:
      return {
        group: Group.pullups,
        variant: 'Half pullups',
        level,
        goals: [15, 15],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 5:
      return {
        group: Group.pullups,
        variant: 'Full pullups',
        level,
        goals: [10, 10],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 6:
      return {
        group: Group.pullups,
        variant: 'Close pullups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 7:
      return {
        group: Group.pullups,
        variant: 'Uneven pullups',
        level,
        goals: [9, 9],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 8:
      return {
        group: Group.pullups,
        variant: '1/2 one-arm pullups',
        level,
        goals: [8, 8],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 9:
      return {
        group: Group.pullups,
        variant: 'Assisted one-arm pullups',
        level,
        goals: [7, 7],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
    case 10:
      return {
        group: Group.pullups,
        variant: 'One-arm pullups',
        level,
        goals: [6, 6],
        unit: 'Reps',
        image: `../images/pullups/${level}.jpg`,
      };
  }
};

export default pullupsFactory;
