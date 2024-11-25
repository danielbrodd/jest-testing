import { analyzeArray } from './analyzeArray';

describe('analyzeArray', () => {
  test('should exist', () => {
    expect(analyzeArray).toBeDefined();
  });
  let testObject = analyzeArray([1,2,3,4])
  test('returns average value', () => {
    expect(testObject.average).toBe(2.5);
  });
  test('returns min value', () => {
    expect(testObject.min).toBe(1);
  });
  test('returns max value', () => {
    expect(testObject.max).toBe(4);
  });
  test('returns length value', () => {
    expect(testObject.length).toBe(4);
  });
})

describe('analyzeArray full object', () => {
  let testObject = analyzeArray([1,2,3]);
  let proofObject = {average:2,min:1,max:3,length:3};

  test('return matches expectation', () => {
    expect(testObject).toEqual(proofObject);
  })
})
