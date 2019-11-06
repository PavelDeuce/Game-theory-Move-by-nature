import { A } from '../readingData';

import {
  getMinValue,
  getMaxValue,
} from '../utils';

export default () => {
  const minValues = [];

  A.forEach((str, key) => {
    minValues[key] = getMinValue(str).min;
  });

  console.log('Initial Matrix:');
  console.log(A);
  console.log(`Minimum matrix values : ${minValues}`);
  console.log(`Optimal strategy by Valde's criterion : A[${getMaxValue(minValues).key}] with value ${getMaxValue(minValues).max}\n`);
};
