import {
  A,
  Q,
  P,
  columns,
  lines,
  columnsOfP,
} from './readingData';

import {
  getTransposedMatrix,
  getMaxValue,
} from './utils';

export default () => {
  const Qjs = new Array(columns).fill(new Array(columnsOfP).fill(0));
  const denom = new Array(columnsOfP).fill(0);
  const newP = getTransposedMatrix(P, columns, columnsOfP);
  const newQjs = getTransposedMatrix(Qjs, columnsOfP, columns);
  const PBs = [];
  const Pque = [];
  const maximusOfa = new Array(columnsOfP);
  const a = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  let sumOfDenom = 0;
  let sumOfPque = 0;
  let sumOfPBs = 0;
  let averageWinWithoutExperiment = 0;

  for (let s = 0; s < columnsOfP; s += 1) {
    for (let j = 0; j < columns; j += 1) {
      sumOfDenom += Q[j] * newP[j][s];
    }
    denom[s] = sumOfDenom;
    sumOfDenom = 0;
  }

  for (let s = 0; s < columnsOfP; s += 1) {
    for (let j = 0; j < columns; j += 1) {
      newQjs[s][j] = (Q[j] * newP[j][s]) / denom[s];
    }
  }
  console.log(newQjs);

  for (let i = 0; i < lines; i += 1) {
    for (let s = 0; s < columnsOfP; s += 1) {
      for (let j = 0; j < columns; j += 1) {
        a[i][s] += newQjs[s][j] * A[i][j];
      }
    }
  }
  console.log(a);

  for (let s = 0; s < columnsOfP; s += 1) {
    for (let j = 0; j < columns; j += 1) {
      sumOfPBs += Q[j] * P[s][j];
    }
    PBs.push(sumOfPBs);
    sumOfPBs = 0;
  }

  console.log(PBs);

  const transpMatrix = getTransposedMatrix(a, columnsOfP, lines);
  transpMatrix.forEach((str, key) => {
    maximusOfa[key] = getMaxValue(str).max;
  });
  console.log(maximusOfa);

  for (let s = 0; s < columnsOfP; s += 1) {
    averageWinWithoutExperiment += PBs[s] * maximusOfa[s];
  }

  console.log(averageWinWithoutExperiment);

  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      sumOfPque += Q[j] * A[i][j];
    }
    Pque.push(sumOfPque);
    sumOfPque = 0;
  }

  console.log(getMaxValue(Pque).max);
  return averageWinWithoutExperiment - getMaxValue(Pque).max;
};
