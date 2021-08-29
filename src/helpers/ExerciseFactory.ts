import { Exercise, Group, Level } from '../models/Types';
import BridgesFactory from './exercisesFactories/BridgesFactory';
import HandstandsFactory from './exercisesFactories/HandstandsFactory';
import LegRaisesFactory from './exercisesFactories/LegRaisesFactory';
import PullupsFactory from './exercisesFactories/PullupsFactory';
import PushupsFactory from './exercisesFactories/PushupsFactory';
import SquatsFactory from './exercisesFactories/SquatsFactory';

export const ExerciseFactory = (group: Group, level: Level): Exercise => {
  switch(group) {
    case Group.bridges: return BridgesFactory(level);
    case Group.handstands: return HandstandsFactory(level);
    case Group.legRaises: return LegRaisesFactory(level);
    case Group.pullups: return PullupsFactory(level);
    case Group.pushups: return PushupsFactory(level);
    case Group.squats: return SquatsFactory(level);
    default: throw new Error('Bad argument.');
  }
};