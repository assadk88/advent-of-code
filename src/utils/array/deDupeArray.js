// Takes: An array
// Performs: Removes any duplicate elements from the array
// Returns: A new array containing only unique elements

export function deDupeArray(array) {
  array.filter((index, value, self) => {
    return self.indexOf(value) === index;
  });
}
