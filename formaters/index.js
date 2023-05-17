import { stylish } from './stylish.js';
import plain from './plain.js';
import jsonFormater from './json.js';
import { compareObject } from '../src/getdiffObject.js';

export default (file1, file2, formater) => {
  if (formater === 'stylish') {
    return stylish(compareObject(file1, file2), 0);
  }
  if (formater === 'plain') {
    return plain(compareObject(file1, file2));
  }
  if (formater === 'json') {
    return jsonFormater(compareObject(file1, file2));
  }
  return 'format is not indefined';
};
