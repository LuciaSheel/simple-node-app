const { add } = require('./math');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(add(-1, -1)).toBe(-2);
});
