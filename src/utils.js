const getLimitValueInVector = (array, limit) => {
  let limitValue = array[0];
  let key = 0;
  array.forEach((value, keys) => {
    const condition = limit === 'max' ? limitValue < value : limitValue > value;

    if (condition) {
      limitValue = value;
      key = keys;
    }
  });
  return {
    limitValue,
    key,
  };
};

const getTransposedMatrix = (matrix, linesQuantity, columnsQuantity) => {
  const newArray = [];
  for (let i = 0; i < linesQuantity; i += 1) {
    newArray[i] = [];
    for (let j = 0; j < columnsQuantity; j += 1) {
      newArray[i].push(matrix[j][i]);
    }
  }
  return newArray;
};

const getRiskMatrix = (matrix) => {
  const max = [];
  matrix.forEach((str, key) => {
    max[key] = getLimitValueInVector(str, 'max').limitValue;
  });
  return matrix.map((str, key) => str.map((value) => max[key] - value));
};

export {
  getLimitValueInVector,
  getTransposedMatrix,
  getRiskMatrix,
};
