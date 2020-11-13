import {
  A,
  Q,
  P,
  columns,
  lines,
  columnsOfP,
} from './dataForCriterion';
import { getTransposedMatrix, getLimitValueInVector } from './utils';

export default () => {
  const Qjs = new Array(columns).fill(new Array(columnsOfP).fill(0));
  const denom = new Array(columnsOfP).fill(0);
  const newP = getTransposedMatrix(P, columns, columnsOfP);
  const newQjs = getTransposedMatrix(Qjs, columnsOfP, columns);
  const PBs = [];
  const Pque = [];
  const maximusOfa = new Array(columnsOfP);
  const a = new Array(lines).fill(new Array(columnsOfP).fill(0));

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
      sumOfPBs += Q[j] * P[s][j];
      newQjs[s][j] = (Q[j] * newP[j][s]) / denom[s];
    }
    PBs.push(sumOfPBs);
    sumOfPBs = 0;
  }

  for (let i = 0; i < lines; i += 1) {
    for (let s = 0; s < columnsOfP; s += 1) {
      for (let j = 0; j < columns; j += 1) {
        a[i][s] += newQjs[s][j] * A[i][j];
      }
    }
  }

  const transpMatrix = getTransposedMatrix(a, columnsOfP, lines);
  transpMatrix.forEach((str, key) => {
    maximusOfa[key] = getLimitValueInVector(str, 'max').limitValue;
  });

  for (let s = 0; s < columnsOfP; s += 1) {
    averageWinWithoutExperiment += PBs[s] * maximusOfa[s];
  }

  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      sumOfPque += Q[j] * A[i][j];
    }
    Pque.push(sumOfPque);
    sumOfPque = 0;
  }

  console.log(averageWinWithoutExperiment);
  console.log(getLimitValueInVector(Pque, 'max').limitValue);
  return averageWinWithoutExperiment - getLimitValueInVector(Pque, 'max').limitValue;
};
