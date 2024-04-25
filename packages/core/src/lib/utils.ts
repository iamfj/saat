import { faker } from '@faker-js/faker';

export type NonNeverProperties<T> = {
  [P in keyof T as T[P] extends never ? never : P]: T[P];
};

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/**
 * Freezes the seed for faker to ensure consistent results.
 *
 * USE IN TESTS ONLY!
 */
export const withFrozenSeed = <R>(fn: () => R, seed = 1000): R => {
  faker.seed(seed);
  return fn();
};
