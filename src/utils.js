import { readFileSync } from 'node:fs';
// import _ from 'lodash';
import path from 'node:path';
// eslint-disable-next-line import/no-extraneous-dependencies
import YAML from 'yaml';

export const getPath = (argument) => {
  const workingDir = process.cwd();
  //  if (workingDir.startsWith(argument)) {
  // return argument;
  // }
  return path.resolve(workingDir, argument);
};

export const readFileFlat = (filePath) => {
  const pathData = path.parse(filePath);
  const content = readFileSync(filePath, 'utf8');
  switch (pathData.ext) {
    case '.json':
      return JSON.parse(content);
    case '.yaml':
      return YAML.parse(content);
    case '.yml':
      return YAML.parse(content);
    default:
      return {};
  }
};
