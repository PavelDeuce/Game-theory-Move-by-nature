import { A, alpha } from '../dataForCriterion';
import { getLimitValueInVector } from '../utils';

export default () => {
  const H = [];

  A.forEach((str, key) => {
    H[key] = (alpha * getLimitValueInVector(str, 'min').limitValue) + ((1 - alpha) * getLimitValueInVector(str, 'max').limitValue);
  });

  const gurvic = getLimitValueInVector(H, 'max');
  console.log(`Optimal strategy by Gurvices's criterion: A[${gurvic.key}] with value ${gurvic.limitValue}\n`);
};
