export const format = (data) => {
  return data
    .trim()
    .split('\n\n')
    .map((x) => {
      return x.split('\n').map((y) => {
        return parseInt(y);
      });
    });
};

export const part1 = (input) => {
  const data = format(input);
  return data
    .map((x) => {
      return x.reduce((y, z) => {
        return y + z;
      });
    })
    .sort((a, b) => {
      return b - a;
    })[0];
};

export const part2 = (input) => {
  const data = format(input);
  return data
    .map((x) => {
      return x.reduce((y, z) => {
        return y + z;
      });
    })

    .sort((a, b) => {
      return b - a;
    })
    .slice(0, 3)
    .reduce((x, y) => {
      return x + y;
    });
};
