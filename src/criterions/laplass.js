import {
  A,
  columns,
} from '../dataForCriterion';

import { getMaxValueInVector } from '../utils';

export default () => {
  const rowSum = A.map((r) => r.reduce((a, b) => a + b));
  const L = rowSum.map((value) => (1 / columns) * value);

  const laplass = getMaxValueInVector(L);
  console.log(`Optimal strategy by Laplass's criterion: A[${laplass.key}] with value ${laplass.max}\n`);
};
