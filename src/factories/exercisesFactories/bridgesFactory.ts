import { Level, Group, Exercise } from '../../types';

const bridgesFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return {
        group: Group.bridges,
        variant: 'Short bridges',
        level,
        goals: [50, 50, 50],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 2:
      return {
        group: Group.bridges,
        variant: 'Straight bridges',
        level,
        goals: [50, 50, 50],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 3:
      return {
        group: Group.bridges,
        variant: 'Angled bridges',
        level,
        goals: [30, 30, 30],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 4:
      return {
        group: Group.bridges,
        variant: 'Head bridges',
        level,
        goals: [25, 25, 25],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 5:
      return {
        group: Group.bridges,
        variant: 'Half bridges',
        level,
        goals: [20, 20, 20],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 6:
      return {
        group: Group.bridges,
        variant: 'Full bridges',
        level,
        goals: [15, 15],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 7:
      return {
        group: Group.bridges,
        variant: 'Wall walking bridges (down)',
        level,
        goals: [10, 10],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 8:
      return {
        group: Group.bridges,
        variant: 'Wall walking bridges (up)',
        level,
        goals: [8, 8],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 9:
      return {
        group: Group.bridges,
        variant: 'Closing bridges',
        level,
        goals: [6, 6],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
    case 10:
      return {
        group: Group.bridges,
        variant: 'Stand-to-stand bridges',
        level,
        goals: [10, 10],
        unit: 'Reps',
        image: `../images/bridges/${level}.jpg`,
      };
  }
};

export default bridgesFactory;
