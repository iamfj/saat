import { type Prisma } from '@prisma/client';
import { fake } from '@/lib/fake';
import { type ArrayElement, type NonNeverProperties } from '@/lib/utils';

type ModelNames = keyof Prisma.TypeMap['model'];

type ModelScalarInfer<Model extends ModelNames> =
  Prisma.TypeMap['model'][Model]['payload']['scalars'];

type ModelInfer<Model extends ModelNames, Visited extends ModelNames[] = []> = {
  [Field in keyof ModelScalarInfer<Model>]:
    | ModelScalarInfer<Model>[Field]
    | (() => ModelScalarInfer<Model>[Field])
    | (() => () => ModelScalarInfer<Model>[Field]);
} & ModelPayloadInfer<Model, Visited>;

type ModelObjectsInfer<Model extends ModelNames> =
  Prisma.TypeMap['model'][Model]['payload']['objects'];

type ModelPayloads<Model extends ModelNames> = {
  [ModelPayload in keyof ModelObjectsInfer<Model>]: ModelObjectsInfer<Model>[ModelPayload] extends unknown[]
    ? ArrayElement<ModelObjectsInfer<Model>[ModelPayload]>
    : ModelObjectsInfer<Model>[ModelPayload];
};

type ModelPayloadNameInfer<
  ModelPayload extends keyof ModelPayloads<Model>,
  Model extends ModelNames,
> = 'name' extends keyof NonNullable<ModelPayloads<Model>[ModelPayload]>
  ? NonNullable<ModelPayloads<Model>[ModelPayload]>['name'] extends ModelNames
    ? NonNullable<ModelPayloads<Model>[ModelPayload]>['name']
    : never
  : never;

type ModelPayloadInfer<
  Model extends ModelNames,
  Visited extends ModelNames[] = [],
> = NonNeverProperties<{
  [ModelPayload in keyof ModelPayloads<Model>]: Model extends Visited[number]
    ? never // Prevent circular dependency by checking if model is in the visited list
    : null extends ModelPayloads<Model>[ModelPayload]
      ? ModelInfer<
          ModelPayloadNameInfer<ModelPayload, Model>,
          [Model, ...Visited]
        > | null
      : ModelInfer<
          ModelPayloadNameInfer<ModelPayload, Model>,
          [Model, ...Visited]
        >;
}>;

type test = ModelPayloadInfer<'User'>['comments']['post'];

interface ModelFields<Model extends ModelNames> {
  times?: number;
  data: ModelInfer<Model>;
}

type test2 = ArrayElement<
  Prisma.TypeMap['model']['User']['payload']['objects']['posts']
>['name'];

export function saat<Model extends ModelNames>(
  model: Model,
  fields: ModelFields<Model>,
): Model | undefined {
  if (fields.data.id) return undefined;
  return model;
}

// ToDo: Remove before merge
saat('User', {
  times: 10,
  data: {
    id: fake('number.int'),
    email: fake('internet.email'),
    name: null,
    posts: null,
  },
});
