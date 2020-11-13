const emptyString = '';
const space = ' ';
const newLine = '\n';

const parseLine = (line) => line
  .split(space)
  .filter((position) => position !== emptyString);

const parseMatrix = (stringMatrix) => stringMatrix
  .split(newLine)
  .filter((position) => position !== emptyString)
  .map((position) => parseLine(position)
    .map((value) => Number(value)));

const parseVector = (stringVector) => parseLine(stringVector)
  .map((value) => Number(value));

const parseValue = (value) => Number(value);

export {
  parseMatrix,
  parseVector,
  parseValue,
};
