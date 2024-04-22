import { faker, type Faker } from '@faker-js/faker';

type FakerModuleKeys = keyof Faker;

type FakerModuleMethods<Module extends FakerModuleKeys> = {
  [Method in keyof Faker[Module]]: Method extends string ? Method : never;
}[keyof Faker[Module]];

type FakerMethods = {
  [Module in FakerModuleKeys]: {
    [Method in FakerModuleMethods<Module>]: `${Module}.${Method}`;
  }[FakerModuleMethods<Module>];
}[FakerModuleKeys];

type FakerInfer<T extends FakerMethods> =
  T extends `${infer Module}.${infer Method}`
    ? Module extends FakerModuleKeys
      ? Method extends FakerModuleMethods<Module>
        ? Faker[Module][Method]
        : never
      : never
    : never;

type FakeGenerator<Method extends FakerMethods> = (
  method: Method,
) => (
  ...args: Parameters<FakerInfer<Method>>
) => ReturnType<FakerInfer<Method>>;

function isFakerModuleKey(module: string): module is FakerModuleKeys {
  return module in faker;
}

function isFakerModuleMethod<Module extends FakerModuleKeys>(
  module: Module,
  method: string,
): method is FakerModuleMethods<Module> {
  return method in faker[module];
}

function getFakerMethod<
  Module extends FakerModuleKeys,
  Method extends FakerModuleMethods<Module>,
>(module: Module, method: Method): Faker[Module][Method] {
  const moduleObj = faker[module];
  const methodObj = moduleObj[method];
  if (typeof methodObj === 'function') {
    return methodObj as Faker[Module][Method];
  }
  throw new Error('Method is not callable');
}

export function fake<Method extends FakerMethods>(
  method: Method,
): FakeGenerator<Method> {
  const methodSplit = method.split('.');

  if (methodSplit.length !== 2) {
    throw new Error(`Invalid method: ${method}`);
  }

  const moduleName = methodSplit[0] as FakerModuleKeys | undefined;

  if (!moduleName) {
    throw new Error(`Invalid method: ${method}`);
  }

  const methodName = methodSplit[1] as FakerModuleMethods<typeof moduleName>;

  if (
    !isFakerModuleKey(moduleName) ||
    !isFakerModuleMethod(moduleName, methodName)
  ) {
    throw new Error(`Invalid method: ${method}`);
  }

  // Ensure type assertions for function call
  return (...args) => {
    const fakerMethod = getFakerMethod(moduleName, methodName);
    return (fakerMethod as FakeGenerator<Method>)(...args);
  };
}
