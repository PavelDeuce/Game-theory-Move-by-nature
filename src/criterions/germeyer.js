import { A, Q } from '../dataForCriterion';
import { getLimitValueInVector } from '../utils';

export default () => {
  const multipleAonQ = [...A];
  const minByMilteple = [];

  A.forEach((line, i) => {
    line.forEach((column, j) => {
      multipleAonQ[i][j] = A[i][j] * Q[i];
    });
  });

  multipleAonQ.forEach((line) => {
    minByMilteple.push(getLimitValueInVector(line, 'min').limitValue);
  });

  const filtered = minByMilteple.filter((a) => a);
  const germeyer = getLimitValueInVector(filtered, 'max');

  console.log(`Optimal strategy by Germeyer's criterion: A[${germeyer.key}] with value ${germeyer.limitValue}\n`);
};
