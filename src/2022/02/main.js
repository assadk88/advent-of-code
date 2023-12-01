export const format = (data) => {
  return data.trim().split('\n');
};

const replace = function (data, permutations) {
  let str;
  for (const [key, value] of permutations) {
    if (data.match(key)) {
      str = data.replace(key, value);
    }
  }
  return str;
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

  return data
    .map((x) => {
      return replace(x, PERMUTATIONS);
    })
    .map((y) => {
      return parseInt(y);
    })
    .reduce((acc, val) => {
      return acc + val;
    });
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

  return data
    .map((x) => {
      return replace(x, PERMUTATIONS);
    })
    .map((y) => {
      return parseInt(y);
    })
    .reduce((acc, val) => {
      return acc + val;
    });
};
