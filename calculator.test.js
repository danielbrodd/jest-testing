import { calculator } from './calculator.js';

describe('calculator', () => {
  
  test('should exist', () => {
    expect(calculator).toBeDefined();
  });

  describe('add', () => {
    test('returns the sum of a and b', () =>{
      let a = 3, b = 3, res = 6;
      expect(calculator.add(a,b)).toBe(res);
    })
  });
  describe('subtract', () =>{
    test('returns the difference of a and b', () => {
      let a = 8, b = 3, res = 5;
      expect(calculator.sub(a,b)).toBe(res);
    });
    test('does not return the sum of a and b', () => {
      let a = 8, b = 3, res = 11;
      expect(calculator.sub(a,b)).not.toBe(res);
    })   
  })

  describe('mulitply', () =>{
    test('to return the product of a and b', () => {
      let a = 2, b = 3, res = 6;
      expect(calculator.mul(a,b)).toBe(res);
    })
  })

  describe('divide', () =>{
    test('return teh quotient of a and b', () => {
      let a = 10, b = 2, res = 5;
      expect(calculator.div(a,b)).toBe(res);
    })
  })
})
