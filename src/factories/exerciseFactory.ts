import { Exercise, Group, Level } from '../types';
import bridgesFactory from './exercisesFactories/bridgesFactory';
import handstandsFactory from './exercisesFactories/handstandsFactory';
import legRaisesFactory from './exercisesFactories/legRaisesFactory';
import pullupsFactory from './exercisesFactories/pullupsFactory';
import pushupsFactory from './exercisesFactories/pushupsFactory';
import squatsFactory from './exercisesFactories/squatsFactory';

export const exerciseFactory = (group: Group, level: Level): Exercise => {
  switch(group) {
    case Group.bridges: return bridgesFactory(level);
    case Group.handstands: return handstandsFactory(level);
    case Group.legRaises: return legRaisesFactory(level);
    case Group.pullups: return pullupsFactory(level);
    case Group.pushups: return pushupsFactory(level);
    case Group.squats: return squatsFactory(level);
    default: throw new Error('Bad argument.');
  }
};