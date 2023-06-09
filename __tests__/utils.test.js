/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getPath, readFileFlat } from '../src/utils.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

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
  expect(readFileFlat(getFixturePath('file1.json'))).toEqual(obj);
  expect(readFileFlat(getFixturePath('file1.yaml'))).toEqual(obj);
  expect(readFileFlat(getFixturePath('file1.yml'))).toEqual(obj);
});
