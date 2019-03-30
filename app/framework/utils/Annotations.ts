import {isFunction} from "./CommonFunctions";

/**
 * 标记方法后自动绑定This指针为当前对象
 */
export function Bind<T extends Function>(target: object, // tslint:disable-line
                                         propertyKey: string,
                                         descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void {
  if (!isFunction(descriptor.value)) {
    throw new TypeError(`<${propertyKey}> is not a method`);
  }

  return {
    configurable: true,

    get(this: T): T {
      const bound: T = descriptor.value!.bind(this);
      Object.defineProperty(this, propertyKey, {value: bound, configurable: true, writable: true});
      return bound;
    }
  };
}
