export function formatCurrency(value: number): string {
  return value.toFixed(4)
}

export function isOneOf<T extends string | number | boolean>(
  value: string | number | boolean | undefined,
  array: T[] | readonly T[]
): value is T {
  return typeof value !== 'undefined' && array.includes(value as T)
}
