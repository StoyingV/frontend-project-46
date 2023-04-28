// eslint-disable-next-line import/extensions
import { readFileFlat } from './utils.js';

const keyCompare = (key, obj1, obj2) => {
  if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
    return obj1[key] === obj2[key]
      ? `  ${key}: ${obj1[key]}`
      : [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`];
  }
  if (Object.hasOwn(obj1, key)) {
    return `- ${key}: ${obj1[key]}`;
  }
  return `+ ${key}: ${obj2[key]}`;
};

const getDiff = (path1, path2) => {
  const file1 = readFileFlat(path1);
  const file2 = readFileFlat(path2);

  const compareObject = (obj1, obj2) => {
    const allKeys = Object.keys({ ...obj1, ...obj2 }).sort();

    const acc = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key of allKeys) {
      acc.push(keyCompare(key, obj1, obj2));
    }
    const result = ['{', ...acc.flat(), '}'].join('\n');
    return result;
  };
  return compareObject(file1, file2);
};

export default getDiff;
// const p1 = "__tests__/file1.json";
// const p2 = "__tests__/file2.json";

// console.log(getDiff(p1, p2));
