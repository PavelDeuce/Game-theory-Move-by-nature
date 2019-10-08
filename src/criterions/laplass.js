import {
  A,
  columns,
  getMaxValue,
} from '../utils';


export default () => {
  const rowSum = A.map((r) => r.reduce((a, b) => a + b));
  const L = rowSum.map((value) => (1 / columns) * value);

  console.log(`Sum lines of A : ${rowSum}`);
  console.log(`Array L for Laplasse's criterion: ${L}`);
  console.log(`Optimal strategy by Laplass's criterion: A[${getMaxValue(L).key}] with value ${getMaxValue(L).max}\n`);
};
