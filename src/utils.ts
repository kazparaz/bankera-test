import { CURRENCIES } from './api'

export function formatCurrency(
  value: number,
  currencyCode: typeof CURRENCIES[number]
): string {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
  }).format(value)
}

export function isOneOf<T extends string | number | boolean>(
  value: string | number | boolean | undefined,
  array: T[] | readonly T[]
): value is T {
  return typeof value !== 'undefined' && array.includes(value as T)
}
