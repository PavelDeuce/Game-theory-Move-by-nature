import {
  alpha,
  A,
  Q,
} from '../dataForCriterion';
import { getMaxValueInVector, getMinValueInVector } from '../utils';

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
    maxByMultiple.push(getMaxValueInVector(line).max);
  });

  const leftVector = maxByMultiple.map((item) => item * alpha);

  A.forEach((line) => {
    minByColumnsOfA.push(getMinValueInVector(line).min);
  });

  const rightVector = minByColumnsOfA.map((item) => item * (1 - alpha));

  leftVector.forEach((item, index) => {
    resultArray[index] = leftVector[index] + rightVector[index];
  });

  const hodgeLeman = getMaxValueInVector(resultArray);
  console.log(`Optimal strategy by Hodge-Leman's criterion: A[${hodgeLeman.key}] with value ${hodgeLeman.max}\n`);
};
