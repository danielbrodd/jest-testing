import reverseString from './reverseString.js';

describe('reverseString', () => {
  test('should exist', () => {
    expect(reverseString).toBeDefined();
  });
  let testCases = [{word: 'hi', res: 'ih'}, {word:'bye', res: 'eyb'}, {word:'buffalo', res:'olaffub'}];
  
  testCases.forEach( word => {
    test('returns reversed string', () => {
      let res = reverseString(word.word);

      expect(res).toMatch(word.res)
    })
  })
})
