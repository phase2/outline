//
// Returns a boolean whether the value is in the provided type
//
export function isInType<T>(x: T, values: readonly T[]): x is T {
  return values.includes(x);
}

export function typeWarning<T>(value: T, type: readonly T[]) {
  // eslint-disable-next-line
  console.warn(
    `Warning: "${value}" is not of type ButtonVariant. Provide one of '${type.join(
      ' | '
    )}' for "button-variant".`
  );
}
