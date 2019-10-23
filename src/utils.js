export const A = [
  [13, 15, 8, 5, 10, 14],
  [11, 13, 5, 12, 6, 8],
  [14, 12, 14, 11, 13, 6],
  [11, 8, 6, 9, 14, 13],
];
export const Q = [0.214, 0.072, 0.225, 0.08, 0.113, 0.296];
export const alpha = 0.4;

export const P = [
  [0.22, 0.24, 0.18, 0.39, 0.33, 0.14],
  [0.18, 0.06, 0.24, 0.06, 0.07, 0.15],
  [0.18, 0.09, 0.37, 0.08, 0.32, 0.26],
  [0.19, 0.32, 0.11, 0.11, 0.15, 0.19],
  [0.23, 0.29, 0.1, 0.36, 0.13, 0.26],
];

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
