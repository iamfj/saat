import { program } from 'commander';
import { Prisma } from '@prisma/client';

program.option('-d, --debug', 'output extra debugging');
program.option('--dry-run', 'do a dry-run');

program.parse();

const options = program.opts();

console.log('models', JSON.stringify(Prisma.dmmf.datamodel.models, null, 2));
