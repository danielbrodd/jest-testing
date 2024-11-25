import { capitalize } from './capitalize.js'

describe('capitalize', () => {
  test('takes a string and returns it with the first character capitalized and the others lower case', () =>{
    const word = capitalize('random')
    expect(word).toMatch('Random')
  });

  test('takes a second string and returns it capitalized',() => {
    let str = capitalize('hose');
    expect(str).toMatch('Hose');
  });
})
