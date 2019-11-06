import { readFileSync } from 'fs';

import {
  getRiskMatrix,
  getTransposedMatrix,
} from './utils';

const fileContentForA = readFileSync('src/data/strategiesA.txt', 'utf8');
const fileContentForQ = readFileSync('src/data/stateOfNatureProbabilityQ.txt', 'utf8');
const fileContentForP = readFileSync('src/data/conditionsProbabilityP.txt', 'utf8');

const filterA = fileContentForA
  .split('\n')
  .filter((position) => position !== '')
  .map((position) => position
    .split(' ')
    .filter((nextPos) => nextPos !== ''));

const filterQ = fileContentForQ
  .split(' ')
  .filter((position) => position !== '')
  .map((position) => position);

const filterP = fileContentForP
  .split('\n')
  .filter((position) => position !== '')
  .map((position) => position
    .split(' ')
    .filter((nextPos) => nextPos !== ''));


const A = filterA.map((str) => (str.map((value) => Number(value))));
const Q = filterQ.map((value) => Number(value));
const P = filterP.map((str) => (str.map((value) => Number(value))));
const alpha = 0.4;
const lines = A.length;
const columns = A[0].length;
const columnsOfP = P.length;
const R = getRiskMatrix(getTransposedMatrix(A, columns, lines));

export {
  A,
  Q,
  R,
  P,
  alpha,
  lines,
  columns,
  columnsOfP,
};
