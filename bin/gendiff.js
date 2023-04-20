#!/usr/bin/env node

import { program } from 'commander';
// eslint-disable-next-line import/extensions
import getDiff from '../src/getdiffflat.js';

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    // eslint-disable-next-line no-console
    console.log(getDiff(filepath1, filepath2));
  });

program.parse();
