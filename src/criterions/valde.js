import { A } from '../dataForCriterion';
import { getLimitValueInVector } from '../utils';

export default () => {
  const minValues = [];

  A.forEach((str, key) => {
    minValues[key] = getLimitValueInVector(str, 'min').limitValue;
  });

  const valde = getLimitValueInVector(minValues, 'max');
  console.log(`Optimal strategy by Valde's criterion : A[${valde.key}] with value ${valde.limitValue}\n`);
};
