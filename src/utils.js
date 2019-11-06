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
