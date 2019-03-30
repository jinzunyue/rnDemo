export function isPresent(value: any): boolean {
  return value != null;
}

export function isBlank(value: any): boolean {
  return value == null;
}

export function getValue<T>(input: T | undefined): T {
  if (input != null) {
    return input;
  } else {
    throw new Error("Value is not defined");
  }
}

export function isEmptyString(value?: string): boolean {
  return isBlank(value) || value!.length === 0;
}

export function isEmptyArray(value: any[]): boolean {
  return isBlank(value) || value.length === 0;
}

export function isEmptyMap(value?: Map<any, any>): boolean {
  return isBlank(value) || Array.from(value!.keys()).length === 0;
}

export function isFunction(value: any): boolean {
  return isPresent(value) && typeof value === "function";
}
