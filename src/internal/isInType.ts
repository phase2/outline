//
// Returns a boolean whether the value is in the provided type
//
export function isInType<T>(x: T, values: readonly T[]): x is T {
  const result = values.includes(x);
  if (!result) {
    typeWarning(x, values);
  }
  return result;
}

export function typeWarning<T>(value: T, type: readonly T[]) {
  // eslint-disable-next-line
  console.warn(
    `Warning: "${value}" is not of type ButtonVariant. Provide one of '${type.join(
      ' | '
    )}' for "button-variant".`
  );
}
