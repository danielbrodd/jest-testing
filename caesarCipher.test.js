import { caesarCipher } from './caesarCipher.js'
describe('caesarCipher', () => {
  let testCases = [
    {input: 'hello', output: 'khoor', key: 3},
    {input: 'test', output: 'vguv', key: 2}, 
    {input: 'CaZ', output: 'HfE', key: 5},
    {input: 'Daniel!', output: 'Gdqlho!', key: 3},
    ];
  testCases.forEach( testCase => {
    test(`encrypts ${testCase.input} with key ${testCase.key} and returns ${testCase.output}`, () => {
        expect(caesarCipher(testCase.input, testCase.key)).toMatch(testCase.output);
    })
  })
})
