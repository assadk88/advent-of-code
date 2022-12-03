export const format = (data) => {
  return data.trim().split('\n');
};

export const part1 = (input) => {
  const data = format(input);

  const PERMUTATIONS = new Map([
    [/\bB\sX\b/, 1],
    [/\bC\sY\b/, 2],
    [/\bA\sZ\b/, 3],
    [/\bA\sX\b/, 4],
    [/\bB\sY\b/, 5],
    [/\bC\sZ\b/, 6],
    [/\bC\sX\b/, 7],
    [/\bA\sY\b/, 8],
    [/\bB\sZ\b/, 9]
  ]);

  function replace(data) {
    let str;
    for (let [key, value] of PERMUTATIONS) {
      if (data.match(key)) {
        str = data.replace(key, value);
      }
    }
    return str;
  }

  return data
    .map((x) => replace(x))
    .map((y) => parseInt(y))
    .reduce((acc, val) => acc + val);
};

export const part2 = (input) => {
  const data = format(input);

  const PERMUTATIONS = new Map([
    [/\bA\sX\b/, 3],
    [/\bB\sX\b/, 1],
    [/\bC\sX\b/, 2],
    [/\bA\sY\b/, 4],
    [/\bB\sY\b/, 5],
    [/\bC\sY\b/, 6],
    [/\bC\sZ\b/, 7],
    [/\bA\sZ\b/, 8],
    [/\bB\sZ\b/, 9]
  ]);

  function replace(data) {
    let str;
    for (let [key, value] of PERMUTATIONS) {
      if (data.match(key)) {
        str = data.replace(key, value);
      }
    }
    return str;
  }

  return data
    .map((x) => replace(x))
    .map((y) => parseInt(y))
    .reduce((acc, val) => acc + val);
};
