import { R, lines, columns } from '../dataForCriterion';
import { getLimitValueInVector, getTransposedMatrix } from '../utils';

export default () => {
  const max = [];

  const matrixSavage = getTransposedMatrix(R, lines, columns);
  matrixSavage.forEach((str, key) => {
    max[key] = getLimitValueInVector(str, 'max').limitValue;
  });

  const savage = getLimitValueInVector(max, 'min');
  console.log(`Optimal strategy by Savage's criterion: A[${savage.key}] with value ${savage.limitValue}\n`);
};
