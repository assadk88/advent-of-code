export const format = (data) => {
  return data
    .trim()
    .split('\n\n')
    .map((x) => x.split('\n').map((y) => parseInt(y)));
};

export const part1 = (input) => {
  const data = format(input);
  return data.map((x) => x.reduce((y, z) => y + z)).sort((a, b) => b - a)[0];
};

export const part2 = (input) => {
  const data = format(input);
  return data
    .map((x) => x.reduce((y, z) => y + z))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((x, y) => x + y);
};
