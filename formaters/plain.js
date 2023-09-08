/* eslint-disable no-var */
/* eslint-disable vp/no-mutating */

import _ from 'lodash';

const dataConvert = (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  if (typeof data === 'object' && !_.isNull(data)) {
    return '[complex value]';
  }
  return data;
};

const analyze = (object, key, pathAcc) => {
  const cleanKey = key.slice(2);
  const keyKode = key.slice(0, 2);
  const keyMinus = `- ${cleanKey}`;
  const keyPlus = `+ ${cleanKey}`;
  const path = `${pathAcc}.${cleanKey}`.slice(1);
  switch (keyKode) {
    case '- ':
      if (Object.hasOwn(object, keyPlus)) {
        const result1 = `Property '${path}' was updated. From ${dataConvert(object[key])} to ${dataConvert(object[keyPlus])}\n`;
        return result1;
      // eslint-disable-next-line no-else-return
      } else {
        const result1 = `Property '${path}' was removed\n`;
        return result1;
      }
    case '+ ':
      if (!Object.hasOwn(object, keyMinus)) {
        const result1 = `Property '${path}' was added with value: ${dataConvert(object[key])}\n`;
        return result1;
      }
      break;
    default:
      break;
  }
  return '';
};

export default (comparedObject1) => {
  // eslint-disable-next-line no-var
  var resultStr = '';
  const plain1 = (comparedObject, pathAcc) => {
    const keys = Object.keys({ ...comparedObject });
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      const keyKode = key.slice(0, 2);
      if (typeof comparedObject[key] !== 'object') {
        resultStr += analyze(comparedObject, key, pathAcc);
      } else if (_.isNull(comparedObject[key])) {
        resultStr += analyze(comparedObject, key, pathAcc);
      } else if (typeof comparedObject[key] === 'object' && keyKode === '  ') {
        const newPathAcc = `${pathAcc}.${key.slice(2)}`;
        plain1(comparedObject[key], newPathAcc);
      } else if (typeof comparedObject[key] === 'object' && keyKode !== '  ') {
        resultStr += analyze(comparedObject, key, pathAcc);
      }
    }
  };
  plain1(comparedObject1, '');
  return (resultStr.slice(0, resultStr.length - 1));
};
