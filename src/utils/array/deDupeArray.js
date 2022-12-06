// It takes an array, removing any duplicate elements from it, and returns a new array

export function deDupeArray(array) {
  array.filter((index, value, self) => {
    return self.indexOf(value) === index;
  });
}
