import { A, columns } from '../dataForCriterion';
import { getLimitValueInVector } from '../utils';

export default () => {
  const rowSum = A.map((r) => r.reduce((a, b) => a + b));
  const L = rowSum.map((value) => (1 / columns) * value);

  const laplass = getLimitValueInVector(L, 'max');
  console.log(`Optimal strategy by Laplass's criterion: A[${laplass.key}] with value ${laplass.limitValue}\n`);
};
