import { type Prisma } from '@prisma/client';

type ModelName = keyof Prisma.TypeMap['model'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- not implemented yet
export function saat(model: ModelName, options: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- not implemented yet
  return [model, options];
}
