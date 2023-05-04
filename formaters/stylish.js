import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const stylish = (comparedObject, depth) => {
  const keys = Object.keys({ ...comparedObject });
  let acc = '';
  acc += '{\n';
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    acc += `${' '.repeat(depth * 4 + 2) + key}: `;
    if (typeof comparedObject[key] !== 'object') {
      const result = `${comparedObject[key]}\n`;
      acc += result;
    } else if (_.isNull(comparedObject[key])) {
      acc += 'null\n';
    } else if (typeof comparedObject[key] === 'object') {
      acc += `${stylish(comparedObject[key], depth + 1)}\n`;
    }
  }
  acc += `${' '.repeat(depth * 4)}}`;
  return acc;
};
