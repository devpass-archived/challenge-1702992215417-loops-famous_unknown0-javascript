const { calculateTotal } = require('./loopUtils');

test('Calculate total sum of numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(calculateTotal(numbers)).toBe(15);
});