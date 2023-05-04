#!/usr/bin/env node

import { program } from 'commander';
// eslint-disable-next-line import/extensions
import getDiffRec from '../src/getdiff_rec.js';

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    // eslint-disable-next-line no-console
    console.log(getDiffRec(filepath1, filepath2, program.opts().format));
  });

program.parse();
