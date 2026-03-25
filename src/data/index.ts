import { levels } from './levels1-5';
import { levels6to10 } from './levels6-10';
import { Level } from '../types';

export const allLevels: Level[] = [...levels, ...levels6to10];

export { glossaryTerms } from './glossary';
