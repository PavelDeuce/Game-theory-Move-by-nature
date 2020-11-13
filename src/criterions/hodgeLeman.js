import { alpha, A, Q } from '../dataForCriterion';
import { getLimitValueInVector } from '../utils';

export default () => {
  const multipleAonQ = [...A];
  const minByColumnsOfA = [];
  const maxByMultiple = [];
  const resultArray = [];

  A.forEach((line, i) => {
    line.forEach((column, j) => {
      multipleAonQ[i][j] = A[i][j] * Q[i];
    });
  });

  multipleAonQ.forEach((line) => {
    maxByMultiple.push(getLimitValueInVector(line, 'max').limitValue);
  });

  const leftVector = maxByMultiple.map((item) => item * alpha);

  A.forEach((line) => {
    minByColumnsOfA.push(getLimitValueInVector(line, 'min').limitValue);
  });

  const rightVector = minByColumnsOfA.map((item) => item * (1 - alpha));

  leftVector.forEach((item, index) => {
    resultArray[index] = leftVector[index] + rightVector[index];
  });

  const hodgeLeman = getLimitValueInVector(resultArray, 'max');
  console.log(`Optimal strategy by Hodge-Leman's criterion: A[${hodgeLeman.key}] with value ${hodgeLeman.limitValue}\n`);
};
