// Takes: A string
// Perform: It splits the string into two even arrays (in the 'even' case)
// Returns: An array containing two subarrays
// Note: In the case of an odd number of characters in the string,
// one subarray may be larger than the other

export function splitStringElementIntoTwoArrays(stringElement) {
  const arrayElement = stringElement.split('');
  const medianIndex = arrayElement.length / 2;
  const subArrayA = arrayElement.slice(0, medianIndex);
  const subArrayB = arrayElement.slice(medianIndex);
  return [[...subArrayA], [...subArrayB]];
}
