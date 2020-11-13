import {
  R,
  lines,
  columns,
} from '../dataForCriterion';

import {
  getMaxValueInVector,
  getMinValueInVector,
  getTransposedMatrix,
} from '../utils';

export default () => {
  const max = [];

  const matrixSavage = getTransposedMatrix(R, lines, columns);
  matrixSavage.forEach((str, key) => {
    max[key] = getMaxValueInVector(str).max;
  });

  const savage = getMinValueInVector(max);
  console.log(`Optimal strategy by Savage's criterion: A[${savage.key}] with value ${savage.min}\n`);
};
