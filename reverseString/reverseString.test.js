import reverseString from './reverseString.js';


test('Basic string test',() => {
  const value = 'hello';
  expect(reverseString(value)).not.toBeUndefined();
  expect(reverseString(value)).not.toBeNull();
  expect(reverseString(value)).toBeTruthy();
  expect(reverseString(value)).toBeDefined();
})

test('There is no argument test',() => {
  expect(reverseString).toThrow('Argument has to be a string');
})

test('Reverse test', () => {
  expect(reverseString('hello')).toBe('olleh');
})
