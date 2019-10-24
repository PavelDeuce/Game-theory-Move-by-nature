import {
  Q,
  P,
  columns,
  columnsOfP,
  getTransposedMatrix,
} from './utils';

export default () => {
  const Qm = new Array(columns).fill(new Array(columnsOfP).fill(0));
  const denom = new Array(columnsOfP).fill(0);
  const newP = getTransposedMatrix(P, columns, columnsOfP);
  const newQm = getTransposedMatrix(Qm, columnsOfP, columns);
  let sum = 0;

  for (let s = 0; s < columnsOfP; s += 1) {
    for (let j = 0; j < columns; j += 1) {
      sum += Q[j] * newP[j][s];
    }
    denom[s] = sum;
    sum = 0;
  }
  console.log(denom);

  for (let s = 0; s < columnsOfP; s += 1) {
    for (let j = 0; j < columns; j += 1) {
      newQm[s][j] = (Q[j] * newP[j][s]) / denom[s];
    }
  }
  console.log(newQm);
};
