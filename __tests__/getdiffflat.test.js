/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getDiff from '../src/getdiffflat.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);
const answer = '{ \n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

test('Flat object differences json', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(answer);
});

test('Flat object differences yaml', () => {
  expect(getDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(answer);
});

test('Flat object differences yml', () => {
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(answer);
});

test('Flat object differences json and yml', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.yml'))).toEqual(answer);
});
