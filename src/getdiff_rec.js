import { readFileFlat } from './utils.js';
import formatter from '../formaters/index.js';

export default (path1, path2, format) => {
  const file1 = readFileFlat(path1);
  const file2 = readFileFlat(path2);
  return formatter(file1, file2, format);
};
