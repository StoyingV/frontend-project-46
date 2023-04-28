/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'node:fs';
import getDiffRec from '../src/getdiff_rec.js';
import { formatter } from '../src/stylish.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const answerFlat = readFileSync(getFixturePath('answerFlat.txt'), 'utf8');
const answerRec = readFileSync(getFixturePath('answerRec.txt'), 'utf8');

test('Flat object differences json and yml', () => {
  expect(formatter(getDiffRec(getFixturePath('file1.json'), getFixturePath('file2.yml')), 0)).toEqual(answerFlat);
});

test('Recursive files difference json and yml', () => {
  expect(formatter(getDiffRec(getFixturePath('fileRec1.json'), getFixturePath('fileRec2.yml')), 0)).toEqual(answerRec);
});
