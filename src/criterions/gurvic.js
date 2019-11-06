import {
  A,
  alpha,
} from '../readingData';

import {
  getMinValue,
  getMaxValue,
} from '../utils';

export default () => {
  const H = [];

  A.forEach((str, key) => {
    H[key] = (alpha * getMinValue(str).min) + ((1 - alpha) * getMaxValue(str).max);
  });

  console.log(`Array H for Gurvice's criterion: ${H}`);
  console.log(`Optimal strategy by Gurvices's criterion: A[${getMaxValue(H).key}] with value ${getMaxValue(H).max}\n`);
};
