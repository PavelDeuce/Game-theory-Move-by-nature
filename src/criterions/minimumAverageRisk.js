import {
  Q,
  R,
  lines,
  columns,
} from '../dataForCriterion';

import {
  getMinValueInVector,
  getTransposedMatrix,
} from '../utils';

export default () => {
  const Rque = new Array(lines).fill(0);
  const newR = getTransposedMatrix(R, lines, columns);

  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      Rque[i] += (newR[i][j] * Q[j]);
    }
  }

  const minimumAverageRisk = getMinValueInVector(Rque);
  console.log(`Optimal strategy by Minimum average risk criterion: A[${minimumAverageRisk.key}] with value ${minimumAverageRisk.min}\n`);
  return minimumAverageRisk.min;
};
