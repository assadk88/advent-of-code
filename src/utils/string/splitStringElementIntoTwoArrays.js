export function splitStringElementIntoTwoArrays(stringElement) {
  const arrayElement = stringElement.split('');
  const medianIndex = arrayElement.length / 2;
  const subArrayA = arrayElement.slice(0, medianIndex);
  const subArrayB = arrayElement.slice(medianIndex);
  return [[...subArrayA], [...subArrayB]];
}
