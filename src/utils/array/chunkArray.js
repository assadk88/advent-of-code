// Takes: An array and chunk size arguments,
// Returns: A new array containing subarrays of a specified chunk size.
// Note: The last array may be of an unequal size compared prior arrays.

export function chunkArray(array, chunkSize) {
  let chunkedArray = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }

  return chunkedArray;
}
