import readFile from './readFile';
import { parseMatrix, parseVector, parseValue } from './parsers';
import { getRiskMatrix, getTransposedMatrix } from './utils';

const alpha = parseValue(readFile('alpha.txt'));
const A = parseMatrix(readFile('strategiesA.txt'));
const Q = parseVector(readFile('stateOfNatureProbabilityQ.txt'));
const P = parseMatrix(readFile('conditionsProbabilityP.txt'));
const lines = A.length;
const columns = A[0].length;
const columnsOfP = P.length;
const R = getRiskMatrix(getTransposedMatrix(A, columns, lines));

export {
  alpha,
  A,
  Q,
  P,
  R,
  lines,
  columns,
  columnsOfP,
};
