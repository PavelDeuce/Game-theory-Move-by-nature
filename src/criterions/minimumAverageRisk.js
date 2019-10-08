import {
  Q,
  R,
  getMinValue,
  lines,
  columns,
  getTransposedMatrix,
} from '../utils';

export default () => {
  const Rque = new Array(lines).fill(0);
  const newR = getTransposedMatrix(R, lines, columns);

  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      Rque[i] += (newR[i][j] * Q[j]);
    }
  }

  console.log(`Multiplication R on Q : ${Rque}`);
  console.log(`Optimal strategy by Minimum average risk criterion: A[${getMinValue(Rque).key}] with value ${getMinValue(Rque).min}\n`);
  return getMinValue(Rque).min;
};
