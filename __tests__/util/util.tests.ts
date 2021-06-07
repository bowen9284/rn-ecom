import { formatPrice } from './../../util/currency';

test('given 100, formatPrice() returns $100.00', () => {
  const result = formatPrice(100);
  expect(result).toBe('$100.00');
});

test('given 1150.5, formatPrice() returns $1,150.50', () => {
  const result = formatPrice(1150.5);
  expect(result).toBe('$1,150.50');
});

test('given 100.594, formatPrice() returns $100.59', () => {
  const result = formatPrice(100.594);
  expect(result).toBe('$100.59');
});

test('given 100.596, formatPrice() returns $100.60', () => {
  const result = formatPrice(100.596);
  expect(result).toBe('$100.60');
});
