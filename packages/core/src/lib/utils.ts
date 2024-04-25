export type NonNeverProperties<T> = {
  [P in keyof T as T[P] extends never ? never : P]: T[P];
};

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
