import { readFileSync } from 'node:fs';
// import _ from 'lodash';
import path from 'node:path';

export const getPath = (argument) => {
  const workingDir = process.cwd();
  //  if (workingDir.startsWith(argument)) {
  // return argument;
  // }
  return path.resolve(workingDir, argument);
};

export const readFileFlat = (filePath) => {
  const content = readFileSync(filePath, 'utf8');
  return JSON.parse(content);
};
