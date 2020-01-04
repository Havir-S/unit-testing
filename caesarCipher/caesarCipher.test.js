import caesarCipher from './caesarCipher.js';

test('String test', () => {
  const value = 'hello';
  // expect(caesarCipher(value,1)).toBeTruthy();
  // expect(caesarCipher(value,1)).not.toBeUndefined();
  // expect(caesarCipher(value,1)).not.toBeNull();
})

test('Functionality test', () => {
  expect(caesarCipher('hello',1)).toBe("ifmmp");
  expect(caesarCipher('Hello',1)).toBe("Ifmmp");
  expect(caesarCipher('H-e-l l_o',2)).toBe("J-g-n n_q");
})
