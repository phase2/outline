//
// Returns a boolean whether the value is in the provided type
//
export function isInType<T>(x: T, values: readonly T[], name = ''): x is T {
  const result = values.includes(x);
  if (!result) {
    typeWarning(x, values, name);
  }
  return result;
}

export function typeWarning<T>(x: T, values: readonly T[], name = '') {
  // eslint-disable-next-line
  console.warn(
    `Warning: "${x}" is not ${
      name ? `of type ${name}` : `in type`
    }. Allowed '${values.join(' | ')}'.`
  );
}
