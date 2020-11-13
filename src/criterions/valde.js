import { A } from '../dataForCriterion';

import {
  getMinValueInVector,
  getMaxValueInVector,
} from '../utils';

export default () => {
  const minValues = [];

  A.forEach((str, key) => {
    minValues[key] = getMinValueInVector(str).min;
  });

  const valde = getMaxValueInVector(minValues);

  console.log(`Optimal strategy by Valde's criterion : A[${valde.key}] with value ${valde.max}\n`);
};
