import { readFileSync } from 'fs';

export default (path) => {
  const commonPath = 'src/data/';
  return readFileSync(`${commonPath}${path}`, 'utf8');
};
