// eslint-disable-next-line import/extensions
import _ from 'lodash';
// eslint-disable-next-line import/extensions
import { readFileFlat } from './utils.js';
// eslint-disable-next-line import/extensions
import { stylish } from '../formaters/stylish.js';
// eslint-disable-next-line import/extensions
import plain from '../formaters/plain.js';

const formatAddOption = (item) => {
  if (typeof item !== 'object' || _.isNull(item)) {
    return item;
  }
  const formatedObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in item) {
    if (typeof item[prop] !== 'object' || _.isNull(item[prop])) {
      const newKey = `  ${prop}`;
      formatedObj[newKey] = item[prop];
    } else {
      const newKey = `  ${prop}`;
      formatedObj[newKey] = formatAddOption(item[prop]);
    }
  }
  return formatedObj;
};

const keyCompare = (key, param1, param2) => {
  const keyMinus = `- ${key}`;
  const keyPlus = `+ ${key}`;
  const newKey = `  ${key}`;
  return param1 === param2
    ? { [newKey]: formatAddOption(param1) }
    : { [keyMinus]: formatAddOption(param1), [keyPlus]: formatAddOption(param2) };
};

export const compareObject = (obj1, obj2) => {
  const allKeys = Object.keys({ ...obj1, ...obj2 }).sort();
  let acc = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key of allKeys) {
    if (typeof obj1[key] !== 'object' || typeof obj2[key] !== 'object') {
      if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
        acc = Object.assign(acc, keyCompare(key, obj1[key], obj2[key]));
      } else if (Object.hasOwn(obj1, key)) {
        const newKey = `- ${key}`;
        acc[newKey] = formatAddOption(obj1[key]);
      } else {
        const newKey = `+ ${key}`;
        acc[newKey] = formatAddOption(obj2[key]);
      }
    } else {
      const newKey = `  ${key}`;
      acc[newKey] = compareObject(obj1[key], obj2[key]);
    }
  }
  return acc;
};

export default (path1, path2, format) => {
  const file1 = readFileFlat(path1);
  const file2 = readFileFlat(path2);
  if (format === 'stylish') {
    return stylish(compareObject(file1, file2), 0);
  }
  if (format === 'plain') {
    return plain(compareObject(file1, file2));
  }
  return compareObject(file1, file2);
};
