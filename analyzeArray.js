export function analyzeArray(array) {
  const average = {
    average: (array.reduce( (accumulator,curr) => accumulator + curr, 0) / array.length)
  };
  const min = {
    min: Math.min(...array)
  };
  const max = {
    max: Math.max(...array)
  };
  const length = {
    length: array.length
  }
  return {...average, ...min, ...max, ...length}
};
