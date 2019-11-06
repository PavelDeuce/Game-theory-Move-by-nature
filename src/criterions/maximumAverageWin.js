import {
  A,
  Q,
  lines,
  columns,
} from '../readingData';

import { getMaxValue } from '../utils';

export default () => {
  const P = new Array(A.length).fill(0);

  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      P[i] += (A[i][j] * Q[j]);
    }
  }

  console.log(`Multiplication A on Q : ${P}`);
  console.log(`Optimal strategy by Maximum average win criterion: A[${getMaxValue(P).key}] with value ${getMaxValue(P).max}\n`);
};
