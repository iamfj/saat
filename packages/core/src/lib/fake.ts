import { faker } from '@faker-js/faker';

// Get all module names from faker that are not functions
type ExportedModuleKeys = {
  [K in keyof typeof faker]: (typeof faker)[K] extends Function ? never : K;
}[keyof typeof faker];

// Get all method names from the modules that are functions
type ExportedMethodNames<Module extends ExportedModuleKeys> = {
  [Method in keyof (typeof faker)[Module]]: (typeof faker)[Module][Method] extends Function
    ? Method
    : never;
}[keyof (typeof faker)[Module]];

// Utility type to create dot-notation strings (e.g., "module.method")
type ExportedFakerMethods = {
  [Module in ExportedModuleKeys]: ExportedMethodNames<Module> extends string
    ? `${Module}.${ExportedMethodNames<Module>}`
    : never;
}[ExportedModuleKeys];

// Utility type to generate all parameter combinations for ExportedFakerMethods
type ExportedMethodParameters = {
  [Method in ExportedFakerMethods]: Method extends `${infer Module}.${infer MethodName}`
    ? Module extends keyof typeof faker
      ? MethodName extends keyof (typeof faker)[Module]
        ? (typeof faker)[Module][MethodName] extends (...args: any) => any
          ? Parameters<(typeof faker)[Module][MethodName]>
          : never
        : never
      : never
    : never;
};

// Utility type to generate all return types for ExportedFakerMethods
type ExportedMethodReturnTypes = {
  [Method in ExportedFakerMethods]: Method extends `${infer Module}.${infer MethodName}`
    ? Module extends keyof typeof faker
      ? MethodName extends keyof (typeof faker)[Module]
        ? (typeof faker)[Module][MethodName] extends (...args: any) => any
          ? ReturnType<(typeof faker)[Module][MethodName]>
          : never
        : never
      : never
    : never;
};

// Utility type to generate a function signature for each ExportedFakerMethods
export type FakeGenerator<M extends ExportedFakerMethods> = (
  ...args: ExportedMethodParameters[M]
) => ExportedMethodReturnTypes[M];

// Fake function that takes a module name and method name and returns a function
export function fake<M extends ExportedFakerMethods>(
  module: M,
): FakeGenerator<M> {
  return (
    ...args: ExportedMethodParameters[M]
  ): ExportedMethodReturnTypes[M] => {
    const [moduleName, methodName] = module.split('.');
    if (!faker[moduleName] || !faker[moduleName][methodName]) {
      throw new Error(`Invalid module or method: ${module}`);
    }
    return faker[moduleName][methodName](...args);
  };
}

// Export default fake function
export default { fake };
