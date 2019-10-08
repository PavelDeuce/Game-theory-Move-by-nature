import {
  R,
  getMaxValue,
  getMinValue,
  getTransposedMatrix,
  lines,
  columns,
} from '../utils';

export default () => {
  const max = [];

  const matrixSavage = getTransposedMatrix(R, lines, columns);
  matrixSavage.forEach((str, key) => {
    max[key] = getMaxValue(str).max;
  });

  console.log('Matrix of risk (R):');
  console.log(matrixSavage);
  console.log(`Min values of matrix R : ${max}`);
  console.log(`Optimal strategy by Savage's criterion: A[${getMinValue(max).key}] with value ${getMinValue(max).min}\n`);
};
