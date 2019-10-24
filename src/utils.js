const fs = require('fs');

const fileContentForA = fs.readFileSync('sourceDataForA.txt', 'utf8');
const fileContentForQ = fs.readFileSync('sourceDataForQ.txt', 'utf8');
const fileContentForP = fs.readFileSync('sourceDataForP.txt', 'utf8');

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


export const A = filterA.map((str) => (str.map((value) => Number(value))));
export const Q = filterQ.map((value) => Number(value));
export const P = filterP.map((str) => (str.map((value) => Number(value))));

export const alpha = 0.4;
export const lines = A.length;
export const columns = A[0].length;
export const columnsOfP = P.length;

export const getMaxValue = (array) => {
  let max = array[0];
  let key = 0;
  array.forEach((value, keys) => {
    if (max < value) {
      max = value;
      key = keys;
    }
  });
  return {
    max,
    key,
  };
};

export const getMinValue = (array) => {
  let min = array[0];
  let key = 0;
  array.forEach((value, keys) => {
    if (min > value) {
      min = value;
      key = keys;
    }
  });
  return {
    min,
    key,
  };
};

export const getTransposedMatrix = (matrix, linesQuantity, columnsQuantity) => {
  const newArray = [];
  for (let i = 0; i < linesQuantity; i += 1) {
    newArray[i] = [];
    for (let j = 0; j < columnsQuantity; j += 1) {
      newArray[i].push(matrix[j][i]);
    }
  }
  return newArray;
};

export const getRiskMatrix = (matrix) => {
  const max = [];
  matrix.forEach((str, key) => {
    max[key] = getMaxValue(str).max;
  });
  return matrix.map((str, key) => str.map((value) => max[key] - value));
};

export const R = getRiskMatrix(getTransposedMatrix(A, columns, lines));
