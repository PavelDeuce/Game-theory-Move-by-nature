import { A, Q, lines } from '../dataForCriterion';
import { getLimitValueInVector } from '../utils';

export default () => {
  const P = new Array(lines).fill(0);

  A.forEach((line, i) => {
    line.forEach((column, j) => {
      P[i] += (A[i][j] * Q[j]);
    });
  });

  const maximumAverageWin = getLimitValueInVector(P, 'max');
  console.log(`Optimal strategy by Maximum average win criterion: A[${maximumAverageWin.key}] with value ${maximumAverageWin.limitValue}\n`);
};
