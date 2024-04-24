import { type Prisma } from '@prisma/client';
import { fake } from '@/lib/fake';

type ModelNames = keyof Prisma.TypeMap['model'];

type ModelScalars<Model extends ModelNames> = {
  [Field in keyof Prisma.TypeMap['model'][Model]['payload']['scalars']]:
    | Prisma.TypeMap['model'][Model]['payload']['scalars'][Field]
    | (() => () => Prisma.TypeMap['model'][Model]['payload']['scalars'][Field]);
};

export function saat<M extends ModelNames>(
  model: M,
  fields: Partial<ModelScalars<M>>,
): M | undefined {
  if (fields.id) return undefined;
  return model;
}

// ToDo: Remove before merge
saat('User', { email: fake('internet.email') });
