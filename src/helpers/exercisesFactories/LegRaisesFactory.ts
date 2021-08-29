import { Level, Exercise, Group } from '../../models/Types';

const LegRaisesFactory = (level: Level): Exercise => {
  switch (level) {
    case 1:
      return {
        group: Group.legRaises,
        variant: 'Knee tucks',
        level,
        goals: [[10], [25, 25], [40, 40, 40]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 2:
      return {
        group: Group.legRaises,
        variant: 'Flat knee raises',
        level,
        goals: [[10], [20, 20], [35, 35, 35]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 3:
      return {
        group: Group.legRaises,
        variant: 'Flat bent leg raises',
        level,
        goals: [[10], [15, 15], [30, 30, 30]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 4:
      return {
        group: Group.legRaises,
        variant: 'Flat frog raises',
        level,
        goals: [[8], [15, 15], [25, 25]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 5:
      return {
        group: Group.legRaises,
        variant: 'Flat straight leg raises',
        level,
        goals: [[5], [10, 10], [20, 20]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 6:
      return {
        group: Group.legRaises,
        variant: 'Hanging knee raises',
        level,
        goals: [[5], [10, 10], [15, 15]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 7:
      return {
        group: Group.legRaises,
        variant: 'Hanging bent leg raises',
        level,
        goals: [[5], [10, 10], [15, 15]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 8:
      return {
        group: Group.legRaises,
        variant: 'Hanging frog raises',
        level,
        goals: [[5], [10, 10], [15, 15]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 9:
      return {
        group: Group.legRaises,
        variant: 'Partial straight leg raises',
        level,
        goals: [[5], [10, 10], [15, 15]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
    case 10:
      return {
        group: Group.legRaises,
        variant: 'Hanging straight leg raises',
        level,
        goals: [[5], [10, 10], [30, 30]],
        unit: 'Reps',
        image: `../images/legRaises/${level}.jpg`,
      };
  }
};

export default LegRaisesFactory;
