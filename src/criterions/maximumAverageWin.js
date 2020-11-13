import {
  A,
  Q,
  lines,
  columns,
} from '../dataForCriterion';

import { getMaxValueInVector } from '../utils';

export default () => {
  const P = new Array(lines).fill(0);

  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      P[i] += (A[i][j] * Q[j]);
    }
  }

  const maximumAverageWin = getMaxValueInVector(P);
  console.log(`Optimal strategy by Maximum average win criterion: A[${maximumAverageWin.key}] with value ${maximumAverageWin.max}\n`);
};
