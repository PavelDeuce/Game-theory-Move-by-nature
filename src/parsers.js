const emptyString = '';
const space = ' ';
const newLine = '\n';

const parseMatrix = (stringMatrix) => stringMatrix
  .split(newLine)
  .filter((position) => position !== emptyString)
  .map((position) => position
    .split(space)
    .filter((nextPos) => nextPos !== emptyString)
    .map((value) => Number(value)));

const parseVector = (stringVector) => stringVector
  .split(space)
  .filter((position) => position !== emptyString)
  .map((value) => Number(value));

const parseValue = (value) => Number(value);

export {
  parseMatrix,
  parseVector,
  parseValue,
};
