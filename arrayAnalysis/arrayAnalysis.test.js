import arrayAnalysis from './arrayAnalysis.js';


test('Return an object', () => {
  const arr = [1,2,3,4,5];
  const obj = {
    average: 3,
    min: 1,
    max: 5,
    length: 5
  }
  expect(arrayAnalysis(arr)).toMatchObject(obj)
})
