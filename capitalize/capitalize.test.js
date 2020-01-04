import capitalize from './capitalize.js';

test('String test', () => {
  const value = 'hello';
  expect(capitalize(value)).not.toBeUndefined();
  expect(capitalize(value)).not.toBeNull();
  expect(capitalize(value)).toBeTruthy();
  expect(capitalize(value)).toBeDefined();
})

test('Basic functionality', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize).toThrow('You have to provide a string');
})
