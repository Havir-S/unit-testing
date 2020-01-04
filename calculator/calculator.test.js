import calculator from './calculator.js';

test('Addition', () => {
  expect(calculator.add(1,2)).toBe(3);
})

test('Subtraction', () => {
  expect(calculator.subtract(3,2)).toBe(1);
})

test('Multiplication', () => {
  expect(calculator.multiply(3,4)).toBe(12);
})

test('Division', () => {
  expect(calculator.divide(8,2)).toBe(4);
})

test('Error test', () => {
  expect(calculator.divide()).toBeNaN();
  expect(calculator.multiply()).toBeNaN();
  expect(calculator.subtract()).toBeNaN();
  expect(calculator.add()).toBeNaN();
})
