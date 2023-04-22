/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import path from 'node:path';
import getDiff from '../src/getdiffflat.js';

test('Flat object differences', () => {
  const path1 = path.resolve(process.cwd(), '../__tests__/file1.json');
  const path2 = path.resolve(process.cwd(), '../__tests__/file2.json');
  const answer = '- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true';
  expect(getDiff(path1, path2)).toEqual(answer);
});
