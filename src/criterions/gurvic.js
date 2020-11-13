import {
  A,
  alpha,
} from '../dataForCriterion';

import {
  getMinValueInVector,
  getMaxValueInVector,
} from '../utils';

export default () => {
  const H = [];

  A.forEach((str, key) => {
    H[key] = (alpha * getMinValueInVector(str).min) + ((1 - alpha) * getMaxValueInVector(str).max);
  });

  const gurvic = getMaxValueInVector(H);
  console.log(`Optimal strategy by Gurvices's criterion: A[${gurvic.key}] with value ${gurvic.max}\n`);
};
