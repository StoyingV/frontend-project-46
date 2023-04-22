/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import path from 'node:path';
import { getPath, readFileFlat } from '../src/utils.js';

test('path', () => {
  expect(getPath('./book/get.js')).toEqual(
    path.resolve(process.cwd(), './book/get.js'),
  );
  expect(getPath('/home/vitaly/frontend-project-46/src/src/index.js')).toEqual(
    '/home/vitaly/frontend-project-46/src/src/index.js',
  );
});

test('Readfile', () => {
  const obj = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  expect(readFileFlat(path.resolve(process.cwd(), '../__tests__/file1.json'))).toEqual(obj);
});
