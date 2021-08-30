import { Level, Exercise, Group } from '../../models/types';

const handstandsFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return {
        group: Group.handstands,
        variant: 'Wall headstands',
        level,
        goals: [120],
        unit: 'Seconds',
        image: `../images/handstands/${level}.jpg`,
      };
    case 2:
      return {
        group: Group.handstands,
        variant: 'Crow stands',
        level,
        goals: [60],
        unit: 'Seconds',
        image: `../images/handstands/${level}.jpg`,
      };
    case 3:
      return {
        group: Group.handstands,
        variant: 'Wall handstands',
        level,
        goals: [120],
        unit: 'Seconds',
        image: `../images/handstands/${level}.jpg`,
      };
    case 4:
      return {
        group: Group.handstands,
        variant: 'Half handstand pushups',
        level,
        goals: [20, 20],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
    case 5:
      return {
        group: Group.handstands,
        variant: 'Handstand pushups',
        level,
        goals: [15, 15],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
    case 6:
      return {
        group: Group.handstands,
        variant: 'Close handstand pushups',
        level,
        goals: [12, 12],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
    case 7:
      return {
        group: Group.handstands,
        variant: 'Uneven handstand pushups',
        level,
        goals: [10, 10],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
    case 8:
      return {
        group: Group.handstands,
        variant: '1/2 one-arm handstand pushups',
        level,
        goals: [8, 8],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
    case 9:
      return {
        group: Group.handstands,
        variant: 'Level handstand pushups',
        level,
        goals: [6, 6],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
    case 10:
      return {
        group: Group.handstands,
        variant: 'One-arm handstand pushups',
        level,
        goals: [5],
        unit: 'Reps',
        image: `../images/handstands/${level}.jpg`,
      };
  }
};

export default handstandsFactory;
