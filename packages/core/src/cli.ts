import { program } from 'commander';

program.option('-d, --debug', 'output extra debugging');
program.option('--dry-run', 'do a dry-run');

program.parse();

// const options = program.opts();
