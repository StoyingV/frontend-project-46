#!/usr/bin/env node

import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format');

program.parse();
