// Takes: An array of three strings
// Performs: It splits each string element into an array,
// it then compares the array form of one string to another
// Returns: It returns the character common in all three strings
// Note: This is essentially a crude set intersection operation for strings

export function findStringIntersection(array) {
  let [a, b, c] = array;

  a = a.split('');
  b = b.split('');
  c = c.split('');

  return a
    .filter((v) => {
      return b.includes(v);
    })
    .filter((v) => {
      return c.includes(v);
    })[0];
}
